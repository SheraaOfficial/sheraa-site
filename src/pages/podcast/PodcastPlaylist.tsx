
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  guest: string;
  publishDate: string;
  image: string;
  category: string;
}

interface PodcastPlaylistProps {
  episodes: Episode[];
  onPlayEpisode: (episode: Episode) => void;
}

export const PodcastPlaylist: React.FC<PodcastPlaylistProps> = ({ episodes, onPlayEpisode }) => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5 text-sheraa-primary" />
          Podcast Playlist ({episodes.length} episodes)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group cursor-pointer"
              onClick={() => onPlayEpisode(episode)}
            >
              <div className="text-sm text-gray-500 w-8 text-center">
                {index + 1}
              </div>
              
              <img 
                src={episode.image}
                alt={episode.title}
                className="w-12 h-12 rounded object-cover"
              />
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium line-clamp-1 group-hover:text-sheraa-primary transition-colors">
                  {episode.title}
                </h4>
                <p className="text-sm text-gray-500 line-clamp-1">{episode.guest}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">{episode.category}</Badge>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    {episode.duration}
                  </div>
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Play className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
