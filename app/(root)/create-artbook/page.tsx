"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader, Upload, Sparkles, BookOpen, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ARTBOOK_CATEGORIES } from "@/constants"
import { Id } from "@/types"

const formSchema = z.object({
  title: z.string().min(2, "標題至少需要2個字符"),
  description: z.string().min(10, "描述至少需要10個字符"),
  category: z.string().min(1, "請選擇故事類別"),
})

const CreateArtbook = () => {
  const router = useRouter()
  const { toast } = useToast()
  
  // Cover image states
  const [coverImagePrompt, setCoverImagePrompt] = useState('')
  const [coverImageStorageId, setCoverImageStorageId] = useState<Id<"_storage"> | null>(null)
  const [coverImageUrl, setCoverImageUrl] = useState('')
  
  // Story generation states
  const [storyOutlines, setStoryOutlines] = useState<string[]>(['', '', ''])
  const [isGeneratingStory, setIsGeneratingStory] = useState<boolean[]>([false, false, false])
  
  // Cover generation states
  const [isGeneratingCover, setIsGeneratingCover] = useState(false)
  const [isUploadingCustomImage, setIsUploadingCustomImage] = useState(false)
  
  // Submit state
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  })

  const handleGenerateStory = async (index: number) => {
    setIsGeneratingStory(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })

    try {
      // Simulate AI story generation
      setTimeout(() => {
        setStoryOutlines(prev => {
          const newOutlines = [...prev]
          newOutlines[index] = `AI 生成的故事內容 ${index + 1}：基於您的標題和描述，這裡會是 AI 生成的故事大綱...`
          return newOutlines
        })
        
        setIsGeneratingStory(prev => {
          const newState = [...prev]
          newState[index] = false
          return newState
        })
      }, 2000)
    } catch (error) {
      console.error('生成故事時出錯:', error)
      setIsGeneratingStory(prev => {
        const newState = [...prev]
        newState[index] = false
        return newState
      })
    }
  }

  const handleGenerateCover = async () => {
    setIsGeneratingCover(true)
    
    try {
      // Simulate AI image generation
      setTimeout(() => {
        setCoverImageUrl('/images/sample-cover.jpg')
        setIsGeneratingCover(false)
        toast({
          title: '封面生成成功！',
          description: 'AI 已為您生成了精美的故事書封面。'
        })
      }, 3000)
    } catch (error) {
      console.error('生成封面時出錯:', error)
      setIsGeneratingCover(false)
      toast({
        title: '生成失敗',
        description: '請稍後再試',
        variant: 'destructive',
      })
    }
  }

  const handleCustomImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploadingCustomImage(true)
      
      // Simulate file upload
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file)
        setCoverImageUrl(imageUrl)
        setIsUploadingCustomImage(false)
        toast({
          title: '圖片上傳成功！',
          description: '您的自定義封面已上傳。'
        })
      }, 1500)
    }
  }

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      
      // Validate required fields
      if (!coverImageUrl) {
        toast({
          title: '請生成或上傳封面圖片',
          variant: 'destructive',
        })
        setIsSubmitting(false)
        return
      }

      // Simulate API call
      setTimeout(() => {
        toast({ 
          title: 'AI 故事書創建成功！',
          description: '您現在可以開始添加章節了。'
        })
        
        setIsSubmitting(false)
        router.push('/')
      }, 2000)
      
    } catch (error) {
      console.error('創建故事書時出錯:', error)
      toast({
        title: '創建失敗',
        description: '請稍後再試',
        variant: 'destructive',
      })
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mt-10 flex flex-col px-4 lg:px-8">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-orange-1" />
        <h1 className="text-30 font-bold text-white-1">Create a Artbook</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex w-full flex-col max-w-4xl">
          {/* Basic Information Section */}
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            {/* Story Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Story title</FormLabel>
                  <FormControl>
                    <Input 
                      className="input-class focus-visible:ring-offset-orange-1" 
                      placeholder="The JSM Masterclass Podcast"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />

            {/* Category */}
            <div className="flex flex-col gap-2.5">
              <Label className="text-16 font-bold text-white-1">Category</Label>
              <Select onValueChange={(value) => form.setValue('category', value)}>
                <SelectTrigger className="text-16 w-full border-none bg-black-1 text-gray-1 focus-visible:ring-offset-orange-1">
                  <SelectValue placeholder="Select category" className="placeholder:text-gray-1" />
                </SelectTrigger>
                <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1">
                  {ARTBOOK_CATEGORIES.map((category) => (
                    <SelectItem key={category} value={category} className="capitalize focus:bg-orange-1">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      className="input-class focus-visible:ring-offset-orange-1" 
                      placeholder="Write a short description about the story" 
                      rows={4}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-white-1" />
                </FormItem>
              )}
            />
          </div>

          {/* AI Generation Section */}
          <div className="flex flex-col pt-10 gap-8">
            {/* AI Story Generation Blocks */}
            {[0, 1, 2].map((index) => (
              <div key={index} className="bg-black-2 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-1" />
                  <Label className="text-16 font-bold text-white-1">
                    AI prompt to generate story table
                  </Label>
                </div>
                
                <Textarea 
                  className="input-class font-light focus-visible:ring-offset-purple-1 mb-4"
                  placeholder="Provide text to AI to generate audio"
                  rows={3}
                  value={storyOutlines[index]}
                  onChange={(e) => {
                    const newOutlines = [...storyOutlines]
                    newOutlines[index] = e.target.value
                    setStoryOutlines(newOutlines)
                  }}
                />
                
                <Button 
                  type="button"
                  className="text-14 bg-purple-1 hover:bg-purple-2 font-bold text-white-1"
                  onClick={() => handleGenerateStory(index)}
                  disabled={isGeneratingStory[index]}
                >
                  {isGeneratingStory[index] ? (
                    <>
                      Generating
                      <Loader size={16} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Generate'
                  )}
                </Button>
              </div>
            ))}

            {/* Cover Generation Section */}
            <div className="bg-black-2 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-5 h-5 text-blue-1" />
                <Label className="text-16 font-bold text-white-1">
                  Cover Image Generation
                </Label>
              </div>

              {/* AI Generate Thumbnail Button */}
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <Button 
                  type="button"
                  className="flex-1 text-14 bg-blue-1 hover:bg-blue-2 font-bold text-white-1"
                  onClick={handleGenerateCover}
                  disabled={isGeneratingCover}
                >
                  {isGeneratingCover ? (
                    <>
                      Generating
                      <Loader size={16} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'AI prompt to generate thumbnail'
                  )}
                </Button>

                {/* Upload Custom Image Button */}
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCustomImageUpload}
                    className="hidden"
                    id="custom-image-upload"
                  />
                  <Button 
                    type="button"
                    className="w-full text-14 bg-gray-1 hover:bg-black-3 font-bold text-white-1"
                    onClick={() => document.getElementById('custom-image-upload')?.click()}
                    disabled={isUploadingCustomImage}
                  >
                    {isUploadingCustomImage ? (
                      <>
                        Uploading
                        <Loader size={16} className="animate-spin ml-2" />
                      </>
                    ) : (
                      'Upload custom image'
                    )}
                  </Button>
                </div>
              </div>

              {/* Image Upload Area */}
              <div 
                className="border-2 border-dashed border-gray-1 rounded-lg p-8 text-center hover:border-orange-1 transition-colors cursor-pointer"
                onClick={() => document.getElementById('custom-image-upload')?.click()}
              >
                {coverImageUrl ? (
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={coverImageUrl} 
                      alt="Cover preview" 
                      className="w-48 h-48 object-cover rounded-lg"
                    />
                    <p className="text-14 text-white-2">點擊更換圖片</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4">
                    <Upload className="w-12 h-12 text-gray-1" />
                    <div>
                      <h3 className="text-16 font-bold text-orange-1 mb-2">Click to upload</h3>
                      <p className="text-12 text-gray-1">SVG, PNG, JPG or GIF (max. 1080x1080px)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 w-full">
              <Button 
                type="submit" 
                className="text-16 w-full bg-orange-1 py-6 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Creating...
                    <Loader size={20} className="animate-spin ml-2" />
                  </>
                ) : (
                  'Submit & publish artbook'
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  )
}

export default CreateArtbook