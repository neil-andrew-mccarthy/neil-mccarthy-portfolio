// Portfolio data for Neil McCarthy

export const personalInfo = {
  name: "Neil Andrew McCarthy",
  title: "Senior Full-Stack .NET Core Developer",
  email: "gsmccarthyn@gmail.com",
  phone: "+44 7483 293050",
  linkedin: "https://www.linkedin.com/in/neil-andrew-mccarthy/",
  location: "United Kingdom",
  summary: "Senior C# ASP.NET Core Developer with 10+ years in enterprise-scale systems. Proven record of modernising legacy systems, migrating to Azure cloud, and delivering high-availability apps used by 100+ users. Key strengths: scalable architecture, CI/CD automation (reduced deployment time 50%), and mentoring teams up to 10 developers."
};

export const coreSkills = {
  "Languages & Frameworks": [
    "C#", ".NET 8", ".NET 6", ".NET Core", "ASP.NET Core", "ASP.NET Core MVC", 
    "React", "JavaScript", "TypeScript", "jQuery", "HTML5", "CSS3"
  ],
  "Cloud & DevOps": [
    "Microsoft Azure", "Azure DevOps", "Docker", "Kubernetes", 
    "CI/CD Pipelines", "Git", "GitHub"
  ],
  "Databases & Data": [
    "T-SQL", "MySQL", "Azure SQL Database", "Entity Framework", 
    "LINQ", "JSON", "XML"
  ],
  "AI & Modern Tech": [
    "Prompt Engineering", "Generative AI", "LLM Integrations", 
    "AI Enhanced Programming", "GitHub Copilot", "Custom GPTs"
  ],
  "Security & Authentication": [
    "JWT", "OAuth2", "OpenID Connect", "Identity Server", 
    "OWASP Top 10", "API Hardening", "Encryption"
  ],
  "Testing & Quality": [
    "xUnit", "NUnit", "Moq", "Selenium", "TDD", "BDD", "MSTest"
  ]
};

export const featuredProjects = [
  {
    id: 1,
    title: "Estate Agent CMS Platform",
    company: "NN Life Potential Ltd",
    period: "2024",
    description: "Developed a fully responsive estate agent website using C# ASP.NET Core MVC and Umbraco CMS. Features custom plugins, RESTful APIs, and seamless integration with existing systems.",
    technologies: ["C# ASP.NET Core", "Umbraco CMS", "React", "JavaScript", "SQL Server"],
    highlights: [
      "Live production site serving real estate clients",
      "Fully responsive across desktop, tablet, and mobile",
      "Custom plugin architecture for extensibility",
      "RESTful API integration with third-party systems"
    ],
    liveUrl: "https://cricketts.co.uk",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Multi-Channel eCommerce Automation",
    company: "Globe Special Ltd",
    period: "2020-2022",
    description: "Built a fully automated scalable online system for selling health & wellness products across multiple marketplaces, achieving 4-figure monthly sales.",
    technologies: ["ASP.NET Core", "React", "SQL Server", "eBay API", "Amazon API", "Shopify"],
    highlights: [
      "Generated 4-figure sales within first 3 months",
      "Multi-channel integration (eBay, Amazon, Wish)",
      "Automated product research and listing",
      "Scalable dropshipping and wholesale support"
    ],
    category: "eCommerce"
  },
  {
    id: 3,
    title: "Public Sector Data Management System",
    company: "Method4 Ltd",
    period: "2016-2019",
    description: "Led the complete modernization of a legacy VB.NET system to C# ASP.NET Core with Azure Cloud, serving Local Authority, Police, and Fire Services data.",
    technologies: ["C# ASP.NET Core", "Azure Cloud", "Azure SQL", "Azure VMs", "SCRUM"],
    highlights: [
      "Complete rewrite from WebForms to modern MVC architecture",
      "Migrated from local storage to Azure Cloud infrastructure",
      "Led team of 10-12 developers using SCRUM methodology",
      "Reduced deployment time by 50% with CI/CD automation"
    ],
    category: "Enterprise Systems"
  },
  {
    id: 4,
    title: "Enterprise Insurance Platform",
    company: "Europa Group Ltd",
    period: "2011-2014",
    description: "Architected and built a scalable enterprise software system for new business insurance, generating over £100K revenue in the first year.",
    technologies: ["ASP.NET", "C#", "SQL Server", "IIS", "Enterprise Architecture"],
    highlights: [
      "Generated £100K+ revenue in year one",
      "Scalable architecture supporting multiple insurance products",
      "Car and bike insurance product lines",
      "Enterprise-grade security and compliance"
    ],
    category: "Enterprise Systems"
  },
  {
    id: 5,
    title: "Water Industry Design Tools",
    company: "Hydro International Ltd",
    period: "2007-2011",
    description: "Developed customer-facing product design and pricing tools for water industry clients, generating £10K+ sales in the first month.",
    technologies: [".NET Framework", "C#", "SQL Server", "Web Services"],
    highlights: [
      "£10K+ sales in inaugural month",
      "Customer self-service design tools",
      "Optimal product sizing calculations",
      "Rapid ROI demonstration"
    ],
    category: "Industrial Software"
  }
];

