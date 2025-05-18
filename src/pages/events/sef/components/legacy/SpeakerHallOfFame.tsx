import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { allSpeakers } from './data';
const SpeakerHallOfFame: React.FC = () => {
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState(0);
  const [isHallExpanded, setIsHallExpanded] = useState(false);
  const hallOfFameRef = useRef<HTMLDivElement>(null);
  const handlePrevSpeaker = () => {
    setActiveSpeakerIndex(prev => prev > 0 ? prev - 1 : allSpeakers.length - 1);
  };
  const handleNextSpeaker = () => {
    setActiveSpeakerIndex(prev => prev < allSpeakers.length - 1 ? prev + 1 : 0);
  };

  // 3D hall of fame hover animations
  useEffect(() => {
    if (!hallOfFameRef.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!hallOfFameRef.current) return;
      const rect = hallOfFameRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const angleX = (mouseY - centerY) / 25;
      const angleY = (centerX - mouseX) / 25;
      hallOfFameRef.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };
    const handleMouseLeave = () => {
      if (!hallOfFameRef.current) return;
      hallOfFameRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    const hallElement = hallOfFameRef.current;
    hallElement.addEventListener('mousemove', handleMouseMove);
    hallElement.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      hallElement.removeEventListener('mousemove', handleMouseMove);
      hallElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Grid animation on scroll
  useEffect(() => {
    if (!hallOfFameRef.current) return;
    const handleScroll = () => {
      if (!hallOfFameRef.current) return;
      const rect = hallOfFameRef.current.getBoundingClientRect();
      const scrollPosition = window.innerHeight - rect.top;
      const scrollFactor = Math.max(0, Math.min(1, scrollPosition / (window.innerHeight * 1.5)));

      // Animate grid items
      const items = hallOfFameRef.current.querySelectorAll('.hall-of-fame-item');
      items.forEach((item, index) => {
        const delay = index * 0.05;
        const translateY = 50 - scrollFactor * 50;
        const scale = 0.8 + scrollFactor * 0.2;
        const opacity = scrollFactor;
        (item as HTMLElement).style.transform = `translateY(${translateY}px) scale(${scale})`;
        (item as HTMLElement).style.opacity = `${opacity}`;
        (item as HTMLElement).style.transitionDelay = `${delay}s`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return;
};
export default SpeakerHallOfFame;