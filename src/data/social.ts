import { SocialLink, VideoContent } from '@/types';

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/bori-ai',
    icon: 'github',
    color: '#333333',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/bori-ai',
    icon: 'linkedin',
    color: '#0077B5',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/bori_ai',
    icon: 'twitter',
    color: '#1DA1F2',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@bori-ai',
    icon: 'youtube',
    color: '#FF0000',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/bori.ai',
    icon: 'instagram',
    color: '#E4405F',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@bori-ai',
    icon: 'medium',
    color: '#00ab6c',
  },
];

// 비디오 콘텐츠 데이터
export const videoContent: VideoContent = {
  title: 'AI 창업자 보리 - 소개 영상',
  description: '안녕하세요! AI 기반 1인 창업자 보리입니다. 제가 어떤 일을 하고 있는지, 어떤 비전을 가지고 있는지 소개해드릴게요.',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnailUrl: '/images/video-thumbnail.jpg',
};

// 연락처 정보
export const contactInfo = {
  email: 'contact@bori.ai',
  phone: '+82-10-1234-5678',
  location: 'Seoul, South Korea',
  timezone: 'UTC+9 (KST)',
  linkedin: 'https://linkedin.com/in/bori-ai',
  calendly: 'https://calendly.com/bori-ai/30min',
};

// 뉴스레터 정보
export const newsletterInfo = {
  title: 'AI 창업 인사이트',
  description: 'AI 기술과 창업에 대한 최신 인사이트를 매주 받아보세요.',
  subscribeUrl: 'https://newsletter.bori.ai/subscribe',
};

// 추천서 및 리뷰
export const testimonials = [
  {
    name: '김철수',
    role: 'CTO, Tech Startup',
    content: '보리님과 함께 일하면서 AI 기술에 대한 깊은 이해와 실행력을 확인할 수 있었습니다. 항상 새로운 아이디어를 제시하고 실현시키는 능력이 뛰어납니다.',
    avatar: '/images/testimonial1.jpg',
  },
  {
    name: '이영희',
    role: 'Product Manager, AI Company',
    content: '복잡한 AI 기술을 사용자 친화적인 제품으로 만드는 능력이 정말 인상적입니다. 항상 사용자 관점에서 생각하고 문제를 해결하는 모습이 인상깊었습니다.',
    avatar: '/images/testimonial2.jpg',
  },
  {
    name: '박민수',
    role: 'CEO, Digital Agency',
    content: '창업가로서의 열정과 기술적 역량을 동시에 갖춘 훌륭한 파트너입니다. 함께 진행한 프로젝트는 모두 성공적으로 완료되었습니다.',
    avatar: '/images/testimonial3.jpg',
  },
]; 