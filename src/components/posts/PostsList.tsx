
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share } from 'lucide-react';

interface Post {
  id: string;
  author: {
    name: string;
    imageUrl: string;
  };
  content: string;
  imageUrl?: string;
  createdAt: Date;
  likes: number;
  comments: number;
  shares: number;
}

interface PostsListProps {
  posts?: Post[];
  userId?: string | number;
}

const PostsList: React.FC<PostsListProps> = ({ posts = [], userId }) => {
  // If no posts provided, show sample posts for demo purposes
  const samplePosts: Post[] = [
    {
      id: '1',
      author: {
        name: 'Ahmed Al Rashid',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      content: 'Excited to share our latest progress on the sustainability project! We\'ve successfully reduced waste by 40% through innovative recycling techniques.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop',
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: '2',
      author: {
        name: 'Sara Al Nuaimi',
        imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face'
      },
      content: 'Just finished an amazing mentorship session with the S3 Incubator startups. The innovation and passion these entrepreneurs bring is truly inspiring!',
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
      likes: 42,
      comments: 12,
      shares: 6
    }
  ];

  const postsToShow = posts.length > 0 ? posts : samplePosts;

  return (
    <div>
      {postsToShow.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-start mb-4">
              <Avatar className="mr-4">
                <AvatarImage src={post.author.imageUrl} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{post.author.name}</div>
                <div className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                </div>
              </div>
            </div>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="Post" className="mb-4 rounded-md w-full" />
            )}
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Share className="h-4 w-4" />
                  <span>{post.shares}</span>
                </Button>
              </div>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
