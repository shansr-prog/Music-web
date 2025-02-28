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

interface NewReleasesSectionProps {
  setCurrentTrack: (track: Track) => void;
}

const NewReleasesSection: React.FC<NewReleasesSectionProps> = ({ setCurrentTrack }) => {
  const newReleases = [
    {
      id: '5',
      title: 'Flowers',
      artist: 'Miley Cyrus',
      album: 'Endless Summer Vacation',
      duration: '3:21',
      cover: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    },
    {
      id: '6',
      title: 'Kill Bill',
      artist: 'SZA',
      album: 'SOS',
      duration: '2:33',
      cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    },
    {
      id: '7',
      title: 'Anti-Hero',
      artist: 'Taylor Swift',
      album: 'Midnights',
      duration: '3:20',
      cover: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    },
    {
      id: '8',
      title: 'Unholy',
      artist: 'Sam Smith & Kim Petras',
      album: 'Gloria',
      duration: '2:36',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      isPlaying: false
    }
  ];

  const playTrack = (track: Track) => {
    setCurrentTrack({...track, isPlaying: true});
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">New Releases</h2>
        <a href="#" className="text-[#1DB954] hover:underline text-sm">See All</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {newReleases.map(track => (
          <div 
            key={track.id} 
            className="bg-[#181818] rounded-lg overflow-hidden hover:bg-[#282828] transition-all duration-300 p-4 group"
          >
            <div className="relative mb-4">
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
              <div className="absolute top-2 right-2 bg-[#1DB954] text-xs font-bold px-2 py-1 rounded-full">
                NEW
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

export default NewReleasesSection;