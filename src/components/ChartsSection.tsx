import React, { useState } from 'react';
import { BarChart2, Play, Heart, MoreHorizontal } from 'lucide-react';

const ChartsSection = () => {
  const [activeFilter, setActiveFilter] = useState('weekly');
  
  const chartTracks = [
    {
      id: '1',
      rank: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      streams: '2.4M',
      cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      change: 'up'
    },
    {
      id: '2',
      rank: 2,
      title: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      streams: '2.1M',
      cover: 'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      change: 'same'
    },
    {
      id: '3',
      rank: 3,
      title: 'Bad Habit',
      artist: 'Steve Lacy',
      album: 'Gemini Rights',
      streams: '1.9M',
      cover: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      change: 'up'
    },
    {
      id: '4',
      rank: 4,
      title: 'Heat Waves',
      artist: 'Glass Animals',
      album: 'Dreamland',
      streams: '1.8M',
      cover: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      change: 'down'
    },
    {
      id: '5',
      rank: 5,
      title: 'Flowers',
      artist: 'Miley Cyrus',
      album: 'Endless Summer Vacation',
      streams: '1.7M',
      cover: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      change: 'up'
    }
  ];

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return <span className="text-green-500">↑</span>;
      case 'down':
        return <span className="text-red-500">↓</span>;
      default:
        return <span className="text-gray-500">-</span>;
    }
  };

  return (
    <section className="mt-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <BarChart2 size={24} className="text-[#1DB954] mr-2" />
          <h2 className="text-2xl font-bold">Music Charts</h2>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-1 rounded-full text-sm ${
              activeFilter === 'weekly' 
                ? 'bg-[#1DB954] text-white' 
                : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#1DB954]/20'
            } transition-all duration-300`}
            onClick={() => setActiveFilter('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`px-4 py-1 rounded-full text-sm ${
              activeFilter === 'monthly' 
                ? 'bg-[#1DB954] text-white' 
                : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#1DB954]/20'
            } transition-all duration-300`}
            onClick={() => setActiveFilter('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-1 rounded-full text-sm ${
              activeFilter === 'yearly' 
                ? 'bg-[#1DB954] text-white' 
                : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#1DB954]/20'
            } transition-all duration-300`}
            onClick={() => setActiveFilter('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
      
      <div className="bg-[#181818] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-12">#</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Track</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">Album</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">Streams</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-12">Trend</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider w-20">Actions</th>
              </tr>
            </thead>
            <tbody>
              {chartTracks.map(track => (
                <tr 
                  key={track.id} 
                  className="border-b border-gray-800 hover:bg-[#282828] transition-colors duration-300"
                >
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    {track.rank}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={track.cover} 
                        alt={`${track.title} album cover`} 
                        className="h-10 w-10 rounded object-cover mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium">{track.title}</div>
                        <div className="text-sm text-gray-400">{track.artist}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                    {track.album}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                    {track.streams}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                    {getChangeIcon(track.change)}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
                        <Play size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
                        <Heart size={16} />
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors duration-300">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;