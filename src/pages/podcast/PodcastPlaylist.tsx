
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Plus, X, Clock, Download } from 'lucide-react';

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

export const PodcastPlaylist: React.FC<PodcastPlaylistProps> = ({
  episodes,
  onPlayEpisode
}) => {
  const [playlist, setPlaylist] = useState<Episode[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addToPlaylist = (episode: Episode) => {
    if (!playlist.find(e => e.id === episode.id)) {
      setPlaylist([...playlist, episode]);
      setIsVisible(true);
    }
  };

  const removeFromPlaylist = (episodeId: number) => {
    setPlaylist(playlist.filter(e => e.id !== episodeId));
  };

  const playNext = () => {
    if (playlist.length > 0) {
      onPlayEpisode(playlist[0]);
      removeFromPlaylist(playlist[0].id);
    }
  };

  const getTotalDuration = () => {
    return playlist.reduce((total, episode) => {
      const minutes = parseInt(episode.duration.split(':')[0]);
      return total + minutes;
    }, 0);
  };

  if (!isVisible && playlist.length === 0) return null;

  return (
    <Card className="fixed top-20 right-4 w-80 max-h-96 overflow-hidden z-40 shadow-xl">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">My Playlist</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        {playlist.length > 0 && (
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{playlist.length} episodes</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {getTotalDuration()} min
            </span>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="p-0">
        {playlist.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <p className="text-sm">Your playlist is empty</p>
            <p className="text-xs mt-1">Add episodes to start building your queue</p>
          </div>
        ) : (
          <div className="max-h-64 overflow-y-auto">
            {playlist.map((episode, index) => (
              <div
                key={episode.id}
                className="p-3 border-b last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="text-xs text-gray-400 w-4">
                    {index + 1}
                  </div>
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate">
                      {episode.title}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {episode.guest}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onPlayEpisode(episode)}
                    >
                      <Play className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromPlaylist(episode.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {playlist.length > 0 && (
          <div className="p-3 border-t bg-gray-50 dark:bg-gray-800">
            <Button
              onClick={playNext}
              className="w-full bg-sheraa-primary hover:bg-sheraa-primary/90"
              size="sm"
            >
              <Play className="h-4 w-4 mr-2" />
              Play Next
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
