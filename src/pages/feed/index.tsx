
import React, { useState, useEffect } from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  BookmarkPlus, 
  Filter,
  Trending,
  Users,
  Calendar,
  Lightbulb,
  TrendingUp,
  Award,
  MapPin,
  ExternalLink,
  Plus,
  Send
} from 'lucide-react';

const CommunityFeedPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loggedInUser, setLoggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  const [users, setUsers] = useLocalStorage<any[]>("users", []);
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState('');
  const [filter, setFilter] = useState('all');
  const [isPosting, setIsPosting] = useState(false);

  // Sample feed data
  const samplePosts = [
    {
      id: 1,
      author: {
        name: "Sarah Al-Mansouri",
        avatar: "",
        title: "CEO at GreenTech UAE",
        location: "Sharjah, UAE"
      },
      content: "Excited to announce that our startup just secured Series A funding! 🚀 The Sheraa community has been instrumental in connecting us with the right investors. Thank you to all the mentors who guided us through this journey.",
      timestamp: "2 hours ago",
      type: "funding",
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ["funding", "greentech", "success"]
    },
    {
      id: 2,
      author: {
        name: "Ahmed Hassan",
        avatar: "",
        title: "Product Manager at TechFlow",
        location: "Dubai, UAE"
      },
      content: "Looking for a technical co-founder for my EdTech startup focused on Arabic language learning. We're building an AI-powered platform that makes learning Arabic fun and interactive. DM me if interested!",
      timestamp: "4 hours ago",
      type: "collaboration",
      likes: 15,
      comments: 12,
      shares: 6,
      tags: ["cofounder", "edtech", "ai"]
    },
    {
      id: 3,
      author: {
        name: "Fatima Al-Zahra",
        avatar: "",
        title: "Marketing Director at InnovateME",
        location: "Sharjah, UAE"
      },
      content: "Just attended an amazing workshop on digital marketing strategies at Sheraa. The insights on customer acquisition for B2B startups were game-changing. Highly recommend their upcoming events!",
      timestamp: "6 hours ago",
      type: "event",
      likes: 18,
      comments: 5,
      shares: 4,
      tags: ["workshop", "marketing", "learning"]
    },
    {
      id: 4,
      author: {
        name: "Omar Al-Rashid",
        avatar: "",
        title: "Founder at HealthFirst",
        location: "Abu Dhabi, UAE"
      },
      content: "Beta testing our new telehealth platform and the response has been incredible! 95% patient satisfaction rate and 40% reduction in wait times. Healthcare innovation is the future. 🏥💡",
      timestamp: "1 day ago",
      type: "product",
      likes: 31,
      comments: 14,
      shares: 8,
      tags: ["healthtech", "beta", "innovation"]
    }
  ];

  const handleCreatePost = async () => {
    if (!loggedInUser) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to create posts",
        variant: "destructive"
      });
      navigate("/auth");
      return;
    }

    if (!newPost.trim()) return;

    setIsPosting(true);
    
    const post = {
      id: Date.now(),
      author: {
        name: `${loggedInUser.firstName} ${loggedInUser.lastName}`,
        avatar: loggedInUser.profileImage || "",
        title: loggedInUser.profile?.headline || "Entrepreneur",
        location: loggedInUser.profile?.location || "Sharjah, UAE"
      },
      content: newPost,
      timestamp: "Just now",
      type: "general",
      likes: 0,
      comments: 0,
      shares: 0,
      tags: []
    };

    setPosts([post, ...posts]);
    setNewPost('');
    setIsPosting(false);

    toast({
      title: "Post shared!",
      description: "Your post has been shared with the community"
    });
  };

  useEffect(() => {
    setPosts(samplePosts);
  }, []);

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'funding': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'collaboration': return <Users className="w-4 h-4 text-blue-600" />;
      case 'event': return <Calendar className="w-4 h-4 text-purple-600" />;
      case 'product': return <Lightbulb className="w-4 h-4 text-orange-600" />;
      default: return <MessageCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'funding': return 'bg-green-100 text-green-800 border-green-200';
      case 'collaboration': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'product': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-sheraa-dark dark:to-sheraa-dark/80">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-sheraa-primary/10 via-sheraa-teal/10 to-sheraa-primary/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sheraa-primary to-sheraa-teal bg-clip-text text-transparent">
                Community Feed
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Stay connected with Sharjah's entrepreneurship ecosystem. Share updates, discover opportunities, and engage with fellow founders.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold flex items-center gap-2">
                    <Trending className="w-5 h-5 text-sheraa-primary" />
                    Community Stats
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Active Members</span>
                    <Badge variant="secondary">1,247</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Posts Today</span>
                    <Badge variant="secondary">23</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Events This Week</span>
                    <Badge variant="secondary">5</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Trending Topics */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Trending Topics</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {['#funding', '#startups', '#ai', '#sustainability', '#fintech'].map((tag) => (
                      <Badge key={tag} variant="outline" className="mr-2 mb-2 cursor-pointer hover:bg-sheraa-primary/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Connections */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Suggested Connections</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Lisa Chen", title: "FinTech Founder" },
                    { name: "Mark Ali", title: "Sustainability Expert" },
                    { name: "Noor Hassan", title: "AI Researcher" }
                  ].map((person, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{person.name}</p>
                          <p className="text-xs text-gray-500">{person.title}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Main Feed */}
            <div className="lg:col-span-3 space-y-6">
              {/* Create Post */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={loggedInUser?.profileImage} />
                        <AvatarFallback>
                          {loggedInUser ? `${loggedInUser.firstName?.[0]}${loggedInUser.lastName?.[0]}` : 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Share your thoughts, updates, or ask questions..."
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          className="min-h-[100px] resize-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Event
                        </Button>
                        <Button variant="outline" size="sm">
                          <Award className="w-4 h-4 mr-2" />
                          Achievement
                        </Button>
                      </div>
                      <Button
                        onClick={handleCreatePost}
                        disabled={!newPost.trim() || isPosting}
                        className="bg-sheraa-primary hover:bg-sheraa-primary/90"
                      >
                        {isPosting ? (
                          <>Posting...</>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Share
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Filter Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[
                  { key: 'all', label: 'All Posts', icon: MessageCircle },
                  { key: 'funding', label: 'Funding', icon: TrendingUp },
                  { key: 'collaboration', label: 'Collaboration', icon: Users },
                  { key: 'events', label: 'Events', icon: Calendar },
                  { key: 'products', label: 'Products', icon: Lightbulb }
                ].map((tab) => (
                  <Button
                    key={tab.key}
                    variant={filter === tab.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(tab.key)}
                    className="flex-shrink-0"
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </Button>
                ))}
              </div>

              {/* Posts */}
              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {/* Post Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <Avatar>
                                <AvatarImage src={post.author.avatar} />
                                <AvatarFallback>
                                  {post.author.name.split(' ').map((n: string) => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="font-semibold">{post.author.name}</h4>
                                  <Badge variant="outline" className={getPostTypeColor(post.type)}>
                                    {getPostTypeIcon(post.type)}
                                    <span className="ml-1 capitalize">{post.type}</span>
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600">{post.author.title}</p>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <MapPin className="w-3 h-3" />
                                  {post.author.location} • {post.timestamp}
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <BookmarkPlus className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Post Content */}
                          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {post.content}
                          </div>

                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {post.tags.map((tag: string) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Post Actions */}
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-6">
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                                <Heart className="w-4 h-4 mr-2" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-600">
                                <Share2 className="w-4 h-4 mr-2" />
                                {post.shares}
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center pt-8">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CommunityFeedPage;
