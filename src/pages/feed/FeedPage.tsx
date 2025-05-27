
import React, { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import PostForm from "@/components/posts/PostForm";
import PostsList from "@/components/posts/PostsList";
import { useToast } from "@/hooks/use-toast";

const FeedPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  
  useEffect(() => {
    if (!loggedInUser) {
      toast({
        title: "Not logged in",
        description: "Please log in to view your feed",
      });
      navigate("/login");
    }
  }, [loggedInUser, navigate, toast]);
  
  if (!loggedInUser) {
    return null;
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <h1 className="text-3xl font-bold text-sheraa-primary mb-6">Your Feed</h1>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <PostForm />
            </CardContent>
          </Card>
          
          <PostsList posts={[]} />
        </div>
      </div>
    </MainLayout>
  );
};

export default FeedPage;