export const workExperience = [
  {
    id: 1,
    position: "Senior Full Stack Web Developer",
    company: "NN Life Potential Ltd (Digital Agency)",
    period: "February 2024 – Current",
    description: "Building systems and frameworks for online retail with eCommerce web development, product research, marketing, and creative design.",
    achievements: [
      "Developed CMS-driven estate agent website (live: cricketts.co.uk)",
      "Built automated e-commerce systems achieving profitable sales in under 3 months",
      "Created custom plugins and RESTful APIs using JavaScript and React",
      "Integrated with existing systems using modern web technologies"
    ]
  },
  {
    id: 2,
    position: "Senior Full Stack Web Developer",
    company: "Apple Print & Creative Ltd",
    period: "November 2022 - February 2024",
    description: "Led development of software systems with C# .NET Core MVC, Umbraco CMS, React and Azure, improving business processes and practices.",
    achievements: [
      "Introduced Azure DevOps and Git workflows, reducing deployment times",
      "Led implementation of new eCommerce system replacing legacy infrastructure",
      "Built React-based PCB calculation applications with Azure Services",
      "Advised directors on technical requirements and business process improvements"
    ]
  },
  {
    id: 3,
    position: "Senior C# ASP.NET Core Developer",
    company: "Globe Special Ltd (eCommerce)",
    period: "April 2020 - October 2022",
    description: "Built automated scalable online systems for multi-channel eCommerce operations with focus on automation and efficiency.",
    achievements: [
      "Built automated system achieving 4-figure sales in first 3 months",
      "Developed multi-channel integration with eBay, Amazon, and Shopify",
      "Created product research and automation tools using .NET Core",
      "Implemented direct response marketing with paid advertising integration"
    ]
  },
  {
    id: 4,
    position: "Senior C# ASP.NET Core Developer",
    company: "Altech Software Ltd (Food Industry)",
    period: "October 2019 - March 2020",
    description: "Recruited to replace paper-based factory systems with modern web applications, providing management visibility over operational processes.",
    achievements: [
      "Created tablet-ready web applications for factory floor operations",
      "Digitized paper-based systems using ASP.NET Core MVC and Entity Framework",
      "Introduced modern Agile methodologies to development team",
      "Accelerated project delivery with CI/CD automation"
    ]
  },
  {
    id: 5,
    position: "Senior C# ASP.NET Core Developer",
    company: "Method4 Ltd (Public Sector)",
    period: "October 2016 – September 2019",
    description: "Led modernization of public sector data management systems serving Local Authority, Police, and Fire Services with Azure cloud migration.",
    achievements: [
      "Modernized legacy VB.NET system to C# ASP.NET Core with Azure",
      "Led team of 10-12 developers using SCRUM methodology",
      "Reduced deployment time by 50% with CI/CD implementation",
      "Migrated from local storage to Azure Cloud infrastructure"
    ]
  }
];

export const education = {
  degree: "BSc (Hons) Computing for Real-time Systems",
  institution: "University of the West of England, Bristol",
  certifications: [
    "Continuous training via Udemy, Frontend Masters, YouTube",
    "Modern full stack development and cloud platforms",
    "Advanced C# and web development trends",
    "Artificial Intelligence and machine learning"
  ]
};

export const achievements = [
  "10+ years in enterprise-scale software development",
  "Led teams up to 12 developers using SCRUM methodology",
  "Reduced deployment times by 50% with CI/CD automation",
  "Generated £100K+ revenue with enterprise insurance platform",
  "Achieved 4-figure monthly sales with eCommerce automation",
  "£10K+ sales in first month with water industry tools",
  "Martial arts: 2nd Dan Black Belt in Judo",
  "Former British Schools World Championship 5th place finisher"
];

export const interests = [
  "Martial Arts (2nd Dan Black Belt in Judo, Level 1 Coach)",
  "Outdoor Activities (Hiking, Biking, Swimming)",
  "Water Sports (Scuba and Free Diving)",
  "Continuous Learning (AI, Modern Web Technologies)",
  "Mentoring and Team Leadership"
];
