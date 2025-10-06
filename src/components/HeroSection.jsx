import React from 'react';
import { ArrowDown, Code, Database, Cloud } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#1a1c1b] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#d9fb06] rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#3f4816] rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 border border-[#d9fb06] -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#3f4816] rotate-45"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Senior Full-Stack Developer
              </span>
            </div>
            
            <h1 className="font-black text-[#d9fb06] mb-6 leading-tight tracking-tight" 
                style={{
                  fontSize: 'clamp(3rem, 8vw, 8rem)',
                  lineHeight: '0.85',
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", Arial, sans-serif',
                  fontWeight: 900
                }}>
              {personalInfo.name.split(' ').map((word, index) => (
                <span key={index} className="block">
                  {word}
                </span>
              ))}
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-[#888680] text-xl md:text-2xl leading-relaxed font-medium">
                {personalInfo.summary}
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-[#d9fb06] mb-2">10+</div>
                <div className="text-[#888680] font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#d9fb06] mb-2">50+</div>
                <div className="text-[#888680] font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-[#d9fb06] mb-2">£100K+</div>
                <div className="text-[#888680] font-medium">Revenue Generated</div>
              </div>
            </div>

            {/* Tech Icons */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3 bg-[#302f2c] px-6 py-3 rounded-full">
                <Code className="text-[#d9fb06]" size={24} />
                <span className="text-[#d9fb06] font-semibold">.NET Core</span>
              </div>
              <div className="flex items-center gap-3 bg-[#302f2c] px-6 py-3 rounded-full">
                <Database className="text-[#d9fb06]" size={24} />
                <span className="text-[#d9fb06] font-semibold">Azure</span>
              </div>
              <div className="flex items-center gap-3 bg-[#302f2c] px-6 py-3 rounded-full">
                <Cloud className="text-[#d9fb06]" size={24} />
                <span className="text-[#d9fb06] font-semibold">React</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={scrollToAbout}
                className="bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 uppercase tracking-wide shadow-lg"
              >
                Explore My Work
              </button>
              <a
                href="mailto:gsmccarthyn@gmail.com"
                className="border-2 border-[#d9fb06] text-[#d9fb06] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 uppercase tracking-wide"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button 
              onClick={scrollToAbout}
              className="animate-bounce text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1c1b] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
