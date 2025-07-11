'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Profile } from '@/types';
import { scrollToSection } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { ChevronDown, Mail, FileText } from 'lucide-react';

interface HeroSectionProps {
  profile: Profile;
  onCTAClick?: (action: 'contact' | 'projects') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile, onCTAClick }) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping] = useState(true);

  const titles = [
    'AI 기반 1인 창업자',
    '풀스택 개발자',
    '혁신적인 문제 해결사',
    '끊임없는 학습자'
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const currentTitle = titles[currentIndex];

    if (isTyping) {
      if (!isDeleting && displayedTitle === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedTitle === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedTitle(prev => 
            isDeleting 
              ? prev.slice(0, -1)
              : currentTitle.slice(0, prev.length + 1)
          );
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedTitle, currentIndex, isDeleting, isTyping, titles]);

  const handleCTAClick = (action: 'contact' | 'projects') => {
    if (onCTAClick) {
      onCTAClick(action);
    } else {
      scrollToSection(action);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10"></div>
      
      {/* 플로팅 요소들 */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* 프로필 이미지 */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1 shadow-2xl">
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} 프로필`}
                  className="w-full h-full rounded-full object-cover bg-white"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default-profile.jpg';
                  }}
                />
              </div>
              {/* 온라인 상태 표시 */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </motion.div>

          {/* 인사말 */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-blue-200 font-medium">
              안녕하세요! 👋
            </p>
          </motion.div>

          {/* 이름 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>

          {/* 타이핑 애니메이션 직함 */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-200 h-10 md:h-12">
              {displayedTitle}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* 소개 텍스트 */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100 leading-relaxed"
          >
            {profile.description}
          </motion.p>

          {/* 위치 정보 */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-blue-200 flex items-center justify-center gap-2">
              <span>📍</span>
              {profile.location}
            </p>
          </motion.div>

          {/* CTA 버튼들 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTAClick('contact')}
              className="border-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              연락하기
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleCTAClick('projects')}
              className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <FileText className="w-5 h-5 mr-2" />
              프로젝트 보기
            </Button>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center h-full"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
              
              aria-label="아래로 스크롤"
            >
              <span className="text-sm">더 알아보기</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 