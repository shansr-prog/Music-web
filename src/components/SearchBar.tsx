import React from 'react';
import { Search, Mic } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for songs, artists, or albums..."
          className="w-full bg-[#2A2A2A] text-white py-3 pl-12 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1DB954] transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#1DB954] transition-colors duration-300">
          <Mic size={20} />
        </button>
      </div>
      
      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
        <button className="bg-[#2A2A2A] hover:bg-[#1DB954]/20 text-white px-4 py-1 rounded-full text-sm transition-all duration-300">
          Songs
        </button>
        <button className="bg-[#2A2A2A] hover:bg-[#1DB954]/20 text-white px-4 py-1 rounded-full text-sm transition-all duration-300">
          Artists
        </button>
        <button className="bg-[#2A2A2A] hover:bg-[#1DB954]/20 text-white px-4 py-1 rounded-full text-sm transition-all duration-300">
          Albums
        </button>
        <button className="bg-[#2A2A2A] hover:bg-[#1DB954]/20 text-white px-4 py-1 rounded-full text-sm transition-all duration-300">
          Playlists
        </button>
        <button className="bg-[#2A2A2A] hover:bg-[#1DB954]/20 text-white px-4 py-1 rounded-full text-sm transition-all duration-300">
          Podcasts
        </button>
      </div>
    </div>
  );
};

export default SearchBar;