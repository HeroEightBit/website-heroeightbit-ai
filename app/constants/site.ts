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

export const SITE_CONFIG = {
  name: "HeroEightBit",
  description: "A personal website showcasing my projects and resume.",
  contactEmail: "aaronschultz@gmail.com",
  links: {
    github: "https://github.com/HeroEightBit",
    linkedin: "https://www.linkedin.com/in/aaron-schultz-computerengineer/",
  },
};
