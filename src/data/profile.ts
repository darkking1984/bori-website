import { Profile } from '@/types';

export const profileData: Profile = {
  name: '보리',
  title: 'AI 기반 1인 창업자',
  description: 'AI 기술을 활용한 혁신적인 솔루션을 개발하고, 창업을 통해 세상을 더 나은 곳으로 만들어가는 것이 목표입니다. 끊임없는 학습과 도전을 통해 새로운 가능성을 탐구합니다.',
  email: 'contact@bori.ai',
  location: 'Seoul, South Korea',
  profileImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9IiM2MzY2ZjEiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzAiIGZpbGw9IndoaXRlIi8+PGVsbGlwc2UgY3g9IjEwMCIgY3k9IjE0MCIgcng9IjQwIiByeT0iMjAiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
  resumeUrl: '/resume.pdf'
};

// 통계 데이터
export const statsData = [
  { label: '프로젝트', value: '12+' },
  { label: '경험 연수', value: '5+' },
  { label: '기술 스택', value: '15+' },
  { label: '협업 경험', value: '20+' },
];

// 스킬 데이터
export const skillsData = [
  { category: 'AI/ML', skills: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps', skills: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
];

// 경험 데이터
export const experienceData = [
  {
    title: 'AI 솔루션 개발자',
    company: 'Self-employed',
    period: '2023 - Present',
    description: 'AI 기반 창업 프로젝트 개발 및 운영',
  },
  {
    title: '풀스택 개발자',
    company: 'Tech Startup',
    period: '2021 - 2023',
    description: '웹 애플리케이션 개발 및 AI 모델 통합',
  },
  {
    title: '소프트웨어 엔지니어',
    company: 'IT Company',
    period: '2019 - 2021',
    description: '백엔드 시스템 개발 및 데이터 분석',
  },
]; 