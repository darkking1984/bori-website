'use client';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import VideoSection from '@/components/sections/VideoSection';
import ContactSection from '@/components/sections/ContactSection';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        profile={profileData}
        onCTAClick={(action) => {
          const element = document.getElementById(action);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* About Section */}
      <AboutSection 
        profile={profileData}
        id="about"
      />

      {/* Projects Section */}
      <ProjectsSection 
        projects={projectsData}
        id="projects"
      />

      {/* Video Section */}
      <VideoSection 
        id="video"
      />

      {/* Contact Section */}
      <ContactSection 
        id="contact"
        showNewsletter={true}
        showTestimonials={true}
      />
    </main>
  );
}
