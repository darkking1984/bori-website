import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'AI 기반 명함 생성기',
    description: '사용자의 정보를 입력하면 AI가 자동으로 개인 맞춤형 명함을 생성해주는 웹 서비스입니다. OpenAI API를 활용하여 창의적이고 전문적인 디자인을 제공합니다.',
    image: '/images/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/bori/ai-business-card',
    liveUrl: 'https://ai-business-card.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Smart Document Analyzer',
    description: '문서를 업로드하면 AI가 자동으로 내용을 분석하고 요약해주는 서비스입니다. PDF, Word, 텍스트 파일을 지원하며, 핵심 내용 추출과 키워드 분석을 제공합니다.',
    image: '/images/project2.jpg',
    technologies: ['React', 'Python', 'FastAPI', 'Transformers', 'PostgreSQL'],
    githubUrl: 'https://github.com/bori/document-analyzer',
    liveUrl: 'https://document-analyzer.com',
    featured: true,
  },
  {
    id: '3',
    title: 'E-commerce Dashboard',
    description: '온라인 쇼핑몰 운영자를 위한 종합 대시보드입니다. 실시간 매출 분석, 고객 행동 패턴 분석, 재고 관리 등의 기능을 제공합니다.',
    image: '/images/project3.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js', 'Socket.io'],
    githubUrl: 'https://github.com/bori/ecommerce-dashboard',
    liveUrl: 'https://ecommerce-dashboard.com',
    featured: false,
  },
  {
    id: '4',
    title: 'AI 챗봇 빌더',
    description: '코딩 없이 AI 챗봇을 만들 수 있는 노코드 플랫폼입니다. 드래그 앤 드롭으로 대화 플로우를 설계하고, 다양한 채널에 배포할 수 있습니다.',
    image: '/images/project4.jpg',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Webhook', 'AWS'],
    githubUrl: 'https://github.com/bori/chatbot-builder',
    liveUrl: 'https://chatbot-builder.app',
    featured: true,
  },
];

// 프로젝트 카테고리
export const projectCategories = [
  'All',
  'AI/ML',
  'Web Development',
  'Mobile App',
  'Data Analysis',
] as const;

// 프로젝트 필터링 함수
export function filterProjects(category: string): Project[] {
  if (category === 'All') return projectsData;
  
  return projectsData.filter(project => {
    switch (category) {
      case 'AI/ML':
        return project.technologies.some(tech => 
          ['OpenAI API', 'TensorFlow', 'PyTorch', 'Transformers'].includes(tech)
        );
      case 'Web Development':
        return project.technologies.some(tech => 
          ['React', 'Next.js', 'Vue.js', 'Node.js'].includes(tech)
        );
      case 'Mobile App':
        return project.technologies.some(tech => 
          ['React Native', 'Flutter', 'Swift', 'Kotlin'].includes(tech)
        );
      case 'Data Analysis':
        return project.technologies.some(tech => 
          ['Python', 'PostgreSQL', 'MongoDB', 'Chart.js'].includes(tech)
        );
      default:
        return [];
    }
  });
}

// 추천 프로젝트 가져오기
export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
} 