export interface NewsItem {
  date: string;
  description: string;
  image: string;
  link?: string;
}

export const newsItems: NewsItem[] = [
  {
    date: "Apr. 2, 2025",
    description: "OpenAI features Algoverse research paper in their latest research publication: PaperBench",
    image: "/openailogobanner.png"
  },
  {
    date: "Mar. 6, 2025",
    description: "Congratulations to sixteen Algoverse research teams for their acceptances to workshops in NAACL 2025 in Albuquerque, New Mexico!",
    image: "/naaclbanner.png"
  },
  {
    date: "Mar. 4, 2025",
    description: "Congratulations to five Algoverse research teams accepted to workshops in ICLR 2025 at the Singapore EXPO!",
    image: "/iclrbanner.webp"
  },
  {
    date: "Dec. 15, 2024",
    description: "Algoverse students present at NeurIPS 2024 in Vancouver, Canada",
    image: "/neuripsdaybanner.webp"
  },
  {
    date: "Dec. 12, 2024",
    description: "Congratulations to two teams for their acceptances to workshops at COLING 2025 in Abu Dhabi, UAE!",
    image: "/coling2025.webp"
  },
  {
    date: "Dec. 9, 2024",
    description: "Four Algoverse teams cited by researchers at Mount Sinai, NIH, Microsoft, Oxford, MIT, Princeton, and University of Washington.",
    image: "/prompting.webp"
  },
  {
    date: "Nov. 22, 2024",
    description: "Founder's Note - Updates to Algoverse Admissions and Tuition",
    image: "/founders_note.jpg"
  },
  {
    date: "Nov. 15, 2024",
    description: "Algoverse students present at EMNLP 2024 in Miami, Florida",
    image: "/emnlpday2024banner.webp"
  },
  {
    date: "Oct. 23, 2024",
    description: "Six Algoverse research teams are accepted to various NeurIPS 2024 Workshops",
    image: "/vancouver_convention_center.webp"
  },
  {
    date: "Sept. 26, 2024",
    description: "Congratulations to our students for their acceptance to NeurIPS High School Track 2024 in Vancouver, Canada!",
    image: "/neuripsbanner.webp"
  },
  {
    date: "Sept. 17, 2024",
    description: "Congratulations to two teams for their acceptances to EMNLP, Positive Impact Track 2024 in Miami, Florida!",
    image: "/emnlp2024banner.webp"
  },
  {
    date: "Aug. 17, 2024",
    description: "Zoom Webinar: AI Safety and Q+A Session From Anthropic Research Scientist",
    image: "/anthropicbanner.webp"
  },
  {
    date: "Jul. 8, 2024",
    description: "Congratulations to Dharunish for the acceptance of his paper to ACL SRW 2024 in Bangkok, Thailand!",
    image: "/acl2024logobanner.webp"
  },
  {
    date: "Jun. 28, 2024",
    description: "Algoverse collaborates with University of Michigan's SLED Lab on a research project.",
    image: "/umichbanner.webp"
  },
  {
    date: "Jun. 21, 2024",
    description: "Congratulations to Ayush Chauhan for being admitted to Stanford!",
    image: "/stanfordbanner.png"
  }
]; 