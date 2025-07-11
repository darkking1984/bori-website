'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, SectionProps } from '@/types';
import { projectsData, projectCategories, filterProjects } from '@/data/projects';
import { openExternalLink } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Github, ExternalLink, Code, Sparkles } from 'lucide-react';

interface ProjectsSectionProps extends SectionProps {
  projects?: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  projects = projectsData, 
  className = '', 
  id = 'projects' 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setFilteredProjects(filterProjects(category));
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
            <Code className="w-8 h-8 inline mr-2 text-blue-500" />
            프로젝트
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            제가 개발한 주요 프로젝트들을 소개합니다
          </p>
        </motion.div>

        {/* 카테고리 필터 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className="transition-all duration-200 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* 프로젝트 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                {/* 프로젝트 이미지 */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/default-project.jpg';
                    }}
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="warning" size="sm" className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* 프로젝트 정보 */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 기술 스택 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        size="sm"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="default" size="sm" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex gap-2 mt-6">
                    {project.liveUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => openExternalLink(project.liveUrl!)}
                        className="flex items-center gap-2 flex-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openExternalLink(project.githubUrl!)}
                        className="flex items-center gap-2 flex-1"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 더 많은 프로젝트 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            더 많은 프로젝트를 보고 싶으신가요?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => openExternalLink('https://github.com/bori-ai')}
            className="inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub에서 더 보기
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 