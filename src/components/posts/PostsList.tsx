
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share } from 'lucide-react';

interface Post {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: Date;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface PostsListProps {
  posts?: Post[];
  userId?: string | number;
}

// Mock data for posts - used as fallback
const mockPosts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Sarah Al Amiri',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      role: 'Founder at TechStart'
    },
    content: 'Just launched our MVP! Excited to share our journey with the Sheraa community. Looking for feedback from fellow entrepreneurs.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    likes: 24,
    comments: 8,
    isLiked: false
  },
  {
    id: 2,
    author: {
      name: 'Mohammed Rahman',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'S3 Incubator Graduate'
    },
    content: 'Grateful for the mentorship at Sheraa. Today we closed our seed round! To all the founders out there - keep pushing forward.',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    likes: 56,
    comments: 15,
    isLiked: true
  },
  {
    id: 3,
    author: {
      name: 'Leila Janah',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      role: 'Community Member'
    },
    content: 'Amazing workshop on digital marketing today. The Sheraa community never stops inspiring! Who else attended?',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    likes: 31,
    comments: 12,
    isLiked: false
  }
];

const PostsList: React.FC<PostsListProps> = ({ posts = mockPosts, userId }) => {
  const handleLike = (postId: number) => {
    // Handle like functionality
    console.log('Liked post:', postId);
  };

  const handleComment = (postId: number) => {
    // Handle comment functionality
    console.log('Comment on post:', postId);
  };

  const handleShare = (postId: number) => {
    // Handle share functionality
    console.log('Share post:', postId);
  };

  // Filter posts by userId if provided
  const displayPosts = userId ? posts.filter(post => post.author.name.includes(userId.toString())) : posts;

  return (
    <div className="space-y-6">
      {displayPosts.map((post) => (
        <Card key={post.id} className="w-full">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-base font-semibold">{post.author.name}</CardTitle>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
              <span className="text-sm text-gray-400">
                {formatDistanceToNow(post.timestamp, { addSuffix: true })}
              </span>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-2 ${post.isLiked ? 'text-red-500' : 'text-gray-500'}`}
                  onClick={() => handleLike(post.id)}
                >
                  <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 text-gray-500"
                  onClick={() => handleComment(post.id)}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-500"
                onClick={() => handleShare(post.id)}
              >
                <Share className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
