
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import PostForm from "@/components/posts/PostForm";
import PostsList from "@/components/posts/PostsList";

const FeedPage = () => {
  const navigate = useNavigate();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  
  if (!loggedInUser) {
    navigate("/login");
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
          
          <PostsList />
        </div>
      </div>
    </MainLayout>
  );
};

export default FeedPage;
