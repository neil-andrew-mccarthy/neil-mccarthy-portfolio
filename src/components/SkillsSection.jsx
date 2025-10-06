import React, { useState } from 'react';
import { Code, Cloud, Database, Shield, TestTube, Brain } from 'lucide-react';
import { coreSkills } from '../data/portfolioData';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Languages & Frameworks');

  const skillCategories = [
    {
      name: 'Languages & Frameworks',
      icon: <Code className="w-6 h-6" />,
      color: '#d9fb06',
      skills: coreSkills['Languages & Frameworks']
    },
    {
      name: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: '#d9fb06',
      skills: coreSkills['Cloud & DevOps']
    },
    {
      name: 'Databases & Data',
      icon: <Database className="w-6 h-6" />,
      color: '#d9fb06',
      skills: coreSkills['Databases & Data']
    },
    {
      name: 'AI & Modern Tech',
      icon: <Brain className="w-6 h-6" />,
      color: '#d9fb06',
      skills: coreSkills['AI & Modern Tech']
    },
    {
      name: 'Security & Authentication',
      icon: <Shield className="w-6 h-6" />,
      color: '#d9fb06',
      skills: coreSkills['Security & Authentication']
    },
    {
      name: 'Testing & Quality',
      icon: <TestTube className="w-6 h-6" />,
      color: '#d9fb06',
      skills: coreSkills['Testing & Quality']
    }
  ];

  const getActiveCategory = () => {
    return skillCategories.find(cat => cat.name === activeCategory);
  };

  return (
    <section id="skills" className="py-20 bg-[#302f2c] relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Technical Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-8 uppercase leading-tight">
              Skills &
              <br />
              <span className="text-[#888680]">Technologies</span>
            </h2>
            <p className="text-[#888680] text-xl max-w-3xl mx-auto">
              A comprehensive toolkit built over 10+ years of enterprise software development, 
              covering full-stack development, cloud architecture, and modern AI integration.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Category Navigation */}
            <div>
              <h3 className="text-2xl font-bold text-[#d9fb06] mb-8">Expertise Areas</h3>
              <div className="space-y-4">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                      activeCategory === category.name
                        ? 'bg-[#3f4816] text-[#d9fb06] border border-[#d9fb06]/30'
                        : 'bg-[#1a1c1b] text-[#888680] border border-[#3f4816]/50 hover:bg-[#3f4816]/30 hover:text-[#d9fb06]'
                    }`}
                  >
                    <div className={`${activeCategory === category.name ? 'text-[#d9fb06]' : 'text-[#888680]'}`}>
                      {category.icon}
                    </div>
                    <span className="font-semibold">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Skills Display */}
            <div className="lg:col-span-2">
              <div className="bg-[#1a1c1b] p-8 rounded-lg border border-[#3f4816]/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-[#d9fb06]">
                    {getActiveCategory()?.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#d9fb06]">
                    {activeCategory}
                  </h3>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getActiveCategory()?.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-[#302f2c] px-4 py-3 rounded-lg border border-[#3f4816]/30 hover:border-[#d9fb06]/50 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-[#888680] font-medium">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Proficiency Level */}
                <div className="mt-8 pt-6 border-t border-[#3f4816]/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#888680] font-medium">Proficiency Level</span>
                    <span className="text-[#d9fb06] font-bold">Expert</span>
                  </div>
                  <div className="w-full bg-[#302f2c] rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#d9fb06] to-[#3f4816] h-3 rounded-full transition-all duration-1000"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                  <p className="text-[#888680] text-sm mt-3">
                    10+ years of hands-on experience with enterprise-scale implementations
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-[#3f4816] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#d9fb06] mb-3">Continuous Learning</h4>
                  <p className="text-[#d9fb06]/80 text-sm">
                    Staying current with latest technologies through Udemy, Frontend Masters, 
                    and active engagement with AI/ML trends and modern web development practices.
                  </p>
                </div>
                <div className="bg-[#3f4816] p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-[#d9fb06] mb-3">Industry Experience</h4>
                  <p className="text-[#d9fb06]/80 text-sm">
                    Applied these skills across diverse sectors: eCommerce, Public Sector, 
                    Insurance, Manufacturing, Legal, and Digital Marketing industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;