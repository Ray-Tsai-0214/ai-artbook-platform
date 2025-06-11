import { Dispatch, SetStateAction } from "react";

// Basic ID type (will be replaced with Convex types)
export type Id<T extends string> = string & { __tableName: T };

// Artbook types
export interface ArtbookProps {
  _id: Id<"artbooks">;
  _creationTime: number;
  title: string;
  description: string;
  category?: string;
  coverImageUrl?: string;
  coverImageStorageId?: Id<"_storage">;
  coverImagePrompt?: string;
  author: string;
  authorId: string;
  authorImageUrl: string;
  views: number;
  chapters: number;
  totalDuration?: number;
  status: "draft" | "published" | "private";
  createdAt: number;
  updatedAt: number;
  user: Id<"users">;
}

// Chapter types
export interface ChapterProps {
  _id: Id<"chapters">;
  _creationTime: number;
  artbookId: Id<"artbooks">;
  chapterNumber: number;
  title: string;
  content: string;
  contentPrompt?: string;
  imageUrl?: string;
  imageStorageId?: Id<"_storage">;
  imagePrompt?: string;
  audioUrl?: string;
  audioStorageId?: Id<"_storage">;
  voiceType?: string;
  audioDuration?: number;
  createdAt: number;
  updatedAt: number;
}

// User types
export interface UserProps {
  _id: Id<"users">;
  _creationTime: number;
  email: string;
  imageUrl: string;
  clerkId: string;
  name: string;
}

// Component Props Types

// Create Artbook Form
export interface CreateArtbookProps {
  title: string;
  description: string;
  category?: string;
}

// Generate Story Content Component
export interface GenerateStoryProps {
  setContent: Dispatch<SetStateAction<string>>;
  content: string;
  contentPrompt: string;
  setContentPrompt: Dispatch<SetStateAction<string>>;
  previousContent?: string;
  storyContext?: string;
}

// Generate Illustration Component  
export interface GenerateIllustrationProps {
  setImage: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  image: string;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
  storyContent?: string;
  style?: string;
}

// Generate Cover Component
export interface GenerateCoverProps {
  setImage: Dispatch<SetStateAction<string>>;
  setImageStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  image: string;
  imagePrompt: string;
  setImagePrompt: Dispatch<SetStateAction<string>>;
  title: string;
  description: string;
  style?: string;
}

// Generate Narration Component
export interface GenerateNarrationProps {
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudio: Dispatch<SetStateAction<string>>;
  voiceType: string;
  audio: string;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}

// Card Components
export interface ArtbookCardProps {
  imgUrl: string;
  title: string;
  description: string;
  artbookId: Id<"artbooks">;
  category?: string;
  chapters?: number;
  views?: number;
  author?: string;
}

export interface ChapterCardProps {
  chapterNumber: number;
  title: string;
  content: string;
  imageUrl?: string;
  audioUrl?: string;
  chapterId: Id<"chapters">;
  isActive?: boolean;
  onClick?: () => void;
}

// Player Components
export interface ArtbookPlayerProps {
  audioUrl: string;
  title: string;
  author: string;
  imageUrl: string;
  artbookId: string;
  chapterNumber?: number;
  isOwner: boolean;
}

// Search and Filter
export interface ArtbookSearchResult extends ArtbookProps {}

export interface SearchFilters {
  category?: string;
  sortBy?: "newest" | "popular" | "title";
  query?: string;
}

// Audio Context
export interface AudioProps {
  title: string;
  audioUrl: string;
  author: string;
  imageUrl: string;
  artbookId: string;
  chapterNumber?: number;
}

export interface AudioContextType {
  audio: AudioProps | undefined;
  setAudio: React.Dispatch<React.SetStateAction<AudioProps | undefined>>;
}

// UI Components
export interface EmptyStateProps {
  title: string;
  description?: string;
  search?: boolean;
  buttonText?: string;
  buttonLink?: string;
  icon?: React.ReactNode;
}

export interface LoaderSpinnerProps {
  size?: number;
  className?: string;
}

// Form Validation Schemas
export interface ArtbookFormData {
  title: string;
  description: string;
  category: string;
}

export interface ChapterFormData {
  title: string;
  content: string;
  contentPrompt?: string;
  imagePrompt?: string;
  voiceType?: string;
}

// API Response Types
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Profile and Stats
export interface ProfileArtbookProps {
  artbooks: ArtbookProps[];
  totalViews: number;
  totalLikes: number;
  followers: number;
}

// Constants
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

export type ArtbookCategory = typeof ARTBOOK_CATEGORIES[number];

export const VOICE_TYPES = [
  "alloy",
  "echo",
  "fable", 
  "onyx",
  "nova",
  "shimmer"
] as const;

export type VoiceType = typeof VOICE_TYPES[number];

export const IMAGE_STYLES = [
  "cartoon",
  "realistic",
  "fantasy", 
  "watercolor",
  "minimalist",
  "vintage"
] as const;

export type ImageStyle = typeof IMAGE_STYLES[number];

// Status types
export const ARTBOOK_STATUS = ["draft", "published", "private"] as const;
export type ArtbookStatus = typeof ARTBOOK_STATUS[number];