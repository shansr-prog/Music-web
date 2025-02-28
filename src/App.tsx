import React, { useState } from 'react';
import { 
  Home, 
  Library, 
  BarChart2, 
  User, 
  Search, 
  Mic, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Repeat, 
  Shuffle, 
  Volume2, 
  List, 
  Heart, 
  Plus, 
  Clock, 
  Calendar, 
  Music, 
  Headphones, 
  Mail
} from 'lucide-react';
import MusicPlayer from './components/MusicPlayer';
import Navbar from './components/Navbar';
import TrendingSection from './components/TrendingSection';
import NewReleasesSection from './components/NewReleasesSection';
import GenreSection from './components/GenreSection';
import SearchBar from './components/SearchBar';
import BlogSection from './components/BlogSection';
import ChartsSection from './components/ChartsSection';
import NewsletterModal from './components/NewsletterModal';

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
    cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    isPlaying: false
  });

  const togglePlay = () => {
    setCurrentTrack({
      ...currentTrack,
      isPlaying: !currentTrack.isPlaying
    });
  };

  const toggleNewsletter = () => {
    setShowNewsletter(!showNewsletter);
  };

  return (
    <div className="min-h-screen bg-[#191414] text-white flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 pb-24 md:pb-28">
          {/* Search Bar */}
          <SearchBar />
          
          {/* Content Sections */}
          <div className="mt-8 space-y-10">
            <TrendingSection setCurrentTrack={setCurrentTrack} />
            <NewReleasesSection setCurrentTrack={setCurrentTrack} />
            <GenreSection />
            <BlogSection />
            <ChartsSection />
            
            {/* Newsletter CTA */}
            <div className="bg-gradient-to-r from-[#1DB954]/20 to-[#191414] p-6 rounded-xl mt-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">Stay Updated</h3>
                  <p className="text-gray-300">Subscribe to our newsletter for weekly music recommendations</p>
                </div>
                <button 
                  onClick={toggleNewsletter}
                  className="bg-[#1DB954] hover:bg-[#1DB954]/80 text-white px-6 py-2 rounded-full flex items-center transition-all duration-300"
                >
                  <Mail size={18} className="mr-2" />
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Music Player */}
      <MusicPlayer currentTrack={currentTrack} togglePlay={togglePlay} />
      
      {/* Newsletter Modal */}
      {showNewsletter && <NewsletterModal onClose={toggleNewsletter} />}
    </div>
  );
}

export default App;