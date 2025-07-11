import { clsx, type ClassValue } from 'clsx';

// 클래스명 결합 유틸리티
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// 스크롤 애니메이션 유틸리티
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// 이메일 유효성 검사
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 외부 링크 열기
export function openExternalLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

// 지연 함수
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 텍스트 자르기
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
} 