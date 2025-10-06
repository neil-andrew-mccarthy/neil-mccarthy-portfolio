import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#302f2c] border-t border-[#3f4816]/50">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Section */}
            <div>
              <button 
                onClick={scrollToTop}
                className="text-2xl font-black text-[#d9fb06] mb-4 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                NEIL MCCARTHY
              </button>
              <p className="text-[#888680] mb-6 leading-relaxed">
                Senior Full-Stack .NET Core Developer specializing in enterprise systems, 
                cloud architecture, and team leadership. Transforming ideas into scalable solutions.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-[#1a1c1b] text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] rounded-lg transition-all duration-300"
                  title="Send Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1a1c1b] text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] rounded-lg transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#1a1c1b] text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] rounded-lg transition-all duration-300"
                  title="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-[#d9fb06] mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 cursor-pointer"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 cursor-pointer"
                  >
                    Technical Skills
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 cursor-pointer"
                  >
                    Featured Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 cursor-pointer"
                  >
                    Work Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300 cursor-pointer"
                  >
                    Get In Touch
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-[#d9fb06] mb-6">Contact Information</h4>
              <ul className="space-y-4">
                <li>
                  <div className="text-[#888680] mb-1">Email</div>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-[#d9fb06] hover:opacity-80 transition-opacity duration-300 break-all"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <div className="text-[#888680] mb-1">Phone</div>
                  <a 
                    href={`tel:${personalInfo.phone}`}
                    className="text-[#d9fb06] hover:opacity-80 transition-opacity duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <div className="text-[#888680] mb-1">Location</div>
                  <span className="text-[#d9fb06]">{personalInfo.location}</span>
                </li>
              </ul>

              {/* Availability Status */}
              <div className="mt-6 p-4 bg-[#3f4816] rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[#d9fb06] font-semibold">Available for Projects</span>
                </div>
                <p className="text-[#d9fb06]/80 text-sm">
                  Currently accepting new opportunities for senior developer and architect roles.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#3f4816]/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[#888680] text-sm">
                <span>© {currentYear} Neil Andrew McCarthy. Made with</span>
                <Heart size={16} className="text-[#d9fb06] fill-current" />
                <span>and lots of coffee.</span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => window.open('#', '_blank')}
                  className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={scrollToTop}
                  className="text-[#d9fb06] hover:opacity-80 transition-opacity duration-300 font-semibold"
                >
                  Back to Top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;