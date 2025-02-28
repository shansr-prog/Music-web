import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, List, Heart } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  isPlaying: boolean;
}

interface MusicPlayerProps {
  currentTrack: Track;
  togglePlay: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentTrack, togglePlay }) => {
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  // Convert duration string to seconds for progress calculation
  const durationInSeconds = () => {
    const [minutes, seconds] = currentTrack.duration.split(':').map(Number);
    return minutes * 60 + seconds;
  };
  
  const progressPercentage = (currentTime / durationInSeconds()) * 100;
  
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111111] border-t border-gray-800 py-3 px-4 md:py-4 md:px-6 z-20">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Track Info */}
        <div className="flex items-center w-1/4 min-w-[120px]">
          <img 
            src={currentTrack.cover} 
            alt={`${currentTrack.title} album cover`} 
            className="h-12 w-12 rounded-md object-cover mr-3 hidden sm:block"
          />
          <div className="truncate">
            <h4 className="text-sm font-medium truncate">{currentTrack.title}</h4>
            <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
          </div>
          <button 
            className={`ml-3 text-gray-400 hover:text-[#1DB954] transition-colors duration-300 ${isLiked ? 'text-[#1DB954]' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart size={18} fill={isLiked ? "#1DB954" : "none"} />
          </button>
        </div>
        
        {/* Player Controls */}
        <div className="flex flex-col items-center justify-center flex-1 max-w-xl">
          <div className="flex items-center space-x-4 mb-1">
            <button 
              className={`text-gray-400 hover:text-white transition-colors duration-300 ${isShuffle ? 'text-[#1DB954]' : ''}`}
              onClick={() => setIsShuffle(!isShuffle)}
            >
              <Shuffle size={18} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              <SkipBack size={20} />
            </button>
            <button 
              className="bg-white text-black rounded-full p-2 hover:bg-[#1DB954] hover:text-white transition-all duration-300"
              onClick={togglePlay}
            >
              {currentTrack.isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              <SkipForward size={20} />
            </button>
            <button 
              className={`text-gray-400 hover:text-white transition-colors duration-300 ${isRepeat ? 'text-[#1DB954]' : ''}`}
              onClick={() => setIsRepeat(!isRepeat)}
            >
              <Repeat size={18} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full flex items-center space-x-2">
            <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
            <div className="relative flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-[#1DB954] rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <input 
                type="range" 
                min="0" 
                max={durationInSeconds()} 
                value={currentTime}
                onChange={(e) => setCurrentTime(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-xs text-gray-400 w-10">{currentTrack.duration}</span>
          </div>
        </div>
        
        {/* Volume & Queue */}
        <div className="flex items-center justify-end w-1/4 min-w-[120px] space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Volume2 size={18} className="text-gray-400" />
            <div className="relative w-20 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-gray-400 rounded-full"
                style={{ width: `${volume}%` }}
              ></div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors duration-300">
            <List size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;