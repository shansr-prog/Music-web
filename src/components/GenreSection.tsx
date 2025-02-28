import React from 'react';
import { Music } from 'lucide-react';

const GenreSection = () => {
  const genres = [
    {
      id: '1',
      name: 'Pop',
      color: 'from-pink-500 to-purple-500',
      icon: '🎵'
    },
    {
      id: '2',
      name: 'Hip Hop',
      color: 'from-yellow-500 to-orange-500',
      icon: '🎤'
    },
    {
      id: '3',
      name: 'Rock',
      color: 'from-red-500 to-red-800',
      icon: '🎸'
    },
    {
      id: '4',
      name: 'Electronic',
      color: 'from-blue-400 to-indigo-600',
      icon: '🎧'
    },
    {
      id: '5',
      name: 'R&B',
      color: 'from-purple-400 to-indigo-500',
      icon: '🎹'
    },
    {
      id: '6',
      name: 'Jazz',
      color: 'from-amber-500 to-yellow-300',
      icon: '🎷'
    },
    {
      id: '7',
      name: 'Classical',
      color: 'from-emerald-500 to-teal-700',
      icon: '🎻'
    },
    {
      id: '8',
      name: 'Country',
      color: 'from-amber-700 to-yellow-600',
      icon: '🤠'
    }
  ];

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Browse by Genre</h2>
        <a href="#" className="text-[#1DB954] hover:underline text-sm">See All</a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {genres.map(genre => (
          <a 
            key={genre.id} 
            href="#"
            className={`bg-gradient-to-br ${genre.color} rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{genre.name}</h3>
              <span className="text-2xl">{genre.icon}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GenreSection;