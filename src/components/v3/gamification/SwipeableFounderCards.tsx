import React, { useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { Heart, X, MessageCircle, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FounderProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  industry: string;
  bio: string;
  skills: string[];
  lookingFor: string[];
  image: string;
  university?: string;
  experience: string;
}

const mockFounders: FounderProfile[] = [
  {
    id: '1',
    name: 'Amira Hassan',
    age: 22,
    location: 'Dubai, UAE',
    industry: 'EdTech',
    bio: 'Building the future of online learning for MENA region. Looking for technical co-founder.',
    skills: ['Product Design', 'User Research', 'Business Strategy'],
    lookingFor: ['Technical Co-founder', 'Mentor', 'Funding'],
    image: '/api/placeholder/300/400',
    university: 'American University of Sharjah',
    experience: 'First-time founder'
  },
  {
    id: '2',
    name: 'Omar Al-Rashid',
    age: 25,
    location: 'Sharjah, UAE',
    industry: 'FinTech',
    bio: 'Developing blockchain solutions for Islamic banking. Previous exit in logistics.',
    skills: ['Blockchain', 'Smart Contracts', 'Financial Modeling'],
    lookingFor: ['Business Partner', 'Investor', 'Advisory'],
    image: '/api/placeholder/300/400',
    university: 'University of Sharjah',
    experience: 'Serial entrepreneur'
  },
  {
    id: '3',
    name: 'Sara Al-Mansouri',
    age: 21,
    location: 'Abu Dhabi, UAE',
    industry: 'Sustainability',
    bio: 'Creating zero-waste solutions for hospitality industry. Passionate about environmental impact.',
    skills: ['Sustainability', 'Operations', 'Marketing'],
    lookingFor: ['Co-founder', 'Team Members', 'Pilot Partners'],
    image: '/api/placeholder/300/400',
    university: 'New York University Abu Dhabi',
    experience: 'Student entrepreneur'
  }
];

export const SwipeableFounderCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState<string[]>([]);
  const [lastAction, setLastAction] = useState<'like' | 'pass' | null>(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-25, 0, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    
    if (info.offset.x > threshold) {
      // Swiped right - Like
      handleLike();
    } else if (info.offset.x < -threshold) {
      // Swiped left - Pass
      handlePass();
    } else {
      // Return to center
      x.set(0);
    }
  };

  const handleLike = () => {
    const currentFounder = mockFounders[currentIndex];
    setMatches(prev => [...prev, currentFounder.id]);
    setLastAction('like');
    nextCard();
  };

  const handlePass = () => {
    setLastAction('pass');
    nextCard();
  };

  const nextCard = () => {
    x.set(0);
    setCurrentIndex(prev => (prev + 1) % mockFounders.length);
    setTimeout(() => setLastAction(null), 300);
  };

  if (currentIndex >= mockFounders.length) {
    return (
      <div className="flex items-center justify-center min-h-[600px] bg-gradient-to-br from-sheraa-dark via-sheraa-dark/95 to-sheraa-primary/10 rounded-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            You've seen all founders! 🎉
          </h3>
          <p className="text-sheraa-muted mb-6">
            Check back later for more potential matches
          </p>
          <Button 
            onClick={() => setCurrentIndex(0)}
            className="bg-sheraa-primary hover:bg-sheraa-primary/90"
          >
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  const currentFounder = mockFounders[currentIndex];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Card Stack */}
      <div className="relative h-[600px]">
        {/* Background cards */}
        {mockFounders.slice(currentIndex + 1, currentIndex + 3).map((founder, index) => (
          <motion.div
            key={founder.id}
            className="absolute inset-0 bg-white rounded-xl shadow-lg"
            style={{
              scale: 1 - (index + 1) * 0.05,
              y: (index + 1) * 10,
              zIndex: -index - 1,
            }}
            animate={{
              scale: 1 - (index + 1) * 0.05,
              y: (index + 1) * 10,
            }}
          />
        ))}

        {/* Current card */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          style={{ x, rotate, opacity }}
          className="absolute inset-0 bg-white rounded-xl shadow-xl cursor-grab active:cursor-grabbing overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Profile Image */}
          <div className="h-2/3 bg-gradient-to-br from-sheraa-primary to-sheraa-teal flex items-center justify-center text-white text-4xl font-bold">
            {currentFounder.name.split(' ').map(n => n[0]).join('')}
          </div>

          {/* Profile Info */}
          <div className="p-4 h-1/3 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {currentFounder.name}, {currentFounder.age}
              </h3>
              <span className="text-sm text-gray-500">{currentFounder.experience}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <MapPin className="w-3 h-3" />
              <span>{currentFounder.location}</span>
              <Briefcase className="w-3 h-3 ml-2" />
              <span>{currentFounder.industry}</span>
            </div>

            <p className="text-sm text-gray-700 mb-3 line-clamp-2">
              {currentFounder.bio}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-1 mb-2">
              {currentFounder.skills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-sheraa-primary/10 text-sheraa-primary text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Looking for */}
            <div className="text-xs text-gray-500">
              Looking for: {currentFounder.lookingFor.slice(0, 2).join(', ')}
            </div>
          </div>

          {/* Swipe indicators */}
          <motion.div
            className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold"
            style={{ opacity: useTransform(x, [0, 100, 200], [0, 0.5, 1]) }}
          >
            MATCH
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold"
            style={{ opacity: useTransform(x, [-200, -100, 0], [1, 0.5, 0]) }}
          >
            PASS
          </motion.div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          onClick={handlePass}
          className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-red-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-6 h-6 text-red-500" />
        </motion.button>

        <motion.button
          className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-blue-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6 text-blue-500" />
        </motion.button>

        <motion.button
          onClick={handleLike}
          className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-green-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Heart className="w-6 h-6 text-green-500" />
        </motion.button>
      </div>

      {/* Match Counter */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {matches.length} matches • {mockFounders.length - currentIndex - 1} remaining
        </p>
      </div>
    </div>
  );
};