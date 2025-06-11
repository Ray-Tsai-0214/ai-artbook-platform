// Navigation links for sidebar
export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "首頁",
  },
  {
    imgURL: "/icons/discover.svg", 
    route: "/discover",
    label: "探索故事",
  },
  {
    imgURL: "/icons/create.svg",
    route: "/create-artbook", 
    label: "創建故事書",
  },
  {
    imgURL: "/icons/profile.svg",
    route: "/profile",
    label: "我的作品",
  },
];

// Artbook categories
export const ARTBOOK_CATEGORIES = [
  "兒童故事",
  "奇幻冒險", 
  "科幻小說",
  "歷史故事",
  "愛情小說",
  "懸疑推理",
  "教育故事",
  "生活哲理",
  "其他"
] as const;

// AI voice options for narration
export const voiceDetails = [
  {
    id: 1,
    name: "alloy",
    label: "Alloy - 清晰自然",
    description: "清晰自然的聲音，適合敘述和教育內容"
  },
  {
    id: 2,
    name: "echo", 
    label: "Echo - 溫暖親切",
    description: "溫暖親切的聲音，適合溫馨故事"
  },
  {
    id: 3,
    name: "fable",
    label: "Fable - 故事感強",
    description: "富有故事感的聲音，適合童話和寓言"
  },
  {
    id: 4,
    name: "onyx",
    label: "Onyx - 深沉穩重", 
    description: "深沉穩重的聲音，適合嚴肅主題"
  },
  {
    id: 5,
    name: "nova",
    label: "Nova - 活潑明亮",
    description: "活潑明亮的聲音，適合兒童故事"
  },
  {
    id: 6,
    name: "shimmer",
    label: "Shimmer - 輕柔細膩",
    description: "輕柔細膩的聲音，適合浪漫故事"
  },
];

// Image generation styles
export const imageStyles = [
  {
    value: "cartoon",
    label: "卡通風格",
    description: "色彩豐富，線條可愛，適合兒童故事",
    prompt: "cartoon style, colorful, cute, child-friendly"
  },
  {
    value: "realistic", 
    label: "寫實風格",
    description: "逼真細膩，適合成人故事和寫實題材",
    prompt: "realistic style, detailed, photographic quality"
  },
  {
    value: "fantasy",
    label: "奇幻風格", 
    description: "夢幻神秘，適合奇幻和魔法故事",
    prompt: "fantasy style, magical, mystical, ethereal"
  },
  {
    value: "watercolor",
    label: "水彩風格",
    description: "柔和溫馨，適合溫情故事",
    prompt: "watercolor style, soft, gentle, artistic"
  },
  {
    value: "minimalist",
    label: "簡約風格",
    description: "簡潔清爽，適合現代和哲理故事", 
    prompt: "minimalist style, clean, simple, modern"
  },
  {
    value: "vintage",
    label: "復古風格",
    description: "懷舊典雅，適合歷史和經典故事",
    prompt: "vintage style, retro, classic, nostalgic"
  },
];

// Story prompt templates for different categories
export const storyPromptTemplates = {
  "兒童故事": [
    "一隻小動物學會分享的溫馨故事",
    "小朋友們一起解決問題的團隊合作故事",
    "關於克服恐懼、變得勇敢的成長故事",
    "學習新技能並獲得自信的勵志故事"
  ],
  "奇幻冒險": [
    "在魔法森林中尋找失落寶藏的冒險",
    "年輕巫師學習法術拯救世界的史詩",
    "穿越到平行世界的奇幻旅程",
    "與神話生物結為盟友的英雄故事"
  ],
  "科幻小說": [
    "太空探險隊發現新星球的科幻故事",
    "時間旅行者改變歷史的複雜劇情", 
    "人工智能與人類合作解決危機",
    "未來城市中的機器人探偵故事"
  ],
  "歷史故事": [
    "古代文明中的日常生活故事",
    "歷史重要事件的親歷者視角",
    "傳統文化傳承的感人故事",
    "古代英雄人物的成長歷程"
  ],
  "生活哲理": [
    "關於人生意義和價值的思考故事",
    "通過日常小事領悟大道理",
    "不同世代間的智慧傳承",
    "面對挫折時的心靈成長"
  ]
};

// Default artbook data for demonstration
export const sampleArtbooks = [
  {
    id: 1,
    title: "小熊維尼的蜂蜜冒險",
    description: "跟隨小熊維尼在百畝森林中尋找蜂蜜的溫馨冒險故事",
    category: "兒童故事",
    coverImage: "/images/sample-cover-1.jpg",
    chapters: 8,
    author: "AI 創作助手",
    views: 1250,
    likes: 89,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "星際守護者",
    description: "未來世界中一群年輕人保衛地球的科幻冒險",
    category: "科幻小說", 
    coverImage: "/images/sample-cover-2.jpg",
    chapters: 12,
    author: "AI 創作助手",
    views: 2340,
    likes: 156,
    createdAt: "2024-01-10"
  },
  {
    id: 3,
    title: "魔法學院的秘密",
    description: "在神秘的魔法學院中學習法術和友誼的奇幻故事",
    category: "奇幻冒險",
    coverImage: "/images/sample-cover-3.jpg", 
    chapters: 15,
    author: "AI 創作助手",
    views: 3120,
    likes: 234,
    createdAt: "2024-01-05"
  }
];