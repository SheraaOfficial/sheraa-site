
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { 
  Camera, Video, Play, Users, Mic, Trophy,
  Calendar, Filter, Search, Download, Share2,
  ChevronLeft, ChevronRight, X, Volume2, VolumeX,
  Heart, Star, Grid3X3, LayoutMasonry, ExternalLink,
  Clock, Eye, MapPin, User
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
  photographer?: string;
  location?: string;
  timestamp?: string;
  views?: number;
  likes?: number;
  featured?: boolean;
}

const SEFGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  // Enhanced media data with real SEF content and stories
  const mediaData: MediaItem[] = [
    // 2024 - Where We Belong
    {
      id: '1',
      type: 'photo',
      src: '/lovable-uploads/sheraa-logo.png',
      title: 'SEF 2024 Opening Ceremony',
      description: 'H.E. Sheikha Bodour bint Sultan Al Qasimi delivers the inspiring opening keynote, setting the tone for two days of innovation and connection.',
      year: 2024,
      theme: 'Where We Belong',
      category: 'speakers',
      tags: ['keynote', 'opening', 'leadership', 'inspiration'],
      photographer: 'SEF Media Team',
      location: 'Main Stage, SRTIP',
      timestamp: '09:00 AM',
      views: 2847,
      likes: 234,
      featured: true
    },
    {
      id: '2',
      type: 'video',
      src: '/placeholder-video.mp4',
      thumbnail: '/lovable-uploads/5c7170ff-c318-404d-82fa-af5c349154db.png',
      title: 'SEF 2024 - Where We Belong Highlights',
      description: 'A captivating journey through the most memorable moments of SEF 2024, showcasing the spirit of belonging that united 14,000+ attendees.',
      year: 2024,
      theme: 'Where We Belong',
      category: 'moments',
      tags: ['highlights', 'community', 'innovation', 'belonging'],
      photographer: 'SEF Production',
      views: 5672,
      likes: 456,
      featured: true
    },
    {
      id: '3',
      type: 'photo',
      src: '/lovable-uploads/1461e9a9-fd41-4085-86e1-6765d0fd4f59.png',
      title: 'Innovation Showcase at Startup Town',
      description: 'Young entrepreneurs pitch their groundbreaking solutions in the vibrant Startup Town zone, embodying the future of innovation.',
      year: 2024,
      theme: 'Where We Belong',
      category: 'zones',
      tags: ['startups', 'innovation', 'pitching', 'youth'],
      photographer: 'Ahmed Al-Rashid',
      location: 'Startup Town Zone',
      views: 1892,
      likes: 167
    },
    {
      id: '4',
      type: 'photo',
      src: '/lovable-uploads/35a850c6-6901-4128-a54d-839726da459c.png',
      title: 'Networking Magic Moments',
      description: 'Spontaneous connections form over shared meals and conversations, creating the collaborative spirit that defines SEF.',
      year: 2024,
      theme: 'Where We Belong',
      category: 'networking',
      tags: ['networking', 'community', 'connections', 'collaboration'],
      photographer: 'Sara Al-Mansouri',
      location: 'Networking Lounge',
      views: 1543,
      likes: 203
    },
    {
      id: '5',
      type: 'photo',
      src: '/lovable-uploads/67019a34-88c0-4c00-ba3f-2e89761a0678.png',
      title: 'SEFFY Awards 2024',
      description: 'Celebrating outstanding achievements in entrepreneurship and innovation, recognizing the changemakers who are shaping our future.',
      year: 2024,
      theme: 'Where We Belong',
      category: 'awards',
      tags: ['awards', 'recognition', 'achievement', 'celebration'],
      photographer: 'Omar Hassan',
      location: 'Awards Theater',
      timestamp: '07:00 PM',
      views: 3421,
      likes: 312,
      featured: true
    },
    // 2023 - Our Shared Canvas
    {
      id: '6',
      type: 'photo',
      src: '/lovable-uploads/78dc4101-2481-4c13-a19f-62dbefeae768.png',
      title: 'Collaborative Workshop in Action',
      description: 'Attendees co-create solutions in interactive workshops, painting their visions on our shared canvas of innovation.',
      year: 2023,
      theme: 'Our Shared Canvas',
      category: 'zones',
      tags: ['collaboration', 'workshop', 'co-creation', 'creativity'],
      photographer: 'Fatima Al-Zahra',
      location: 'Creative Zone',
      views: 2156,
      likes: 189
    },
    {
      id: '7',
      type: 'photo',
      src: '/lovable-uploads/8d102701-b92b-44de-89f9-acdda63b6884.png',
      title: 'Global Thought Leaders Panel',
      description: 'International speakers share diverse perspectives on entrepreneurship, contributing to our shared canvas of knowledge.',
      year: 2023,
      theme: 'Our Shared Canvas',
      category: 'speakers',
      tags: ['panel', 'global', 'diversity', 'knowledge-sharing'],
      photographer: 'Khalid Al-Awadhi',
      location: 'Main Stage',
      views: 2847,
      likes: 234
    },
    {
      id: '8',
      type: 'video',
      src: '/placeholder-video.mp4',
      thumbnail: '/lovable-uploads/91a7f993-9696-46a1-96a7-59d67803f50f.png',
      title: 'Behind the Scenes: Creating SEF Magic',
      description: 'Exclusive behind-the-scenes footage showing the dedicated team and volunteers who bring SEF to life each year.',
      year: 2023,
      theme: 'Our Shared Canvas',
      category: 'behind-scenes',
      tags: ['team', 'volunteers', 'preparation', 'dedication'],
      photographer: 'SEF Documentary Team',
      views: 1893,
      likes: 156
    },
    // 2022 - Where We Belong (Original)
    {
      id: '9',
      type: 'photo',
      src: '/lovable-uploads/93efd6a3-c496-43d2-9401-ad6821c1352b.png',
      title: 'Community Connections 2022',
      description: 'The inaugural "Where We Belong" theme brought together a diverse community of entrepreneurs, creating lasting bonds.',
      year: 2022,
      theme: 'Where We Belong',
      category: 'networking',
      tags: ['community', 'diversity', 'connections', 'inaugural'],
      photographer: 'Latifa Al-Mansouri',
      location: 'Community Hub',
      views: 1672,
      likes: 143
    },
    {
      id: '10',
      type: 'photo',
      src: '/lovable-uploads/962e9262-6759-495c-ad9e-5f8fc0043698.png',
      title: 'Innovation Expo 2022',
      description: 'Cutting-edge technologies and innovative solutions on display, setting the foundation for future SEF events.',
      year: 2022,
      theme: 'Where We Belong',
      category: 'zones',
      tags: ['technology', 'innovation', 'expo', 'foundation'],
      photographer: 'Mohamed Al-Rashid',
      location: 'Innovation Expo',
      views: 2134,
      likes: 198
    },
    // Additional Years - Building the Legacy
    {
      id: '11',
      type: 'photo',
      src: '/lovable-uploads/9927fa13-2911-40c1-98c4-7c733bbe84bd.png',
      title: 'SEF Academy Masterclass',
      description: 'Intensive learning sessions where industry experts share actionable insights with aspiring entrepreneurs.',
      year: 2023,
      theme: 'Our Shared Canvas',
      category: 'zones',
      tags: ['education', 'masterclass', 'learning', 'experts'],
      photographer: 'Aisha Al-Qasimi',
      location: 'SEF Academy',
      views: 1456,
      likes: 127
    },
    {
      id: '12',
      type: 'photo',
      src: '/lovable-uploads/a7594ccb-820e-40d4-addc-1cf4dfebadfe.png',
      title: 'Investor Connections Lounge',
      description: 'Strategic meetings between startups and investors, facilitating the funding partnerships that drive growth.',
      year: 2024,
      theme: 'Where We Belong',
      category: 'networking',
      tags: ['investors', 'funding', 'partnerships', 'growth'],
      photographer: 'Noor Al-Hashimi',
      location: 'Investors Lounge',
      views: 2789,
      likes: 245
    }
  ];

  const categories = [
    { key: 'all', label: 'All Media', icon: Camera },
    { key: 'speakers', label: 'Keynotes & Speakers', icon: Mic },
    { key: 'networking', label: 'Community & Networking', icon: Users },
    { key: 'zones', label: 'Experience Zones', icon: Trophy },
    { key: 'awards', label: 'Awards & Recognition', icon: Star },
    { key: 'moments', label: 'Key Moments', icon: Heart },
    { key: 'behind-scenes', label: 'Behind the Scenes', icon: Video }
  ];

  const years = [
    { year: 0, label: 'All Years' },
    { year: 2024, label: '2024', theme: 'Where We Belong', attendees: '14,000+' },
    { year: 2023, label: '2023', theme: 'Our Shared Canvas', attendees: '12,000+' },
    { year: 2022, label: '2022', theme: 'Where We Belong', attendees: '10,000+' },
    { year: 2021, label: '2021', theme: 'Resilience & Growth', attendees: '8,000+' }
  ];

  // Filter media based on selected criteria
  const filteredMedia = useMemo(() => {
    return mediaData.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesYear = selectedYear === 0 || item.year === selectedYear;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.photographer && item.photographer.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesYear && matchesSearch;
    }).sort((a, b) => {
      // Featured items first, then by year (newest first), then by likes
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.year !== b.year) return b.year - a.year;
      return (b.likes || 0) - (a.likes || 0);
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

  const handleLike = (mediaId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newLikedItems = new Set(likedItems);
    if (likedItems.has(mediaId)) {
      newLikedItems.delete(mediaId);
    } else {
      newLikedItems.add(mediaId);
    }
    setLikedItems(newLikedItems);
  };

  const handleShare = (media: MediaItem) => {
    if (navigator.share) {
      navigator.share({
        title: media.title,
        text: media.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
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
              SEF Memory Lane
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sheraa-sef-primary via-sheraa-sef-accent to-sheraa-sef-primary bg-clip-text text-transparent">
            Moments That Define Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Journey through the remarkable moments, inspiring connections, and transformative experiences that have shaped the Sharjah Entrepreneurship Festival into the region's premier gathering of changemakers.
          </p>
        </motion.div>

        {/* Enhanced Filters Section */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search moments, speakers, or photographers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-sheraa-sef-primary focus:outline-none bg-white dark:bg-sheraa-dark dark:border-gray-700"
              />
            </div>
          </div>

          {/* Year Filter with Enhanced Info */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-sheraa-dark rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
              {years.map((year) => (
                <button
                  key={year.year}
                  onClick={() => setSelectedYear(year.year)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedYear === year.year
                      ? 'bg-gradient-to-r from-sheraa-sef-primary to-sheraa-sef-accent text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-bold">{year.label}</span>
                    {year.theme && (
                      <>
                        <span className="text-xs opacity-70 mt-1">{year.theme}</span>
                        {year.attendees && (
                          <span className="text-xs opacity-60 mt-0.5">{year.attendees}</span>
                        )}
                      </>
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

          {/* View Mode Toggle */}
          <div className="flex justify-center">
            <div className="flex gap-2 bg-white dark:bg-sheraa-dark rounded-lg p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-sheraa-sef-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                  viewMode === 'masonry'
                    ? 'bg-sheraa-sef-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                }`}
              >
                <LayoutMasonry className="w-4 h-4" />
                Masonry
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredMedia.length} {filteredMedia.length === 1 ? 'moment' : 'moments'} 
            {selectedYear > 0 && ` from ${selectedYear}`}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.key === selectedCategory)?.label}`}
          </p>
        </div>

        {/* Enhanced Media Grid */}
        <div className={`mb-12 ${
          viewMode === 'masonry' 
            ? 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6' 
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        }`}>
          {filteredMedia.map((media, index) => (
            <motion.div
              key={media.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * index }}
              className={`group cursor-pointer ${viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''}`}
              onClick={() => handleMediaClick(media)}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`relative overflow-hidden ${viewMode === 'masonry' ? 'aspect-auto' : 'aspect-[4/3]'}`}>
                  <img
                    src={media.thumbnail || media.src}
                    alt={media.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Overlay Info */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className={`${media.type === 'video' ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
                      {media.type === 'video' ? <Video className="w-3 h-3 mr-1" /> : <Camera className="w-3 h-3 mr-1" />}
                      {media.type}
                    </Badge>
                    {media.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-black/50 text-white hover:bg-black/70 p-2"
                      onClick={(e) => handleLike(media.id, e)}
                    >
                      <Heart className={`w-4 h-4 ${likedItems.has(media.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-black/50 text-white hover:bg-black/70 p-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(media);
                      }}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Play Button for Videos */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Enhanced Stats Overlay */}
                  <div className="absolute bottom-3 right-3 flex gap-2 text-white text-xs">
                    {media.views && (
                      <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                        <Eye className="w-3 h-3" />
                        {media.views.toLocaleString()}
                      </div>
                    )}
                    {media.likes && (
                      <div className="flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
                        <Heart className="w-3 h-3" />
                        {media.likes}
                      </div>
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(media.category)}
                      <Badge variant="outline" className="text-xs">
                        {media.year} • {media.theme}
                      </Badge>
                    </div>
                    {media.timestamp && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {media.timestamp}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-bold mb-2 group-hover:text-sheraa-sef-primary transition-colors line-clamp-2">
                    {media.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                    {media.description}
                  </p>
                  
                  {/* Enhanced Metadata */}
                  <div className="space-y-2 mb-3">
                    {media.photographer && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <User className="w-3 h-3" />
                        {media.photographer}
                      </div>
                    )}
                    {media.location && (
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        {media.location}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {media.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                    {media.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{media.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Media Modal */}
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
            {selectedMedia && (
              <div className="relative w-full h-full bg-black">
                {/* Enhanced Navigation */}
                <div className="absolute top-4 right-4 z-50 flex gap-2">
                  {selectedMedia.type === 'video' && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-black/50 text-white hover:bg-black/70"
                      onClick={() => setVideoMuted(!videoMuted)}
                    >
                      {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 text-white hover:bg-black/70"
                    onClick={() => handleShare(selectedMedia)}
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
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 text-white hover:bg-black/70"
                  >
                    <ExternalLink className="w-4 h-4" />
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

                {/* Enhanced Media Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                  <div className="text-white max-w-4xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(selectedMedia.category)}
                        <Badge className="bg-white/20 text-white">
                          {selectedMedia.year} • {selectedMedia.theme}
                        </Badge>
                        {selectedMedia.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        {selectedMedia.views && (
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {selectedMedia.views.toLocaleString()} views
                          </div>
                        )}
                        {selectedMedia.likes && (
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {selectedMedia.likes} likes
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{selectedMedia.title}</h3>
                    <p className="text-white/90 mb-4 text-lg leading-relaxed">{selectedMedia.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {selectedMedia.photographer && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-white/70" />
                          <span className="text-sm text-white/80">By {selectedMedia.photographer}</span>
                        </div>
                      )}
                      {selectedMedia.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-white/70" />
                          <span className="text-sm text-white/80">{selectedMedia.location}</span>
                        </div>
                      )}
                      {selectedMedia.timestamp && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-white/70" />
                          <span className="text-sm text-white/80">{selectedMedia.timestamp}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {selectedMedia.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                          #{tag}
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
            <h3 className="text-xl font-semibold mb-2">No moments found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Try adjusting your filters or search terms to discover more SEF memories
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
