// 프로필 정보 타입
export interface Profile {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  profileImage: string;
  resumeUrl?: string;
}

// 프로젝트 정보 타입
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

// 소셜 링크 타입
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

// 비디오 콘텐츠 타입
export interface VideoContent {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

// 버튼 컴포넌트 Props
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

// 카드 컴포넌트 Props
export interface CardProps {
  title: string;
  description: string;
  image?: string;
  footer?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

// 섹션 컴포넌트 공통 Props
export interface SectionProps {
  className?: string;
  id?: string;
} 