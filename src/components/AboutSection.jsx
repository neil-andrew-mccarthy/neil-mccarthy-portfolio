import React from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';
import { personalInfo, achievements } from '../data/portfolioData';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-[#d9fb06]" />,
      title: "Team Leadership",
      description: "Led teams of up to 12 developers using SCRUM methodology across diverse industries and complex multi-system projects."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#d9fb06]" />,
      title: "Business Impact",
      description: "Generated £100K+ revenue with enterprise platforms and achieved 4-figure monthly sales with automated systems."
    },
    {
      icon: <Target className="w-8 h-8 text-[#d9fb06]" />,
      title: "System Modernization",
      description: "Expert in modernizing legacy systems, migrating to Azure cloud, and reducing deployment times by 50%."
    },
    {
      icon: <Award className="w-8 h-8 text-[#d9fb06]" />,
      title: "Proven Excellence",
      description: "2nd Dan Black Belt in Judo, former British Schools World Championship competitor, and continuous learner."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#1a1c1b] relative">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#3f4816] text-[#d9fb06] rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              About Me
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-[#d9fb06] mb-8 uppercase leading-tight">
              Senior Developer
              <br />
              <span className="text-[#888680]">& Architect</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - About Content */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#d9fb06] mb-4">
                  Transforming Ideas Into Scalable Solutions
                </h3>
                <p className="text-[#888680] text-lg leading-relaxed mb-6">
                  With over 10 years of enterprise-scale software development experience, I specialise in 
                  building greenfield projects, modernising legacy systems, building scalable cloud architectures, 
                  and leading high-performing development teams to deliver exceptional results.
                </p>
                <p className="text-[#888680] text-lg leading-relaxed mb-6">
                  My expertise spans the complete software development lifecycle, from architecture design 
                  to deployment automation. I've successfully led projects across diverse industries including 
                  eCommerce, public sector, insurance, and manufacturing.
                </p>
                <p className="text-[#888680] text-lg leading-relaxed">
                  Beyond technical skills, I bring strong business acumen and stakeholder management 
                  capabilities, ensuring technical solutions align with business objectives and deliver 
                  measurable value.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="bg-[#302f2c] p-8 rounded-lg border border-[#3f4816]/50">
                <h4 className="text-xl font-bold text-[#d9fb06] mb-6">Key Achievements</h4>
                <ul className="space-y-3">
                  {achievements.slice(0, 6).map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#d9fb06] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#888680]">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div>
              <div className="grid gap-8">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/50 hover:bg-[#3f4816]/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-[#1a1c1b] rounded-lg">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#d9fb06] mb-3">
                          {highlight.title}
                        </h4>
                        <p className="text-[#888680] leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Personal Touch */}
              <div className="mt-8 bg-[#3f4816] p-6 rounded-lg">
                <h4 className="text-xl font-bold text-[#d9fb06] mb-4">Beyond Code</h4>
                <p className="text-[#d9fb06]/80 leading-relaxed">
                  When I'm not crafting scalable software solutions, you'll find me practicing martial arts 
                  (2nd Dan Black Belt in Judo), exploring the outdoors through hiking and diving, or 
                  staying ahead of the curve with the latest in AI and web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/50">
              <div className="text-3xl font-black text-[#d9fb06] mb-2">10+</div>
              <div className="text-[#888680] font-medium">Industries Served</div>
            </div>
            <div className="bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/50">
              <div className="text-3xl font-black text-[#d9fb06] mb-2">12</div>
              <div className="text-[#888680] font-medium">Max Team Size Led</div>
            </div>
            <div className="bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/50">
              <div className="text-3xl font-black text-[#d9fb06] mb-2">50%</div>
              <div className="text-[#888680] font-medium">Deployment Time Reduction</div>
            </div>
            <div className="bg-[#302f2c] p-6 rounded-lg border border-[#3f4816]/50">
              <div className="text-3xl font-black text-[#d9fb06] mb-2">100+</div>
              <div className="text-[#888680] font-medium">High-Availability Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
