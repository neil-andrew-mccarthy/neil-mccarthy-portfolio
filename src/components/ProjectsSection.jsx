import React, { useState } from 'react';
import { ExternalLink, Github, Code, Award, Filter } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'eCommerce', 'Enterprise Systems', 'Industrial Software'];

  const filteredProjects = activeFilter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-[#1a1c1b] relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-8 uppercase leading-tight">
              Featured
              <br />
              <span className="text-[#888680]">Projects</span>
            </h2>
            <p className="text-[#888680] text-xl max-w-3xl mx-auto">
              A showcase of enterprise-scale systems, eCommerce platforms, and innovative solutions 
              that have generated real business value and transformed operations.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-[#888680] mr-4">
              <Filter size={20} />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#d9fb06] text-[#1a1c1b]'
                    : 'bg-[#302f2c] text-[#888680] hover:bg-[#3f4816] hover:text-[#d9fb06] border border-[#3f4816]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-[#302f2c] rounded-lg border border-[#3f4816]/50 overflow-hidden hover:border-[#d9fb06]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-[#3f4816] text-[#d9fb06] rounded-full text-xs font-semibold uppercase">
                          {project.category}
                        </span>
                        <span className="text-[#888680] text-sm">{project.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#d9fb06] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#888680] font-medium">{project.company}</p>
                    </div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#1a1c1b] text-[#d9fb06] rounded-lg hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-[#888680] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#d9fb06] mb-3 flex items-center gap-2">
                      <Award size={18} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-[#888680] text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#d9fb06] mb-3 flex items-center gap-2">
                      <Code size={18} />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#1a1c1b] text-[#888680] rounded-full text-sm border border-[#3f4816]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4 border-t border-[#3f4816]/50">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#d9fb06] text-[#1a1c1b] rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Site
                      </a>
                    )}
                    {/* <button className="flex items-center gap-2 px-4 py-2 border border-[#d9fb06] text-[#d9fb06] rounded-full font-semibold hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300">
                      <Github size={16} />
                      Case Study
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-[#302f2c] p-8 rounded-lg border border-[#3f4816]/50">
              <h3 className="text-2xl font-bold text-[#d9fb06] mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-[#888680] mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and build innovative solutions. 
                Let's discuss how I can help transform your ideas into scalable, high-performance systems.
              </p>
              <a
                href="mailto:gsmccarthyn@gmail.com"
                className="inline-flex items-center gap-2 bg-[#d9fb06] text-[#1a1c1b] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 uppercase tracking-wide"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;