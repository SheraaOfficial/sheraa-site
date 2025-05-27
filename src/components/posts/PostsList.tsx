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
  posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
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
                  {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                </div>
              </div>
            </div>
            {post.imageUrl && (
              <img src={post.imageUrl} alt="Post" className="mb-4 rounded-md w-full" />
            )}
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>{post.comments}</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Share className="h-5 w-5 mr-2" />
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
