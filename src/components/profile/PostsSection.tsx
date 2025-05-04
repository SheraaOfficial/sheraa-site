
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PostForm from "../posts/PostForm";
import PostsList from "../posts/PostsList";

interface PostsSectionProps {
  userId: string | number;
}

const PostsSection = ({ userId }: PostsSectionProps) => {
  return (
    <>
      <Card className="mb-6">
        <CardContent className="p-6">
          <PostForm />
        </CardContent>
      </Card>
      
      <PostsList userId={userId} />
    </>
  );
};

export default PostsSection;
