import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Download, Copy, Twitter, Instagram, Facebook } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SocialShareProps {
  result: {
    type: string;
    title: string;
    score: number;
  };
}

const SocialShare: React.FC<SocialShareProps> = ({ result }) => {
  const shareText = `I just discovered I'm a ${result.type}! 🎯 I scored ${result.score}/100 on Sheraa's Idea Validator Challenge. Find out your entrepreneurial superpower at sheraa.ae`;
  const shareUrl = window.location.href;

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
    toast({
      title: "Shared to Twitter! 🐦",
      description: "Your results are now on Twitter!",
      duration: 3000,
    });
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
    toast({
      title: "Shared to Facebook! 📘",
      description: "Your results are now on Facebook!",
      duration: 3000,
    });
  };

  const shareToInstagram = () => {
    // Instagram doesn't support direct sharing, so copy to clipboard
    navigator.clipboard.writeText(shareText);
    toast({
      title: "Copied for Instagram! 📸",
      description: "Text copied! Paste it in your Instagram story.",
      duration: 3000,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareText);
    toast({
      title: "Copied to clipboard! 📋",
      description: "Share text copied successfully!",
      duration: 3000,
    });
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4 text-center">Share Your Results 🎉</h3>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button
            onClick={shareToTwitter}
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-50"
          >
            <Twitter className="w-4 h-4 text-blue-500" />
            Twitter
          </Button>
          
          <Button
            onClick={shareToFacebook}
            variant="outline"
            className="flex items-center gap-2 hover:bg-blue-50"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
            Facebook
          </Button>
          
          <Button
            onClick={shareToInstagram}
            variant="outline"
            className="flex items-center gap-2 hover:bg-pink-50"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            Instagram
          </Button>
          
          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="flex items-center gap-2 hover:bg-gray-50"
          >
            <Copy className="w-4 h-4 text-gray-600" />
            Copy Text
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">Share your entrepreneurial journey:</p>
          <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 italic">
            "{shareText}"
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialShare;