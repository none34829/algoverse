
import { ResearchPaper } from "@/types";
import ResearchCard from "./ResearchCard";

const papers: ResearchPaper[] = [
  {
    id: 1,
    title: "Semantic Self-Consistency: Enhancing Language Model Reasoning via Semantic Weighting",
    conference: "NeurIPS",
    location: "Vancouver, Canada",
    year: 2024,
    highlight: "Accepted to NeurIPS 2024",
    authors: ["Tim Knappe", "Ryan Li", "Ayush Chauhan", "Kaylee Chhua"],
    link: "#",
    websiteLink: "#",
  },
  {
    id: 2,
    title: "NusaMT-7B: Machine Translation for Low-Resource Indonesian Languages with LLMs",
    conference: "NeurIPS",
    location: "Vancouver, Canada",
    year: 2024,
    highlight: "Accepted to NeurIPS 2024",
    authors: ["Nusa Research Team", "Algoverse Students"],
    link: "#",
  },
  {
    id: 3,
    title: "Differentiation of ADEM from MS Using a Novel Brain Lesion Segmentation and Classification Pipeline",
    conference: "IEEE BHI",
    location: "Boston, MA",
    year: 2024,
    highlight: "Accepted to IEEE BHI 2024",
    authors: ["Algoverse Medical AI Team", "Research Mentors"],
    link: "#",
  }
];

const ResearchHighlights = () => {
  return (
    <section id="research" className="section bg-gradient-to-br from-white to-algoverse-50/50">
      <div className="container-inner">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Research Highlights</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent research papers from our students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {papers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#more-research" className="btn-secondary">
            Read More Research
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;
