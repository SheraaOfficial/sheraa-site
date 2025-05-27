import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  likes: number;
  comments: number;
  shares: number;
}

interface PostsListProps {
  posts?: Post[];
  userId?: string | number;
}

const defaultPosts: Post[] = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    content: "AI is rapidly changing the landscape of web development, offering new tools and techniques to streamline the development process and enhance user experiences.",
    author: "John Doe",
    date: new Date(),
    likes: 120,
    comments: 35,
    shares: 12,
  },
  {
    id: 2,
    title: "Mastering React Hooks in 2024",
    content: "React Hooks have revolutionized the way we write React components, making it easier to manage state and side effects. This guide covers the most essential hooks you need to know.",
    author: "Jane Smith",
    date: new Date(),
    likes: 95,
    comments: 28,
    shares: 8,
  },
];

const PostsList: React.FC<PostsListProps> = ({ posts = defaultPosts, userId }) => {
  console.log('PostsList rendered with userId:', userId);
  
  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Posted by {post.author} {formatDistanceToNow(post.date, { addSuffix: true })}
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4 mr-1" /> {post.likes}
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-4 w-4 mr-1" /> {post.comments}
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4 mr-1" /> {post.shares}
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
