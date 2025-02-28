import React from 'react';
import { Play, Heart, MoreHorizontal } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  isPlaying: boolean;
}

interface TrendingSectionProps {
  setCurrentTrack: (track: Track) => void;
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ setCurrentTrack }) => {
  const trendingTracks = [
    {
      id: '1',
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    },
    {
      id: '2',
      title: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration: '2:47',
      cover: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    },
    {
      id: '3',
      title: 'Bad Habit',
      artist: 'Steve Lacy',
      album: 'Gemini Rights',
      duration: '3:52',
      cover: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    },
    {
      id: '4',
      title: 'Heat Waves',
      artist: 'Glass Animals',
      album: 'Dreamland',
      duration: '3:59',
      cover: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    }
  ];

  const playTrack = (track: Track) => {
    setCurrentTrack({...track, isPlaying: true});
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Trending Now</h2>
        <a href="#" className="text-[#1DB954] hover:underline text-sm">See All</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingTracks.map(track => (
          <div 
            key={track.id} 
            className="bg-[#181818] rounded-lg overflow-hidden hover:bg-[#282828] transition-all duration-300 p-4"
          >
            <div className="relative group mb-4">
              <img 
                src={track.cover} 
                alt={`${track.title} album cover`} 
                className="w-full aspect-square object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => playTrack(track)}
                  className="bg-[#1DB954] text-white rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Play size={24} fill="white" />
                </button>
              </div>
            </div>
            <h3 className="font-medium truncate">{track.title}</h3>
            <p className="text-gray-400 text-sm truncate">{track.artist}</p>
            
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-400">{track.duration}</span>
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
                  <Heart size={16} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;