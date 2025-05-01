
export interface NavItem {
  label: string;
  href: string;
}

export interface SessionInfo {
  title: string;
  dates: string;
  lectureSchedules: string[];
}

export interface ResearchPaper {
  id: number;
  title: string;
  conference: string;
  location: string;
  year: number;
  highlight?: string;
  authors: string[];
  link?: string;
  websiteLink?: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageUrl?: string;
  papers?: {
    title: string;
    conference: string;
    location: string;
    authors: string;
    link?: string;
    highlight?: string;
    logo?: string;
  }[];
}

export interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}
