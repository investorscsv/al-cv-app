export type Locale = "en" | "uk";

export type NavigationDictionary = {
  home: string;
  cases: string;
  contactMe: string;
};

export type HomeTimelineItem = {
  id: string;
  period: string;
  title: string;
  description: string;
};

export type HomeDictionary = {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  specialties: {
    title: string;
    items: string[];
  };
  linkedin: {
    title: string;
    description: string;
    cta: string;
  };
  nextSection: {
    title: string;
    paragraphs: string[];
  };
  timeline: {
    title: string;
    items: HomeTimelineItem[];
  };
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  website: string;
  logo: string;
  websiteLabel: string;
  intro: string;
  highlights: string[];
  skills: string[];
};

export type CareerDictionary = {
  title: string;
  subtitle: string;
  experiences: ExperienceItem[];
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectItem = {
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  stack: string[];
  images?: ProjectImage[];
  cta?: {
    label: string;
    url: string;
  };
};

export type ProjectsDictionary = {
  title: string;
  subtitle: string;
  crino: ProjectItem;
};

export type DegreeItem = {
  id: string;
  institutionId: number;
  course: string;
  description: string;
  endDate: string;
  link: string;
};

export type DegreeDictionary = {
  title: string;
  subtitle: string;
  items: DegreeItem[];
};

export type CaseItem = {
  title: string;
  subtitle?: string;
  intro: string;
  highlights: string[];
  skills: string[];
};

export type CasesDictionary = {
  title: string;
  content: string;
  items: Record<string, CaseItem>;
};

export type ContactDictionary = {
  kicker: string;
  title: string;
  subtitle: string;
  linkedin: {
    title: string;
    description: string;
    cta: string;
  };
};

export type Dictionary = {
  nav: NavigationDictionary;
  home: HomeDictionary;
  career: CareerDictionary;
  projects: ProjectsDictionary;
  degree: DegreeDictionary;
  cases: CasesDictionary;
  contact: ContactDictionary;
};
