
import React, { useEffect } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import UserProfile from "@/components/profile/UserProfile";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loggedInUser] = useLocalStorage<any | null>("loggedInUser", null);
  
  useEffect(() => {
    if (!loggedInUser) {
      toast({
        title: "Not logged in",
        description: "Please log in to view your profile",
      });
      navigate("/login");
    }
  }, [loggedInUser, navigate, toast]);
  
  return (
    <MainLayout>
      <UserProfile />
    </MainLayout>
  );
};

export default ProfilePage;
