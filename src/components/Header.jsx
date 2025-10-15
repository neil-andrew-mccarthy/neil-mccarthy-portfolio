import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1a1c1b]/95 backdrop-blur-sm border-b border-[#3f4816]/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div 
            className="font-bold text-[#d9fb06] text-xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={() => scrollToSection('hero')}
          >
            NEIL MCCARTHY
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium"
            >
              ABOUT            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-link text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium"
            >
              SKILLS
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-link text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium"
            >
              PROJECTS
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="nav-link text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium"
            >
              EXPERIENCE
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium"
            >
              CONTACT
            </button>
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/neil-andrew-mccarthy/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
            >
              LinkedIn
              <ExternalLink size={16} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#3f4816]/50">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium text-left"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium text-left"
              >
                SKILLS
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium text-left"
              >
                PROJECTS
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium text-left"
              >
                EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#d9fb06] hover:text-[#d9fb06]/80 transition-colors duration-300 font-medium text-left"
              >
                CONTACT
              </button>
              <a
                href="https://www.linkedin.com/in/neil-andrew-mccarthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 justify-center w-full"
              >
                LinkedIn
                <ExternalLink size={16} />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

