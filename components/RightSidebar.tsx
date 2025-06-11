"use client"

import { sampleArtbooks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Clock, Star } from "lucide-react"

const RightSidebar = () => {
  const topArtbooks = sampleArtbooks.slice(0, 3)

  return (
    <section className="right_sidebar text-white-1">
      <div className="flex flex-col gap-8">
        {/* User Profile Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-1 rounded-full flex items-center justify-center">
              <span className="text-14 font-bold">AI</span>
            </div>
            <div>
              <h3 className="text-14 font-bold">AI 創作助手</h3>
              <p className="text-12 text-white-2">您的創作夥伴</p>
            </div>
          </div>
        </div>

        {/* Top Artbooks */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-orange-1" />
            <h4 className="text-16 font-bold">熱門故事書</h4>
          </div>

          <div className="flex flex-col gap-4">
            {topArtbooks.map((artbook, index) => (
              <Link
                key={artbook.id}
                href={`/artbook/${artbook.id}`}
                className="flex items-center gap-3 p-3 bg-black-2 rounded-lg hover:bg-black-3 transition-colors cursor-pointer"
              >
                <div className="relative w-12 h-12 rounded-md overflow-hidden">
                  <Image
                    src={artbook.coverImage}
                    alt={artbook.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-14 font-semibold text-white-1 truncate">
                    {artbook.title}
                  </h5>
                  <p className="text-12 text-white-2">
                    {artbook.chapters} 章節
                  </p>
                </div>
                <div className="text-12 text-orange-1 font-bold">
                  #{index + 1}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-1" />
            <h4 className="text-16 font-bold">最近活動</h4>
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-3 bg-black-2 rounded-lg">
              <p className="text-12 text-white-2">
                <span className="text-orange-1 font-semibold">小明</span> 創建了新故事書
              </p>
              <p className="text-12 text-white-3 mt-1">2 分鐘前</p>
            </div>
            
            <div className="p-3 bg-black-2 rounded-lg">
              <p className="text-12 text-white-2">
                <span className="text-purple-1 font-semibold">小華</span> 完成了第5章節
              </p>
              <p className="text-12 text-white-3 mt-1">15 分鐘前</p>
            </div>
            
            <div className="p-3 bg-black-2 rounded-lg">
              <p className="text-12 text-white-2">
                <span className="text-blue-1 font-semibold">小李</span> 收藏了《星際守護者》
              </p>
              <p className="text-12 text-white-3 mt-1">1 小時前</p>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <h4 className="text-16 font-bold">創作小貼士</h4>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-orange-1/10 to-purple-1/10 rounded-lg border border-orange-1/20">
            <p className="text-12 text-white-2">
              💡 使用具體的描述詞彙可以讓 AI 生成更精準的插圖！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RightSidebar