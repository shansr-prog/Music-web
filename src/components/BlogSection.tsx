import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const articles = [
    {
      id: '1',
      title: 'The Evolution of Electronic Music in the Last Decade',
      excerpt: 'From dubstep to future bass, electronic music has transformed dramatically...',
      date: 'May 15, 2025',
      image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Trends'
    },
    {
      id: '2',
      title: 'Interview: Behind the Scenes with Grammy Winner Olivia Rodrigo',
      excerpt: 'We sat down with the young star to discuss her creative process...',
      date: 'May 10, 2025',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Interviews'
    },
    {
      id: '3',
      title: 'How Streaming Changed the Music Industry Forever',
      excerpt: 'The rise of streaming platforms has revolutionized how we consume music...',
      date: 'May 5, 2025',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Industry'
    }
  ];

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">From the Blog</h2>
        <a href="#" className="text-[#1DB954] hover:underline text-sm flex items-center">
          View All Articles
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map(article => (
          <article 
            key={article.id} 
            className="bg-[#181818] rounded-lg overflow-hidden hover:bg-[#282828] transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 bg-[#1DB954] text-xs font-bold px-2 py-1 rounded-full">
                {article.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-gray-400 text-sm mb-2">
                <Calendar size={14} className="mr-1" />
                {article.date}
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-[#1DB954] transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {article.excerpt}
              </p>
              <a 
                href="#" 
                className="inline-block text-[#1DB954] text-sm font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;