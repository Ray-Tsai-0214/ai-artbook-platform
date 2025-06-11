import Image from "next/image"
import Link from "next/link"
import { Eye, BookOpen, User, Calendar } from "lucide-react"
import { ArtbookCardProps } from "@/types"

const ArtbookCard = ({
  imgUrl,
  title,
  description,
  artbookId,
  category,
  chapters,
  views,
  author
}: ArtbookCardProps) => {
  return (
    <div className="artbook-card group">
      <Link href={`/artbook/${artbookId}`}>
        {/* Cover Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <Image
            src={imgUrl || "/images/placeholder-cover.jpg"}
            width={300}
            height={200}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-3 left-3 bg-orange-1 text-white-1 px-2 py-1 rounded-full text-12 font-bold">
              {category}
            </div>
          )}
          
          {/* Views */}
          {views && (
            <div className="absolute top-3 right-3 bg-black-1/80 backdrop-blur-sm text-white-1 px-2 py-1 rounded-full text-12 flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {views.toLocaleString()}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-16 font-bold text-white-1 mb-2 line-clamp-2 group-hover:text-orange-1 transition-colors">
            {title}
          </h3>
          
          <p className="text-14 text-white-2 mb-3 line-clamp-3">
            {description}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between text-12 text-white-3">
            <div className="flex items-center gap-4">
              {chapters && (
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  <span>{chapters} 章節</span>
                </div>
              )}
              
              {author && (
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{author}</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress indicator (if needed) */}
          <div className="mt-3 w-full bg-black-5 rounded-full h-1">
            <div 
              className="bg-orange-1 h-1 rounded-full transition-all duration-300" 
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArtbookCard