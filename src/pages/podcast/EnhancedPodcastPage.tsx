
import React, { useState } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AudioPlayer } from './AudioPlayer';
import { PodcastPlaylist } from './PodcastPlaylist';
import { Play, Clock, Calendar, Download, Share2, Plus } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  guest: string;
  publishDate: string;
  image: string;
  category: string;
}

const EnhancedPodcastPage = () => {
  const [currentEpisode, setCurrentEpisode] = useState<Episode | null>(null);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const episodes: Episode[] = [
    {
      id: 1,
      title: "Building the Future: AI and Entrepreneurship",
      description: "A deep dive into how artificial intelligence is reshaping the startup landscape and creating new opportunities for entrepreneurs.",
      audioUrl: "/podcast/episode-1.mp3",
      duration: "45:30",
      guest: "Dr. Sarah Al-Mansouri",
      publishDate: "2024-01-15",
      image: "/lovable-uploads/podcast-ai.jpg",
      category: "Technology"
    },
    {
      id: 2,
      title: "From Zero to Exit: A Sheraa Success Story",
      description: "Join us as we explore the incredible journey of TechFlow, from their early days in our incubator to their recent successful exit.",
      audioUrl: "/podcast/episode-2.mp3",
      duration: "38:45",
      guest: "Ahmed Hassan",
      publishDate: "2024-01-08",
      image: "/lovable-uploads/podcast-success.jpg",
      category: "Success Stories"
    },
    {
      id: 3,
      title: "Sustainable Innovation in the UAE",
      description: "Exploring how environmental consciousness is driving innovation and creating new business opportunities in the region.",
      audioUrl: "/podcast/episode-3.mp3",
      duration: "42:15",
      guest: "Fatima Al-Zahra",
      publishDate: "2024-01-01",
      image: "/lovable-uploads/podcast-sustainability.jpg",
      category: "Sustainability"
    }
  ];

  const handlePlayEpisode = (episode: Episode) => {
    setCurrentEpisode(episode);
    setIsPlayerVisible(true);
  };

  const handleClosePlayer = () => {
    setIsPlayerVisible(false);
    setCurrentEpisode(null);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-sheraa-dark">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary/10 via-sheraa-teal/10 to-sheraa-primary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Sheraa Podcast
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Conversations with entrepreneurs, investors, and innovators shaping the future of business in Sharjah and beyond.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Episode */}
          {episodes[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Episode</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={episodes[0].image}
                      alt={episodes[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <Badge className="mb-4">{episodes[0].category}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{episodes[0].title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {episodes[0].description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {episodes[0].guest.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{episodes[0].guest}</p>
                          <p className="text-sm text-gray-500">{episodes[0].publishDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {episodes[0].duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button 
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                        onClick={() => handlePlayEpisode(episodes[0])}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Play Episode
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* All Episodes */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Episodes ({episodes.length})</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline">{episode.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-3 w-3" />
                          {episode.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                        {episode.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {episode.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {episode.guest.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{episode.guest}</p>
                            <p className="text-xs text-gray-500">{episode.publishDate}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-sheraa-primary hover:bg-sheraa-primary/90"
                          onClick={() => handlePlayEpisode(episode)}
                        >
                          <Play className="mr-1 h-3 w-3" />
                          Play
                        </Button>
                        <Button variant="outline" size="sm">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Audio Player */}
        {isPlayerVisible && currentEpisode && (
          <AudioPlayer
            episode={currentEpisode}
            onClose={handleClosePlayer}
          />
        )}

        {/* Podcast Playlist */}
        <PodcastPlaylist
          episodes={episodes}
          onPlayEpisode={handlePlayEpisode}
        />
      </div>
    </MainLayout>
  );
};

export default EnhancedPodcastPage;
