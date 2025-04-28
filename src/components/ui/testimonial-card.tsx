
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  role: string;
  company: string;
  image: string;
  impact?: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  const card = (
    <div className="relative group w-[320px] sm:w-[380px] md:w-[400px] h-full">
      <div className="h-full backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl p-5 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-white/40">
        <div className="absolute -top-3 -left-3 bg-sheraa-primary text-white p-2 md:p-3 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        
        <div className="flex items-center gap-1 mb-4 md:mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#FF6600"
              stroke="#FF6600"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

        <blockquote className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 italic line-clamp-4 md:line-clamp-none">
          "{text}"
        </blockquote>

        {author.impact && (
          <div className="bg-sheraa-primary/10 text-sheraa-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 inline-block">
            {author.impact}
          </div>
        )}

        <div className="flex items-center gap-3 md:gap-4">
          <Avatar className="w-10 h-10 md:w-12 md:h-12 border-2 border-white/50">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback className="bg-sheraa-primary text-white">
              {author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-sheraa-dark text-sm md:text-base">{author.name}</h4>
            <p className="text-xs md:text-sm text-gray-600">{author.role}</p>
            <p className="text-xs md:text-sm font-medium text-sheraa-primary">{author.company}</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={cn("block", "mx-2 my-2")}
        target="_blank"
        rel="noopener noreferrer"
      >
        {card}
      </a>
    );
  }

  return <div className="mx-2 my-2">{card}</div>;
}
