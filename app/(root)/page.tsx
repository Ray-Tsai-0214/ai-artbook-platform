"use client"

import ArtbookCard from "@/components/ArtbookCard"
import { sampleArtbooks } from "@/constants"
import { BookOpen, TrendingUp, Users, Heart } from "lucide-react"

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      {/* Hero Section */}
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-orange-1" />
          <h1 className="text-20 font-bold text-white-1 md:text-30">
            歡迎來到 AI 故事書平台
          </h1>
        </div>
        <p className="text-16 text-white-2">
          使用 AI 的力量創造令人驚嘆的故事書，包含智能文字生成、精美插圖和自然語音朗讀。
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-black-2 p-4 rounded-lg text-center">
          <TrendingUp className="w-6 h-6 text-orange-1 mx-auto mb-2" />
          <div className="text-18 font-bold text-white-1">1,234</div>
          <div className="text-12 text-white-2">故事書</div>
        </div>
        <div className="bg-black-2 p-4 rounded-lg text-center">
          <Users className="w-6 h-6 text-purple-1 mx-auto mb-2" />
          <div className="text-18 font-bold text-white-1">5,678</div>
          <div className="text-12 text-white-2">創作者</div>
        </div>
        <div className="bg-black-2 p-4 rounded-lg text-center">
          <BookOpen className="w-6 h-6 text-blue-1 mx-auto mb-2" />
          <div className="text-18 font-bold text-white-1">12,345</div>
          <div className="text-12 text-white-2">章節</div>
        </div>
        <div className="bg-black-2 p-4 rounded-lg text-center">
          <Heart className="w-6 h-6 text-green-1 mx-auto mb-2" />
          <div className="text-18 font-bold text-white-1">23,456</div>
          <div className="text-12 text-white-2">喜歡</div>
        </div>
      </section>

      {/* Featured Artbooks */}
      <section className="flex flex-col gap-5">
        <h2 className="text-20 font-bold text-white-1">熱門故事書</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleArtbooks.map((artbook) => (
            <ArtbookCard
              key={artbook.id}
              imgUrl={artbook.coverImage}
              title={artbook.title}
              description={artbook.description}
              artbookId={artbook.id.toString() as any}
              category={artbook.category}
              chapters={artbook.chapters}
              views={artbook.views}
              author={artbook.author}
            />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-gradient-to-r from-orange-1/10 to-purple-1/10 rounded-lg p-6">
        <h3 className="text-18 font-bold text-white-1 mb-4">開始創作您的故事書</h3>
        <p className="text-14 text-white-2 mb-4">
          只需幾個步驟，AI 就能幫您創造出獨特的故事書
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a 
            href="/create-artbook"
            className="bg-orange-1 hover:bg-orange-1/90 text-white-1 px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center"
          >
            立即開始創作
          </a>
          <a 
            href="/discover"
            className="border border-orange-1 text-orange-1 hover:bg-orange-1 hover:text-white-1 px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center"
          >
            探索更多故事
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home