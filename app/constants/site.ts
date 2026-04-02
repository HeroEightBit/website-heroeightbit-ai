// constants/site.ts

type SiteConfig = {
  name: string;
  description: string;
  contactEmail: string;
  links: {
    github: string;
    linkedin: string;
  };
};

type ResumeInfo = {
  experience: {
    company: string;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  certifications?: {
    title: string;
    summary: string;
    startDate: string;
    endDate: string;
  }[];
};


export const SITE_CONFIG = {
  name: "HeroEightBit",
  description: "A personal website showcasing my projects and resume.",
  contactEmail: "aaronschultz@gmail.com",
  links: {
    github: "https://github.com/HeroEightBit",
    linkedin: "https://www.linkedin.com/in/aaron-schultz-computerengineer/",
  },
};

export const RESUME_INFO = {
  summary: "Dynamic Sr. Technical Support Engineer at Dynatrace with expertise in Real User Monitoring and workflow automation. Proven track record in resolving complex performance issues and enhancing service reliability. Strong leadership and critical thinking skills, driving team collaboration and empowering clients through effective troubleshooting strategies and quality assurance initiatives.",
  experience: [
    {
      company: "Dynatrace",
      title: "Sr. Technical Support Engineer",
      startDate: "2020-01-01",
      endDate: "2023-12-31",
      description: "Worked on various projects involving web development and cloud computing.",
    },
    {
      company: "Dynatrace",
    title: "Technical Support Engineer",
      startDate: "2021-06-01",
      endDate: "2021-06-01",
      description: "Focused on building responsive user interfaces using React and Next.js.",
    },
  ],
  education: [
    {
      institution: "Central Michigan University",
      degree: "B.S. in Computer Engineering",
      startDate: "2016-08-01",
      endDate: "2021-04-01",
    },
  ],
};