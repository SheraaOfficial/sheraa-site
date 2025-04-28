
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Badge } from "./badge";
import { Card, CardContent } from "./card";

export interface TestimonialAuthor {
  name: string;
  company?: string;
  role?: string;
  avatarSrc?: string;
  impact?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  return (
    <Card className="w-[280px] md:w-[320px] mx-2 flex-shrink-0 border border-gray-100 shadow-sheraa-soft hover:shadow-sheraa-medium transition-all duration-300 overflow-hidden bg-white">
      <CardContent className="p-4 md:p-6">
        <div className="space-y-4">
          <blockquote className="text-sm md:text-base text-gray-700 line-clamp-3 md:line-clamp-4">
            "{text}"
          </blockquote>
          
          {author.impact && (
            <Badge variant="outline" className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 text-xs rounded-full">
              {author.impact}
            </Badge>
          )}
          
          <div className="flex items-center gap-3 md:gap-4">
            <Avatar className="w-10 h-10 border-2 border-white/50">
              <AvatarImage src={author.avatarSrc} alt={author.name} />
              <AvatarFallback className="bg-sheraa-primary text-white">
                {author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-sheraa-dark text-sm md:text-base">{author.name}</h4>
              {author.role && <p className="text-xs md:text-sm text-gray-600">{author.role}</p>}
              {author.company && <p className="text-xs md:text-sm font-medium text-sheraa-primary">{author.company}</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
