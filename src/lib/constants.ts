// 네비게이션 메뉴 항목
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Video', href: '#video' },
  { name: 'Contact', href: '#contact' },
] as const;

// 애니메이션 설정
export const ANIMATION_CONFIG = {
  duration: 0.5,
  ease: 'easeInOut',
  stagger: 0.1,
} as const;

// 브레이크포인트
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

// 컬러 팔레트
export const COLORS = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    500: '#6b7280',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// 사이트 메타데이터
export const SITE_CONFIG = {
  name: '보리',
  title: 'AI 기반 1인 창업자',
  description: 'AI 기술을 활용한 혁신적인 솔루션을 개발하는 창업자입니다.',
  url: 'https://your-domain.com',
  ogImage: '/og-image.jpg',
  keywords: ['AI', '창업', '개발자', '프로젝트', '혁신'],
} as const; 