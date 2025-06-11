# AI Artbook Platform

一個基於 AI 的故事書創作平台，讓您能夠輕鬆創造包含智能文字生成、精美插圖和自然語音朗讀的互動式故事書。

## ✨ 功能特色

- 🤖 **AI 故事生成** - 使用 OpenAI GPT 模型生成引人入勝的故事內容
- 🎨 **AI 插圖生成** - 使用 DALL-E 為您的故事創造精美插圖
- 🎵 **AI 語音朗讀** - 使用先進的 TTS 技術為故事添加自然語音
- 📖 **章節管理** - 靈活的章節結構，支持多章節故事創作
- 🎭 **多種風格** - 支持卡通、寫實、奇幻等多種藝術風格
- 📱 **響應式設計** - 完美適配桌面和移動設備
- 🌙 **深色主題** - 現代化的深色界面設計

## 🚀 技術棧

- **前端**: Next.js 14, TypeScript, Tailwind CSS
- **UI 組件**: Radix UI, Lucide Icons
- **表單管理**: React Hook Form + Zod
- **AI 服務**: OpenAI API (GPT-4, DALL-E, TTS)
- **後端**: Convex (計劃中)
- **認證**: Clerk (計劃中)

## 📁 項目結構

```
ai-artbook-platform/
├── app/                    # Next.js App Router
│   ├── (auth)/            # 認證相關頁面
│   ├── (root)/            # 主要應用頁面
│   │   ├── create-artbook/ # 創建故事書頁面
│   │   ├── discover/      # 探索頁面
│   │   └── artbook/       # 故事書詳情頁面
│   ├── globals.css        # 全局樣式
│   └── layout.tsx         # 根布局
├── components/            # React 組件
│   ├── ui/               # 基礎 UI 組件
│   ├── ArtbookCard.tsx   # 故事書卡片組件
│   ├── LeftSidebar.tsx   # 左側導航欄
│   ├── MobileNav.tsx     # 移動端導航
│   └── RightSidebar.tsx  # 右側邊欄
├── constants/            # 常量定義
├── lib/                  # 工具函數
├── types/               # TypeScript 類型定義
└── public/              # 靜態資源
```

## 🛠️ 開發設置

### 前置要求

- Node.js 18+
- npm 或 yarn

### 安裝依賴

```bash
npm install
```

### 環境變量

創建 `.env.local` 文件並添加以下環境變量：

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
OPENAI_API_KEY=your_openai_api_key
```

### 運行開發服務器

```bash
npm run dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看結果。

## 📋 主要頁面

### 🏠 首頁 (`/`)
- 展示熱門故事書
- 平台統計數據
- 快速創作入口

### ✍️ 創建故事書 (`/create-artbook`)
- 基於 Figma 設計的創作界面
- 故事標題、類別、描述設定
- AI 故事大綱生成
- AI 封面圖片生成
- 自定義圖片上傳

### 🔍 探索頁面 (`/discover`)
- 故事書搜索和篩選
- 分類瀏覽
- 熱門推薦

### 📖 故事書詳情 (`/artbook/[id]`)
- 故事書閱讀界面
- 章節導航
- 音頻播放器

## 🎨 設計系統

### 顏色方案
- **主色調**: Orange (#F97535)
- **輔助色**: Purple (#8B5CF6), Blue (#3B82F6)
- **背景色**: 深色系 (#15171c, #1a1d23, #1e2129)
- **文字色**: 白色系 (#FFFFFF, #EEEEEE, #D0D5DD)

### 字體大小
- text-12: 12px
- text-14: 14px  
- text-16: 16px
- text-18: 18px
- text-20: 20px
- text-24: 24px
- text-30: 30px

## 🔮 未來計劃

- [ ] 集成 Convex 後端服務
- [ ] 實現用戶認證系統
- [ ] 添加實際的 AI API 集成
- [ ] 實現章節編輯功能
- [ ] 添加協作功能
- [ ] 實現故事書發布和分享
- [ ] 添加評論和點讚系統
- [ ] 實現個人作品庫
- [ ] 添加離線閱讀功能

## 🤝 貢獻

歡迎提交 Issues 和 Pull Requests！

## 📄 許可證

MIT License

## 👨‍💻 開發者

基於原始 Podcast 平台架構改造，專為 AI 故事書創作優化。

---

**讓 AI 成為您的創作夥伴，一起創造無限可能的故事世界！** ✨