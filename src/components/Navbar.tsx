import React from 'react';
import { Home, Library, BarChart2, User, Music, Headphones, Heart, Clock, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="hidden md:flex flex-col w-64 bg-black p-6 h-screen sticky top-0">
      <div className="flex items-center mb-10">
        <Headphones size={32} className="text-[#1DB954] mr-2" />
        <h1 className="text-xl font-bold">Melodify</h1>
      </div>
      
      <div className="space-y-6 flex-1">
        <div>
          <h2 className="text-gray-400 uppercase text-xs font-bold tracking-wider mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-white hover:text-[#1DB954] transition-colors duration-300 py-2">
                <Home size={20} className="mr-4" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
                <Library size={20} className="mr-4" />
                Library
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
                <BarChart2 size={20} className="mr-4" />
                Charts
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
                <User size={20} className="mr-4" />
                Profile
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-gray-400 uppercase text-xs font-bold tracking-wider mb-4">Your Music</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
                <Heart size={20} className="mr-4" />
                Liked Songs
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
                <Music size={20} className="mr-4" />
                Playlists
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
                <Clock size={20} className="mr-4" />
                Recently Played
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-auto">
        <a href="#" className="flex items-center text-gray-400 hover:text-[#1DB954] transition-colors duration-300 py-2">
          <Settings size={20} className="mr-4" />
          Settings
        </a>
      </div>
      
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black md:hidden z-10 flex justify-around py-3 px-4 border-t border-gray-800">
        <a href="#" className="flex flex-col items-center text-[#1DB954]">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400">
          <Library size={20} />
          <span className="text-xs mt-1">Library</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400">
          <BarChart2 size={20} />
          <span className="text-xs mt-1">Charts</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400">
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;