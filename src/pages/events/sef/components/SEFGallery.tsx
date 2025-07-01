
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { 
  Camera, Video, Play, Users, Mic, Trophy,
  Calendar, Filter, Search, Download, Share2,
  ChevronLeft, ChevronRight, X, Volume2, VolumeX
} from 'lucide-react';

interface MediaItem {
  id: string;
  type: 'photo' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  year: number;
  theme: string;
  category: 'speakers' | 'networking' | 'zones' | 'awards' | 'moments' | 'behind-scenes';
  tags: string[];
}

const SEFGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);

  // Sample media data organized by years and themes
  const mediaData: MediaItem[] = [
    // 2024 - Where We Belong
    {
      id: '1',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      title: 'Opening Keynote 2024',
      description: 'Inspiring opening ceremony with global speakers',
      year: 2024,
      theme: 'Where We Belong',
      category: 'speakers',
      tags: ['keynote', 'opening', 'inspiration']
    },
    {
      id: '2',
      type: 'video',
      src: '/placeholder-video.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      title: 'SEF 2024 Highlights',
      description: 'Best moments from the two-day festival',
      year: 2024,
      theme: 'Where We Belong',
      category: 'moments',
      tags: ['highlights', 'festival', 'community']
    },
    {
      id: '3',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop',
      title: 'Innovation Zone',
      description: 'Startups showcasing cutting-edge technologies',
      year: 2024,
      theme: 'Where We Belong',
      category: 'zones',
      tags: ['innovation', 'startups', 'technology']
    },
    {
      id: '4',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      title: 'Networking Lunch',
      description: 'Meaningful connections over shared meals',
      year: 2024,
      theme: 'Where We Belong',
      category: 'networking',
      tags: ['networking', 'connections', 'community']
    },
    // 2023 - Our Shared Canvas
    {
      id: '5',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop',
      title: 'Collaborative Workshop',
      description: 'Co-creation session bringing ideas to life',
      year: 2023,
      theme: 'Our Shared Canvas',
      category: 'zones',
      tags: ['collaboration', 'workshop', 'creativity']
    },
    {
      id: '6',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      title: 'Awards Ceremony',
      description: 'Celebrating outstanding entrepreneurial achievements',
      year: 2023,
      theme: 'Our Shared Canvas',
      category: 'awards',
      tags: ['awards', 'recognition', 'achievement']
    },
    // 2022 - Where We Belong
    {
      id: '7',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      title: 'Global Speakers Panel',
      description: 'International thought leaders sharing insights',
      year: 2022,
      theme: 'Where We Belong',
      category: 'speakers',
      tags: ['panel', 'global', 'insights']
    },
    {
      id: '8',
      type: 'photo',
      src: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&h=600&fit=crop',
      title: 'Behind the Scenes',
      description: 'The team that makes SEF magic happen',
      year: 2022,
      theme: 'Where We Belong',
      category: 'behind-scenes',
      tags: ['team', 'preparation', 'backstage']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Media', icon: Camera },
    { key: 'speakers', label: 'Speakers', icon: Mic },
    { key: 'networking', label: 'Networking', icon: Users },
    { key: 'zones', label: 'Experience Zones', icon: Trophy },
    { key: 'awards', label: 'Awards', icon: Trophy },
    { key: 'moments', label: 'Key Moments', icon: Camera },
    { key: 'behind-scenes', label: 'Behind Scenes', icon: Video }
  ];

  const years = [
    { year: 0, label: 'All Years' },
    { year: 2024, label: '2024', theme: 'Where We Belong' },
    { year: 2023, label: '2023', theme: 'Our Shared Canvas' },
    { year: 2022, label: '2022', theme: 'Where We Belong' },
    { year: 2021, label: '2021', theme: 'Resilience & Growth' }
  ];

  // Filter media based on selected criteria
  const filteredMedia = useMemo(() => {
    return mediaData.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 0 || item.year === selectedYear;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesYear && matchesSearch;
    });
  }, [selectedCategory, selectedYear, searchTerm, mediaData]);

  const handleMediaClick = (media: MediaItem) => {
    setSelectedMedia(media);
    setCurrentIndex(filteredMedia.findIndex(item => item.id === media.id));
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredMedia.length - 1;
    } else {
      newIndex = currentIndex < filteredMedia.length - 1 ? currentIndex + 1 : 0;
    }
    
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.key === category);
    const IconComponent = cat?.icon || Camera;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark/50 dark:to-sheraa-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sheraa-sef-primary/20 to-sheraa-sef-accent/20 border border-sheraa-sef-primary/30 mb-6">
            <Camera className="w-5 h-5 text-sheraa-sef-primary" />
            <span className="text-sm font-bold bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent bg-clip-text text-transparent">
              SEF Gallery
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent">
            Moments That Matter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Relive the magic of past SEF events through our curated collection of photos and videos, 
            capturing the essence of entrepreneurship, innovation, and community connection.
          </p>
        </motion.div>

        {/* Filters Section */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search photos and videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-sheraa-sef-primary focus:outline-none bg-white dark:bg-sheraa-dark dark:border-gray-700"
              />
            </div>
          </div>

          {/* Year Filter */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-sheraa-dark rounded-lg p-2 border border-gray-200 dark:border-gray-700">
              {years.map((year) => (
                <button
                  key={year.year}
                  onClick={() => setSelectedYear(year.year)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedYear === year.year
                      ? 'bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{year.label}</span>
                    {year.theme && (
                      <span className="text-xs opacity-70 mt-1">{year.theme}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-sheraa-dark rounded-lg p-2 border border-gray-200 dark:border-gray-700">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredMedia.length} {filteredMedia.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className="group cursor-pointer"
              onClick={() => handleMediaClick(media)}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={media.thumbnail || media.src}
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Media Type Indicator */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`${media.type === 'video' ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
                      {media.type === 'video' ? <Video className="w-3 h-3 mr-1" /> : <Camera className="w-3 h-3 mr-1" />}
                      {media.type}
                    </Badge>
                  </div>

                  {/* Play Button for Videos */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    {getCategoryIcon(media.category)}
                    <Badge variant="outline" className="text-xs">
                      {media.year} • {media.theme}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold mb-2 group-hover:text-sheraa-sef-primary transition-colors">
                    {media.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {media.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {media.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Media Modal */}
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
            {selectedMedia && (
              <div className="relative w-full h-full bg-black">
                {/* Navigation */}
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 text-white hover:bg-black/70"
                    onClick={() => setVideoMuted(!videoMuted)}
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 text-white hover:bg-black/70"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 text-white hover:bg-black/70"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>

                {/* Media Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {selectedMedia.type === 'video' ? (
                    <video
                      src={selectedMedia.src}
                      controls
                      muted={videoMuted}
                      className="max-w-full max-h-full object-contain"
                      autoPlay
                    />
                  ) : (
                    <img
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}

                  {/* Navigation Arrows */}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateMedia('prev')}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={() => navigateMedia('next')}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </div>

                {/* Media Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      {getCategoryIcon(selectedMedia.category)}
                      <Badge className="bg-white/20 text-white">
                        {selectedMedia.year} • {selectedMedia.theme}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{selectedMedia.title}</h3>
                    <p className="text-white/80 mb-4">{selectedMedia.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMedia.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/10 text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Empty State */}
        {filteredMedia.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No media found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Try adjusting your filters or search terms
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedYear(0);
                setSearchTerm('');
              }}
              variant="outline"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SEFGallery;
