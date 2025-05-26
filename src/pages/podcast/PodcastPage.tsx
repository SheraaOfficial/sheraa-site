
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Mic, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PodcastPage = () => {
  const episodes = [
    {
      id: 1,
      title: "Building Resilient Startups in Uncertain Times",
      guest: "Dr. Amira Al-Hosani",
      role: "Serial Entrepreneur & Investor",
      duration: "45 min",
      date: "December 15, 2024",
      description: "Join us as we explore strategies for building resilient startups that can weather any storm with serial entrepreneur Dr. Amira Al-Hosani."
    },
    {
      id: 2,
      title: "The Future of Fintech in the MENA Region",
      guest: "Omar Kassim",
      role: "Founder & CEO, JadoPado",
      duration: "38 min",
      date: "December 8, 2024",
      description: "A deep dive into the evolving fintech landscape across MENA and the opportunities that lie ahead for innovative startups."
    },
    {
      id: 3,
      title: "From Student to Startup Founder: A Journey",
      guest: "Fatima Al Zahra",
      role: "Startup Dojo Graduate",
      duration: "32 min",
      date: "December 1, 2024",
      description: "An inspiring story of transformation from university student to successful startup founder through Sheraa's programs."
    },
    {
      id: 4,
      title: "Sustainable Innovation: The Next Wave",
      guest: "Ahmed Ben Chaibah",
      role: "Sustainability Expert",
      duration: "41 min",
      date: "November 24, 2024",
      description: "Exploring how sustainability is driving innovation and creating new opportunities for entrepreneurs in the region."
    }
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Mic className="w-16 h-16 text-purple-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Sheraa <span className="text-purple-600">Podcast</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Conversations with entrepreneurs, innovators, and thought leaders shaping the future
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Headphones className="w-4 h-4" />
                  <span>50+ Episodes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Weekly</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Latest Episode Highlight */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Latest Episode
              </h2>
              <Card className="bg-gradient-to-r from-purple-500 to-blue-600 text-white border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                      Episode {episodes[0].id}
                    </span>
                    <span className="text-sm opacity-90">{episodes[0].date}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold mt-4">
                    {episodes[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <p className="font-semibold">{episodes[0].guest}</p>
                      <p className="text-sm opacity-90">{episodes[0].role}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm opacity-90">
                      <Clock className="w-4 h-4" />
                      <span>{episodes[0].duration}</span>
                    </div>
                  </div>
                  <p className="mb-6 opacity-90">
                    {episodes[0].description}
                  </p>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    <Play className="w-4 h-4 mr-2" />
                    Play Episode
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* All Episodes */}
        <section className="py-16 bg-white/50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              All Episodes
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium">
                              Episode {episode.id}
                            </span>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>{episode.date}</span>
                              <Clock className="w-4 h-4 ml-2" />
                              <span>{episode.duration}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {episode.title}
                          </h3>
                          <div className="mb-3">
                            <p className="font-medium text-gray-700 dark:text-gray-300">
                              {episode.guest}
                            </p>
                            <p className="text-sm text-gray-500">{episode.role}</p>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {episode.description}
                          </p>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Never Miss an Episode
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Subscribe to get notified when new episodes are released
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Subscribe on Spotify
                </Button>
                <Button variant="outline">
                  Subscribe on Apple Podcasts
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default PodcastPage;
