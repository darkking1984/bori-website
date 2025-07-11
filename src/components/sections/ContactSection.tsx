'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '@/types';
import { socialLinks, contactInfo, newsletterInfo, testimonials } from '@/data/social';
import SocialLinks from '@/components/ui/SocialLinks';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Clock, Calendar, Send, Star } from 'lucide-react';

interface ContactSectionProps extends SectionProps {
  showNewsletter?: boolean;
  showTestimonials?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  showNewsletter = true,
  showTestimonials = true,
  className = '', 
  id = 'contact' 
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleCalendlyClick = () => {
    window.open(contactInfo.calendly, '_blank');
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 여기서 실제 뉴스레터 구독 로직 구현
    setTimeout(() => {
      alert('뉴스레터 구독이 완료되었습니다!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 여기서 실제 연락 폼 제출 로직 구현
    setTimeout(() => {
      alert('메시지가 전송되었습니다!');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleImageError = (imageName: string) => {
    setImageErrors(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  return (
    <section id={id} className={`section-padding bg-white ${className}`}>
      <div className="max-w-6xl mx-auto container-padding">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            연락하기
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 제안이 있으시다면 언제든지 연락주세요!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 왼쪽: 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                연락처 정보
              </h3>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleEmailClick}
                  className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-left"
                >
                  <Mail className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">이메일</p>
                    <p className="text-gray-600 text-sm">{contactInfo.email}</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePhoneClick}
                  className="w-full flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-left"
                >
                  <Phone className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">전화번호</p>
                    <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
                  </div>
                </motion.button>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">위치</p>
                    <p className="text-gray-600 text-sm">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">타임존</p>
                    <p className="text-gray-600 text-sm">{contactInfo.timezone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button
                  onClick={handleCalendlyClick}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  미팅 일정 잡기
                </Button>
              </div>
            </div>

            {/* 소셜 링크 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                소셜 미디어
              </h3>
              <SocialLinks 
                links={socialLinks}
                size="lg"
                showLabels={true}
                className="justify-start"
              />
            </div>
          </motion.div>

          {/* 오른쪽: 연락 폼 및 뉴스레터 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 간단한 연락 폼 */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                빠른 메시지
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="메시지를 입력해주세요..."
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? '전송 중...' : '메시지 보내기'}
                </Button>
              </form>
            </div>

            {/* 뉴스레터 구독 */}
            {showNewsletter && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {newsletterInfo.title}
                </h3>
                <p className="text-blue-100 mb-6">
                  {newsletterInfo.description}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력해주세요"
                    className="w-full p-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-blue-600 hover:bg-blue-50"
                  >
                    {isSubmitting ? '구독 중...' : '뉴스레터 구독하기'}
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>

        {/* 추천서 섹션 */}
        {showTestimonials && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              함께 일한 분들의 이야기
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={imageErrors[testimonial.name] ? '/images/default-avatar.jpg' : testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      onError={() => handleImageError(testimonial.name)}
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection; 