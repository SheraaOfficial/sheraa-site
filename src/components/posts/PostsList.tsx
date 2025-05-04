import React from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share, Bookmark } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface PostsListProps {
  userId?: string | number; // Updated to accept both string and number
}

const PostsList: React.FC<PostsListProps> = ({ userId }) => {
  const [users] = useLocalStorage<any[]>("users", []);
  
  // Get all posts from all users
  const allPosts = users.reduce((posts, user) => {
    if (user.posts) {
      if (userId) {
        // If userId is provided, only include posts from this user
        if (user.id === userId) {
          return [...posts, ...user.posts];
        }
      } else {
        // Otherwise include all posts
        return [...posts, ...user.posts];
      }
    }
    return posts;
  }, []);
  
  // Sort posts by creation date (newest first)
  const sortedPosts = [...allPosts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  
  // Function to find post author
  const getPostAuthor = (authorId: string) => {
    return users.find(user => user.id === authorId);
  };
  
  if (sortedPosts.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-gray-500">
            {userId ? "You haven't published any posts yet." : "No posts to display."}
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      {sortedPosts.map((post) => {
        const author = getPostAuthor(post.authorId);
        if (!author) return null;
        
        return (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-sheraa-primary/10 flex items-center justify-center text-xl font-bold text-sheraa-primary flex-shrink-0">
                  {author.firstName[0]}{author.lastName[0]}
                </div>
                <div>
                  <p className="font-medium">
                    {author.firstName} {author.lastName}
                  </p>
                  {author.profile?.headline && (
                    <p className="text-sm text-gray-500">{author.profile.headline}</p>
                  )}
                  <p className="text-xs text-gray-400">
                    {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                  </p>
                </div>
              </div>
              
              <div className="whitespace-pre-line">
                {post.content}
              </div>
            </CardContent>
            
            <CardFooter className="px-6 py-4 bg-gray-50 border-t flex justify-between">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                  <Heart className="h-5 w-5 mr-1" />
                  <span>{post.likes || 0}</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{post.comments?.length || 0}</span>
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Share className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-600">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default PostsList;
