'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoContent, SectionProps } from '@/types';
import { videoContent } from '@/data/social';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoSectionProps extends SectionProps {
  videoContent?: VideoContent;
  autoplay?: boolean;
  showControls?: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  videoContent: content = videoContent,
  autoplay = false,
  showControls = true,
  className = '', 
  id = 'video' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
    setIsPlaying(true);
  };

  const getYouTubeEmbedUrl = (url: string) => {
    // YouTube URL을 embed 형식으로 변환
    const videoId = url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${isMuted ? 1 : 0}&controls=${showControls ? 1 : 0}`;
  };

  return (
    <section id={id} className={`section-padding bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto container-padding">
        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            소개 영상
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        {/* 비디오 컨테이너 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900"
        >
          {!showVideo ? (
            // 비디오 썸네일
            <div className="relative w-full h-full group cursor-pointer" onClick={handlePlayClick}>
              <img
                src={content.thumbnailUrl}
                alt={content.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default-video-thumbnail.jpg';
                }}
              />
              
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
              
              {/* 재생 버튼 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </motion.button>
              </div>

              {/* 비디오 제목 */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {content.title}
                </h3>
                <p className="text-white/80 text-sm">
                  클릭하여 재생
                </p>
              </div>
            </div>
          ) : (
            // YouTube iframe
            <div className="relative w-full h-full">
              <iframe
                src={getYouTubeEmbedUrl(content.videoUrl)}
                title={content.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* 커스텀 컨트롤 (선택사항) */}
              {showControls && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  <div className="text-white text-sm">
                    {content.title}
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* 비디오 설명 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {content.description}
            </p>
            
            {/* 비디오 통계 (선택사항) */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span>2023년 제작</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Seoul, Korea</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 관련 콘텐츠 링크 (선택사항) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            더 많은 콘텐츠를 원하신다면?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.open('https://youtube.com/@bori-ai', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              <Play className="w-5 h-5" />
              YouTube 채널 구독
            </button>
            <button
              onClick={() => window.open('https://blog.bori.ai', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              📝 블로그 방문
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection; 