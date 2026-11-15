/**
 * src/data/site.ts
 * 
 * Site-wide configuration and SEO settings
 */

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email?: string;
  url: string;
  logo: string;
  favicon: string;
  lang: string;
  social: {
    clutch: string;
    fiverr: string;
    linkedin: string;
    upwork: string;
  };
  analytics: {
    gaId: string;
  };
  formspree: {
    endpoint: string;
  };
}

export const site: SiteConfig = {
  title: 'Paras AI Innovations',
  description: 'AI Agents & Business Automation | Custom engineering solutions for growing businesses',
  author: 'Paras AI Innovations',
  url: 'https://parasaiinnovations.com',
  logo: '/assets/logo.png',
  favicon: '/favicon.png',
  lang: 'en',
  social: {
    clutch: 'https://clutch.co/profile/paras-ai-innovations',
    fiverr: 'https://www.fiverr.com/swatigupta163?public_mode=true',
    linkedin: 'https://www.linkedin.com/company/paras-ai-innovations/',
    upwork: 'https://www.upwork.com/freelancers/~0158a7bcb185395121',
  },
  analytics: {
    gaId: 'G-WZT14B2Q4F',
  },
  formspree: {
    endpoint: 'https://formspree.io/f/xoevzglj',
  },
};

/**
 * Page-specific SEO configuration
 */
export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const pages: Record<string, PageMeta> = {
  home: {
    title: 'Paras AI Innovations | AI Agents & Business Automation',
    description: 'Paras AI Innovations builds AI agents, voice automation, document intelligence, business automation systems, and professional websites for growing businesses. Engineering-led AI that solves real operational problems.',
    ogImage: '/assets/logo.png',
    ogType: 'website',
  },
  work: {
    title: 'Recent Projects | Paras AI Innovations',
    description: 'Explore recent AI applications, document intelligence systems and business automation projects built by Paras AI Innovations.',
    ogImage: '/assets/logo.png',
    ogType: 'website',
  },
  caseStudies: {
    title: 'Case Studies | Paras AI Innovations',
    description: 'Explore how we apply AI engineering, intelligent automation and custom software development to solve complex business problems and build practical digital solutions.',
    ogImage: '/assets/logo.png',
    ogType: 'website',
  },
  insights: {
    title: 'Insights & Blogs | Paras AI Innovations',
    description: 'Explore practical AI insights, technical guides, and perspectives on intelligent automation, machine learning and digital product engineering.',
    ogImage: '/assets/logo.png',
    ogType: 'website',
  },
  contact: {
    title: 'Discuss Your Workflow | Paras AI Innovations',
    description: 'Tell Paras AI Innovations about your workflow and explore practical AI and automation solutions for your business.',
    ogImage: '/assets/logo.png',
    ogType: 'website',
  },
};
