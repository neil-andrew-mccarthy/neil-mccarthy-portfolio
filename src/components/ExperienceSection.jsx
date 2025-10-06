import React from 'react';
import { Calendar, MapPin, TrendingUp, Users } from 'lucide-react';
import { workExperience, education } from '../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#302f2c] relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Career Journey
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-8 uppercase leading-tight">
              Work
              <br />
              <span className="text-[#888680]">Experience</span>
            </h2>
            <p className="text-[#888680] text-xl max-w-3xl mx-auto">
              A decade-long journey through diverse industries, building enterprise systems 
              and leading development teams to deliver exceptional results.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#3f4816] transform md:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#d9fb06] rounded-full transform -translate-x-2 md:-translate-x-2 border-4 border-[#302f2c] z-10"></div>

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816]/50 hover:border-[#d9fb06]/50 transition-all duration-300">
                      
                      {/* Job Header */}
                      <div className="mb-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold flex items-center gap-1">
                            <Calendar size={14} />
                            {job.period}
                          </span>
                          <span className="text-[#888680] text-sm flex items-center gap-1">
                            <MapPin size={14} />
                            {job.company}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#d9fb06] mb-2">
                          {job.position}
                        </h3>
                        <p className="text-[#888680] leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-[#d9fb06] mb-4 flex items-center gap-2">
                          <TrendingUp size={18} />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-[#888680]">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20 pt-16 border-t border-[#3f4816]/50">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Education */}
              <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816]/50">
                <h3 className="text-2xl font-bold text-[#d9fb06] mb-6 flex items-center gap-3">
                  <div className="p-2 bg-[#3f4816] rounded-lg">
                    <Users className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  Education
                </h3>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-[#d9fb06] mb-2">
                    {education.degree}
                  </h4>
                  <p className="text-[#888680] font-medium mb-4">
                    {education.institution}
                  </p>
                  <p className="text-[#888680] text-sm">
                    Specialized in real-time systems, providing a strong foundation in 
                    performance-critical application development and system architecture.
                  </p>
                </div>
              </div>

              {/* Continuous Learning */}
              <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816]/50">
                <h3 className="text-2xl font-bold text-[#d9fb06] mb-6 flex items-center gap-3">
                  <div className="p-2 bg-[#3f4816] rounded-lg">
                    <TrendingUp className="w-6 h-6 text-[#d9fb06]" />
                  </div>
                  Continuous Learning
                </h3>
                
                <ul className="space-y-4">
                  {education.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#888680]">{cert}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-[#3f4816]/50">
                  <p className="text-[#888680] text-sm">
                    Staying current with rapidly evolving technology landscape through 
                    continuous education and hands-on exploration of emerging tools and frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="mt-16 bg-[#3f4816] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#d9fb06] mb-6 text-center">Career Highlights</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-[#d9fb06] mb-2">6</div>
                <div className="text-[#d9fb06]/80 font-medium">Different Industries</div>
                <div className="text-[#d9fb06]/60 text-sm mt-1">Diverse Sector Experience</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#d9fb06] mb-2">£110K+</div>
                <div className="text-[#d9fb06]/80 font-medium">Revenue Generated</div>
                <div className="text-[#d9fb06]/60 text-sm mt-1">Direct Business Impact</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#d9fb06] mb-2">12</div>
                <div className="text-[#d9fb06]/80 font-medium">Max Team Size</div>
                <div className="text-[#d9fb06]/60 text-sm mt-1">Leadership Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;