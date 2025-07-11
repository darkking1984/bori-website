'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Profile, SectionProps } from '@/types';
import { skillsData, statsData, experienceData } from '@/data/profile';
import Badge from '@/components/ui/Badge';
import { MapPin, Mail, Calendar, Award } from 'lucide-react';

interface AboutSectionProps extends SectionProps {
  profile: Profile;
}

const AboutSection: React.FC<AboutSectionProps> = ({ profile, className = '', id = 'about' }) => {
  return (
    <section id={id} className={`section-padding bg-gray-50 ${className}`}>
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
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            저를 더 자세히 알아보세요
          </p>
        </motion.div>

        {/* 메인 컨텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 왼쪽: 프로필 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} 프로필`}
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default-profile.jpg';
                  }}
                />
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{profile.name}</h3>
                  <p className="text-blue-600 font-medium">{profile.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-500" />
                  <span>{profile.email}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 통계 및 경험 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 통계 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                <Award className="w-6 h-6 inline mr-2 text-blue-500" />
                주요 성과
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 경험 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                <Calendar className="w-6 h-6 inline mr-2 text-blue-500" />
                경험
              </h3>
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500 pl-4 pb-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 font-medium text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 스킬 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            기술 스택
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.1 * categoryIndex + 0.05 * skillIndex 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="primary" 
                        size="sm"
                        className="cursor-pointer hover:shadow-md transition-shadow"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 