import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ToastProvider } from "@/components/ui/use-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Artbook Platform | 創建您的 AI 故事書",
  description: "使用 AI 的力量創造令人驚嘆的故事書，包含智能文字生成、精美插圖和自然語音朗讀。",
  keywords: ["AI", "故事書", "人工智能", "故事生成", "插圖", "語音朗讀"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.className} bg-black-1 text-white-1`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}