import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Send } from 'lucide-react';
import { personalInfo, interests } from '../data/portfolioData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#1a1c1b] relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Let's Connect
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-8 uppercase leading-tight">
              Get In
              <br />
              <span className="text-[#888680]">Touch</span>
            </h2>
            <p className="text-[#888680] text-xl max-w-3xl mx-auto">
              Ready to discuss your next project? I'm always excited to explore new opportunities 
              and help transform innovative ideas into scalable solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-[#d9fb06] mb-8">
                Let's Start a Conversation
              </h3>
              
              <div className="space-y-6 mb-12">
                {/* Email */}
                <div className="flex items-center gap-4 p-6 bg-[#302f2c] rounded-lg border border-[#3f4816]/50 hover:border-[#d9fb06]/50 transition-all duration-300">
                  <div className="p-3 bg-[#3f4816] rounded-lg">
                    <Mail className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  <div>
                    <div className="text-[#d9fb06] font-semibold mb-1">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-6 bg-[#302f2c] rounded-lg border border-[#3f4816]/50 hover:border-[#d9fb06]/50 transition-all duration-300">
                  <div className="p-3 bg-[#3f4816] rounded-lg">
                    <Phone className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  <div>
                    <div className="text-[#d9fb06] font-semibold mb-1">Phone</div>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-[#888680] hover:text-[#d9fb06] transition-colors duration-300"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-6 bg-[#302f2c] rounded-lg border border-[#3f4816]/50">
                  <div className="p-3 bg-[#3f4816] rounded-lg">
                    <MapPin className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  <div>
                    <div className="text-[#d9fb06] font-semibold mb-1">Location</div>
                    <span className="text-[#888680]">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full flex items-center justify-center gap-3 bg-[#d9fb06] text-[#1a1c1b] py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
                >
                  <Send size={20} />
                  Send Message
                </a>
                
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 border-2 border-[#d9fb06] text-[#d9fb06] py-4 rounded-full font-bold text-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300 uppercase tracking-wide"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </a>

                <button className="w-full flex items-center justify-center gap-3 bg-[#302f2c] text-[#888680] py-4 rounded-full font-bold text-lg hover:bg-[#3f4816] hover:text-[#d9fb06] transition-all duration-300 uppercase tracking-wide border border-[#3f4816]/50">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <div className="bg-[#302f2c] p-8 rounded-lg border border-[#3f4816]/50 mb-8">
                <h4 className="text-xl font-bold text-[#d9fb06] mb-6">Why Work With Me?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#888680]">
                      <strong className="text-[#d9fb06]">10+ years</strong> of enterprise software development experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#888680]">
                      <strong className="text-[#d9fb06]">Proven track record</strong> of delivering scalable, high-performance systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#888680]">
                      <strong className="text-[#d9fb06]">Leadership experience</strong> managing teams up to 12 developers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#888680]">
                      <strong className="text-[#d9fb06]">Business focus</strong> with £100K+ revenue generation experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-[#888680]">
                      <strong className="text-[#d9fb06]">Modern expertise</strong> in AI integration and cloud architecture
                    </span>
                  </li>
                </ul>
              </div>

              {/* Personal Interests */}
              <div className="bg-[#3f4816] p-8 rounded-lg">
                <h4 className="text-xl font-bold text-[#d9fb06] mb-6">Beyond Development</h4>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div 
                      key={index}
                      className="text-[#d9fb06]/80 text-sm bg-[#1a1c1b]/30 p-3 rounded-lg"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
                <p className="text-[#d9fb06]/70 text-sm mt-6">
                  I believe in maintaining a healthy work-life balance, which helps me bring 
                  fresh perspectives and sustained energy to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#302f2c] to-[#3f4816] p-12 rounded-lg">
            <h3 className="text-3xl font-bold text-[#d9fb06] mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-[#d9fb06]/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need to modernize legacy systems, build scalable cloud solutions, 
              or lead a development team, I'm here to help turn your vision into reality.
            </p>
            <a
              href={`mailto:${personalInfo.email}?subject=Project Discussion&body=Hi Neil,%0D%0A%0D%0AI'm interested in discussing a potential project opportunity...`}
              className="inline-flex items-center gap-3 bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
            >
              <Send size={20} />
              Start Project Discussion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;