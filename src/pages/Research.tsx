import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationCTA from "@/components/ApplicationCTA";
import ResearchCitations from "@/components/ResearchCitations";
import { FileText, Award, Users, Link2, ExternalLink, BookOpen } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ConferenceTab = "neurips" | "acl-emnlp-naacl" | "iclr" | "applied-ml";

interface PublicationProps {
  title: string;
  conference: string;
  track?: string;
  location: string;
  authors: string[];
  paperLink?: string;
  websiteLink?: string;
  logoUrl?: string;
  secondLogoUrl?: string;
  secondConference?: string;
  secondLocation?: string;
}

const Research = () => {
  const [activeTab, setActiveTab] = useState<ConferenceTab>("neurips");

  return (
    <>
      <Helmet>
        <title>Research at AlgoVerse | AI Research Program</title>
        <meta 
          name="description" 
          content="Explore AlgoVerse's groundbreaking AI research, publications at top conferences, and the impact of our student researchers."
        />
      </Helmet>
      
      <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/neural-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#030014]/95 to-[#030014] z-0"></div>
        
        <Navbar />
        
        <main className="pt-24 relative z-10">
          {/* Hero section */}
          <section className="container mx-auto px-4 py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent mb-6">
                Research at AlgoVerse
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Learn about our mission, explore our acclaimed conference publications, and delve into past student research papers.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card rounded-xl p-8 backdrop-blur-sm border border-[#00d2ff]/20"
              >
                <h2 className="text-2xl font-bold mb-4">Our Commitment to Quality Research</h2>
                <p className="text-gray-300 mb-6">
                  AlgoVerse AI Research is dedicated to empowering students to create authentic and impactful AI research. Our distinctive emphasis on quality and process enables our students to produce exceptional research published at leading NLP conferences worldwide. We strive to push the boundaries of large language models (LLMs) on standard benchmarks while pioneering machine learning applications across diverse disciplines. This commitment to innovation and excellence sets us apart from other programs.
                </p>
                
                <p className="text-gray-300">
                  Our PhD mentors have extensive experience conducting cutting-edge research at top AI institutions and research labs around the globe. They are deeply invested in each student's project, providing essential mentorship in scoping research proposals, implementing code, and academic writing. Through this guidance, our students are uniquely equipped to produce high-quality research papers and successfully navigate the publication process at prestigious conferences. Past papers of our students have been <span className="text-[#00d2ff]">cited by researchers at Microsoft, Oxford, and University of Washington</span>.
                </p>
              </motion.div>
            </motion.div>
          </section>

          <ResearchCitations />
          
          {/* Conference Publications Tabs */}
          <section className="container mx-auto px-4 py-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Conference Publications
            </motion.h2>
            
            <div className="max-w-6xl mx-auto">
              {/* Tabs */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
                <TabButton 
                  active={activeTab === "neurips"} 
                  onClick={() => setActiveTab("neurips")}
                  label="NeurIPS"
                />
                <TabButton 
                  active={activeTab === "acl-emnlp-naacl"} 
                  onClick={() => setActiveTab("acl-emnlp-naacl")}
                  label="ACL / EMNLP / NAACL"
                />
                <TabButton 
                  active={activeTab === "iclr"} 
                  onClick={() => setActiveTab("iclr")}
                  label="ICLR"
                />
                <TabButton 
                  active={activeTab === "applied-ml"} 
                  onClick={() => setActiveTab("applied-ml")}
                  label="Applied ML"
                />
              </div>
              
              {/* Description */}
              {activeTab === "neurips" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 glass-card rounded-xl p-6 border border-[#00d2ff]/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Our NeurIPS Publications</h3>
                  <p className="text-gray-300">
                    Neural Information Processing Systems (NeurIPS) is widely recognized as the most prestigious conference in artificial intelligence and machine learning. Publications at NeurIPS represent groundbreaking contributions and are commonly associated with leading universities and industry leaders like <a href="https://deepmind.google/discover/blog/google-deepmind-at-neurips-2024/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Google DeepMind</a>. See more at the <a href="https://neurips.cc/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">NeurIPS official website</a> or view its ranking via <a href="https://scholar.google.es/citations?view_op=top_venues&hl=en&vq=eng_artificialintelligence#:~:text=Neural%20Information%20Processing%20Systems" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Google Scholar</a>.
                  </p>
                  
                  <div className="mt-4 p-3 rounded-lg bg-[#00d2ff]/10 border border-[#00d2ff]/30">
                    <p className="text-sm text-gray-300 italic">
                      <strong>Note for high schoolers:</strong> NeurIPS acceptances are significantly more difficult compared to high school science fairs. Less than 0.2% of authors at NeurIPS are high school students.
                    </p>
                  </div>
                </motion.div>
              )}
              
              {activeTab === "acl-emnlp-naacl" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 glass-card rounded-xl p-6 border border-[#00d2ff]/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Our NLP Publications</h3>
                  <p className="text-gray-300">
                    ACL, EMNLP, and NAACL are widely recognized as the world's most prestigious conferences in Natural Language Processing (NLP). Top AI labs, including <a href="https://nlp.stanford.edu/pubs/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Stanford AI Lab (SAIL)</a> and <a href="https://nlp.cs.berkeley.edu/publications.shtml" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Berkeley AI Research (BAIR)</a>, regularly submit their most influential research on large language models (LLMs) and related topics to these venues. Known for rigorous peer-review standards, these conferences set the benchmark for groundbreaking advancements in NLP. For more details, visit the official websites for <a href="https://www.aclweb.org/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">ACL</a>, <a href="https://2024.emnlp.org/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">EMNLP</a>, and <a href="https://2024.naacl.org/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">NAACL</a>, or view their rankings on <a href="https://scholar.google.com/citations?view_op=top_venues&hl=en&vq=eng_computationallinguistics#:~:text=1.,228" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Google Scholar</a>.
                  </p>
                </motion.div>
              )}
              
              {activeTab === "iclr" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 glass-card rounded-xl p-6 border border-[#00d2ff]/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Our ICLR Publications</h3>
                  <p className="text-gray-300">
                  The International Conference on Learning Representations (ICLR) is one of the most prestigious conferences in deep learning. Publications at ICLR showcase significant advancements in representation learning and neural network methods, often involving collaborations between top universities and industry research labs such as OpenAI (<a href="https://openreview.net/pdf?id=v8L0pN6EOi" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">example</a>). For more information, visit the <a href="https://iclr.cc/" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">ICLR official website</a> or view its ranking via <a href="https://scholar.google.es/citations?view_op=top_venues&hl=en&vq=eng_artificialintelligence#:~:text=International%20Conference%20on%20Learning%20Representations" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Google Scholar</a>.
                  </p>
                </motion.div>
              )}
              
              {activeTab === "applied-ml" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-10 glass-card rounded-xl p-6 border border-[#00d2ff]/20"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Applied ML Research</h3>
                  <p className="text-gray-300 mb-4">
                    Our Applied Machine Learning papers translate cutting-edge ML research into impactful real-world solutions, driving innovation across domains such as healthcare, biology, environmental science, and beyond.
                  </p>
                  <p className="text-gray-300">
                    In addition to submissions at premier ML conferences, our work is regularly featured at prestigious domain-specific venues, such as CVPR for computer vision (<a href="https://scholar.google.com/citations?view_op=top_venues&hl=en&vq=eng_computervisionpatternrecognition#:~:text=IEEE/CVF%20Conference%20on%20Computer%20Vision%20and%20Pattern%20Recognition" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Ranking</a>), JID for dermatology (<a href="https://scholar.google.com/citations?view_op=top_venues&hl=en&vq=med_dermatology#:~:text=Journal%20of%20Investigative%20Dermatology" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Ranking</a>), or AAAI for applications of AI (<a href="https://scholar.google.es/citations?view_op=top_venues&hl=en&vq=eng_artificialintelligence#:~:text=AAAI%20Conference%20on%20Artificial%20Intelligence" target="_blank" rel="noopener noreferrer" className="text-[#00d2ff] hover:underline">Ranking</a>).
                  </p>
                </motion.div>
              )}
              
              {/* Publications list */}
              <div className="space-y-8">
                {activeTab === "neurips" && (
                  <>
                    {neuripsPublications.map((pub, idx) => (
                      <PublicationCard key={idx} publication={pub} />
                    ))}
                    <ConferenceImageGallery 
                      title="NeurIPS Conference Highlights" 
                      images={[
                        "/neuripsday1.webp",
                        "/neuripsday3.webp",
                        "/neuripsday2.webp",
                        "/neuripsday4.webp",
                        "/neuripsday5.webp"
                      ]} 
                    />
                  </>
                )}
                
                {activeTab === "acl-emnlp-naacl" && (
                  <>
                    {nlpPublications.map((pub, idx) => (
                      <PublicationCard key={idx} publication={pub} />
                    ))}
                    <ConferenceImageGallery 
                      title="EMNLP Conference Highlights" 
                      images={[
                        "/emnlpday2024banner.webp",
                        "/sunnyjoon.jpg",
                        "/emnlpday2.webp",
                        "/emnlpday3.webp",
                        "/emnlpday5.webp"
                      ]} 
                    />
                  </>
                )}
                
                {activeTab === "iclr" && (
                  <>
                    {iclrPublications.map((pub, idx) => (
                      <PublicationCard key={idx} publication={pub} />
                    ))}
                    <ConferenceImageGallery 
                      title="ICLR Conference Highlights" 
                      images={[
                        "/iclrbanner.webp",
                        "/carousel1.jpeg",
                        "/carousel3.jpeg"
                      ]} 
                    />
                  </>
                )}
                
                {activeTab === "applied-ml" && (
                  <>
                    {appliedMlPublications.map((pub, idx) => (
                      <PublicationCard key={idx} publication={pub} />
                    ))}
                    <ConferenceImageGallery 
                      title="Applied ML Research Highlights" 
                      images={[
                        "/accvday1.webp",
                        "/ieeebhiday1.png",
                        "/aaaiday2.jpg",
                        "/aaaiday1.jpg",
                        "/vancouver_convention_center.png"
                      ]} 
                    />
                  </>
                )}
              </div>
            </div>
          </section>
          
          {/* Paper Citations */}
          <section className="container mx-auto px-4 py-16 bg-[#02000f]/60 rounded-3xl backdrop-blur-sm my-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Paper Citations</h2>
              
              <p className="text-gray-300">
                Undergraduate research cited by premier institutions is already a rare and exceptional achievement—demonstrating the quality, depth, and real-world impact of our students' work. But at AlgoVerse, even high school students regularly earn citations from researchers at top universities and labs—a nearly unheard-of accomplishment in academia. Citations represent more than just recognition; they reflect meaningful contributions to science itself. The fact that our students' discoveries are informing research conducted by seasoned scholars underscores the extraordinary rigor, originality, and influence of their work.
              </p>
              
              <div className="mt-10 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] rounded-full blur opacity-75"></div>
                  <div className="relative bg-black rounded-full p-8">
                    <div className="text-7xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">
                      26
                    </div>
                    <div className="text-lg text-gray-300">Citations in the past year</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Example Citations</h3>
              
              <div className="space-y-4">
                <CitationCard 
                  title="PaperBench: Evaluating AI's Ability to Replicate AI Research"
                  institution="OpenAI"
                />
                
                <CitationCard 
                  title="One Language, Many Gaps: Evaluating Dialect Fairness and Robustness of Large Language Models in Reasoning Tasks"
                  institution="Microsoft, Oxford, University of Washington, others"
                />
                
                <CitationCard 
                  title="GPT-4o Reads the Mind in the Eyes"
                  institution="Princeton, MIT, and other universities"
                />
              </div>
            </motion.div>
          </section>
        </main>
        
        <ApplicationCTA />
        <Footer />
      </div>
    </>
  );
};

const TabButton: React.FC<{
  active: boolean;
  onClick: () => void;
  label: string;
}> = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300",
        active 
          ? "bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] text-white shadow-lg" 
          : "bg-black/40 text-gray-400 hover:text-white border border-gray-800 hover:border-[#00d2ff]/50"
      )}
    >
      {label}
    </button>
  );
};

const PublicationCard: React.FC<{ publication: PublicationProps }> = ({ publication }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-6 border border-[#00d2ff]/20 hover:border-[#00d2ff]/40 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row gap-6">
{/* Logo(s) */}
<div className="flex-shrink-0 flex justify-center items-center md:w-[180px]">
  <div className="w-full h-32 flex flex-col items-center justify-center relative">
    {/* Main card container */}
    <div className="bg-gradient-to-b from-black/80 to-black/40 backdrop-blur-sm w-full h-full rounded-xl flex items-center justify-center p-3 overflow-hidden border border-white/5">
      {publication.logoUrl && (
        <img 
          src={publication.logoUrl} 
          alt="Conference logo" 
          className="max-w-full max-h-full object-contain drop-shadow-lg" 
        />
      )}
    </div>
    
    {/* Second logo if present */}
    {publication.secondLogoUrl && (
      <div className="absolute -right-1 -bottom-1 rounded-lg bg-black/80 backdrop-blur p-1.5 shadow-xl border border-white/10">
        <img 
          src={publication.secondLogoUrl} 
          alt="Second conference logo" 
          className="h-8 w-auto object-contain" 
        />
      </div>
    )}
  </div>
</div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-[#00d2ff]/20 text-[#00d2ff] px-2 py-1 rounded-md text-xs">
                Accepted to {publication.conference} {publication.track && `${publication.track}`}
              </span>
              <span className="bg-black/40 text-gray-300 px-2 py-1 rounded-md text-xs">
                {publication.location}
              </span>
            </div>
            
            {publication.secondConference && (
              <div className="flex flex-wrap gap-2 mb-2 mt-1">
                <span className="bg-[#3a47d5]/20 text-[#3a47d5] px-2 py-1 rounded-md text-xs">
                  Accepted to {publication.secondConference}
                </span>
                {publication.secondLocation && (
                  <span className="bg-black/40 text-gray-300 px-2 py-1 rounded-md text-xs">
                    {publication.secondLocation}
                  </span>
                )}
              </div>
            )}
            
            <p className="text-gray-300 text-sm">
              <span className="font-medium">Authors:</span> {publication.authors.join(", ")}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {publication.paperLink && (
              <a 
                href={publication.paperLink}
                className="flex items-center gap-1 text-sm bg-black/50 hover:bg-black/70 text-gray-300 hover:text-white px-3 py-1.5 rounded-md transition-colors duration-300 border border-gray-800 hover:border-[#00d2ff]/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={14} />
                <span>Read the Paper</span>
              </a>
            )}
            
            {publication.websiteLink && (
              <a 
                href={publication.websiteLink}
                className="flex items-center gap-1 text-sm bg-[#3a47d5]/20 hover:bg-[#3a47d5]/30 text-gray-300 hover:text-white px-3 py-1.5 rounded-md transition-colors duration-300 border border-[#3a47d5]/30 hover:border-[#3a47d5]/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                <span>Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CitationCard: React.FC<{ 
  title: string;
  institution: string;
}> = ({ title, institution }) => {
  return (
    <div className="glass-card rounded-xl p-5 border border-[#00d2ff]/20 hover:border-[#00d2ff]/40 transition-all duration-300">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{institution}</p>
    </div>
  );
};

const ConferenceImageGallery: React.FC<{
  title: string;
  images: string[];
}> = ({ title, images }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 mb-8"
    >
      <h3 className="text-xl font-bold mb-6 text-center">{title}</h3>
      
      <div className="glass-card border border-[#00d2ff]/20 p-6 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 group relative"
            >
              <img 
                src={image} 
                alt={`Conference image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Sample publications data
const appliedMlPublications: PublicationProps[] = [
  {
    title: "SkinGPT-4 provides a generalizable foundation for fair and customizable skin disease classification models",
    conference: "JID 2025;",
    location: "San Diego, CA, USA",
    track: "selected for Oral Presentation (6% of all accepted papers)",
    authors: ["Kiran Nijjer", "Ryan Bui", "Adnan Ahmed", "Derek Jiu", "Peter Wang"],
    logoUrl: "/jid.png"
  },
  {
    title: "Large language models display skin tone biases in the evaluation of common dermatological conditions",
    conference: "JID 2025",
    location: "San Diego, CA, USA",
    authors: ["Kiran Nijjer", "Ryan Bui", "Adnan Ahmed", "Derek Jiu", "Peter Wang"],
    logoUrl: "/jid.png"
  },
  {
    title: "Artificial Intelligence-driven Assessment Of Group Dynamics Across Peripheral Endovascular Interventions",
    conference: "ACS Clinical Congress 2025",
    location: "Chicago, Illinois, USA",
    authors: ["James Ignacio", "Isaac Picov", "Leia Chen", "Philip Chen"],
    logoUrl: "/acs2025.webp"
  },
  {
    title: "Artificial Intelligence-enabled Analysis Of Visual Attention And Hand-tool Interactions In The Operating Room",
    conference: "ACS Clinical Congress 2025",
    location: "Chicago, Illinois, USA",
    authors: ["Leia Chen", "Philip Chen", "James Ignacio", "Isaac Picov"],
    logoUrl: "/acs2025.webp"
  },
  {
    title: "Differentiation of Acute Disseminated Encephalomyelitis from Multiple Sclerosis Using a Novel Brain Lesion Segmentation and Classification Pipeline",
    conference: "IEEE BHI 2024",
    location: "Houston, Texas, USA",
    authors: ["Osama Radi", "Aiden Huang", "Kira Murukami"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/ieeebhi2024.webp"
  },
  {
    title: "Medical Imaging Complexity and its Effects on GAN Performance",
    conference: "GAISynMeD @ ACCV 2024",
    location: "Hanoi, Vietnam",
    authors: ["William Cagas", "Chan Ko", "Blake Hsiao", "Shryuk Grandhi", "Rishi Bhattacharya"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/accv2024.webp"
  },
  {
    title: "Leveraging Neuroscience-Informed Centrality for Topology-Aware Pruning in Neural Networks",
    conference: "Efficient Large Vision Models @ CVPR 2025",
    location: "Nashville, TN, USA",
    authors: ["Nick Cui", "Trevor Xing-Xie", "Arushi Gupta", "Peter Choi"],
    logoUrl: "/cvpr2025logo.webp"
  },
  {
    title: "Testing Evolutionary and Reinforcement Learning Approaches to Traffic Flow Optimization in SUMO",
    conference: "AI for Urban Planning @ AAAI 2025",
    location: "Philadelphia, Pennsylvania, USA",
    authors: ["Dominic Domingo", "Aryan Bandi", "Arya Kunisetty", "Ahan Banerjee"],
    logoUrl: "/aaai2025logo.webp"
  },
  {
    title: "A Neural Network Framework for Ridership Prediction in NYC",
    conference: "AI for Urban Planning @ AAAI 2025",
    location: "Philadelphia, Pennsylvania, USA",
    authors: ["Joshua Peguero", "Felix Lee"],
    logoUrl: "/aaai2025logo.webp"
  },
  {
    title: "DiversityMedQA: Assessing Demographic Biases in Medical Diagnosis using LLMs",
    conference: "AIM-FM @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["Rajat Rawat", "Hudson McBride", "Rajarshi Ghosh", "Dhiyaan Nirmal", "Jong Moon", "Dhruv Alamuri"],
    paperLink: "#",
    logoUrl: "/neuripslogo.webp",
    secondLogoUrl: "/emnlp2024logo.webp",
    secondConference: "EMNLP Positive Impact Track 2024",
    secondLocation: "Miami, Florida"
  },
  {
    title: "AAVENUE: Detecting LLM Biases on NLU Tasks in AAVE via a Novel Benchmark",
    conference: "NeurIPS High School Track 2024",
    location: "Vancouver, Canada",
    authors: ["Abhay Gupta", "Philip Meng", "Ece Yurtseven"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/neuripslogo.webp",
    secondLogoUrl: "/emnlp2024logo.webp",
    secondConference: "EMNLP Positive Impact Track 2024",
    secondLocation: "Miami, Florida"
  },
  {
    title: "NusaMT-7B: Machine Translation for Low-Resource Indonesian Languages with LLMs",
    conference: "SoLaR @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["William Tan"],
    paperLink: "#",
    logoUrl: "/neuripslogo.webp"
  }
];

const neuripsPublications: PublicationProps[] = [
  {
    title: "Translation Bias and Accuracy in Multilingual LLMs for Cross-Language Claim Verification",
    conference: "Attribution @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["Aryan Singhal", "Veronica Shao", "Gary Sun", "Ryan Ding"],
    paperLink: "https://arxiv.org/pdf/2410.10303",
    logoUrl: "/neuripslogo.webp"
  },
  {
    title: "QIANets for Reduced Latency and Improved Inference Times in CNN Models",
    conference: "Compression @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["Zhumazhan Balapanov", "Edward Magongo", "Vanessa Matvei", "Olivia Holmberg"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/neuripslogo.webp"
  },
  {
    title: "Semantic Self-Consistency: Enhancing Language Model Reasoning via Semantic Weighting",
    conference: "MathAI @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["Tim Knappe", "Ryan Li", "Ayush Chauhan", "Kaylee Chhua"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/neuripslogo.webp"
  },
  {
    title: "Fine-Tuning Language Models for Ethical Ambiguity",
    conference: "SoLaR @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["Pranav Senthilkumar", "Visshwa Bala", "Prisha Jain", "Aneesa Maity"],
    paperLink: "#",
    logoUrl: "/neuripslogo.webp"
  },
  {
    title: "NusaMT-7B: Machine Translation for Low-Resource Indonesian Languages with LLMs",
    conference: "SoLaR @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["William Tan"],
    paperLink: "#",
    logoUrl: "/neuripslogo.webp"
  },
  {
    title: "DiversityMedQA: Assessing Demographic Biases in Medical Diagnosis using LLMs",
    conference: "AIM-FM @ NeurIPS 2024",
    location: "Vancouver, Canada",
    authors: ["Rajat Rawat", "Hudson McBride", "Rajarshi Ghosh", "Dhiyaan Nirmal", "Jong Moon", "Dhruv Alamuri"],
    paperLink: "#",
    logoUrl: "/neuripslogo.webp",
    secondLogoUrl: "/emnlp2024logo.webp",
    secondConference: "EMNLP Positive Impact Track 2024",
    secondLocation: "Miami, Florida"
  },
  {
    title: "AAVENUE: Detecting LLM Biases on NLU Tasks in AAVE via a Novel Benchmark",
    conference: "NeurIPS High School Track 2024",
    location: "Vancouver, Canada",
    authors: ["Abhay Gupta", "Philip Meng", "Ece Yurtseven"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/neuripslogo.webp",
    secondLogoUrl: "/emnlp2024logo.webp",
    secondConference: "EMNLP Positive Impact Track 2024",
    secondLocation: "Miami, Florida"
  }
];

const nlpPublications: PublicationProps[] = [
  {
    title: "Question-Analysis-Prompting Improves LLM Performance in Reasoning Tasks",
    conference: "ACL SRW 2024",
    location: "Bangkok, Thailand",
    authors: ["Dharunish Yugeswardeenoo"],
    paperLink: "#",
    logoUrl: "/acl2024logobanner.webp"
  },
  {
    title: "DiversityMedQA: Assessing Demographic Biases in Medical Diagnosis using LLMs",
    conference: "EMNLP Positive Impact Track 2024",
    location: "Miami, Florida",
    authors: ["Rajat Rawat", "Hudson McBride", "Rajarshi Ghosh", "Dhiyaan Nirmal", "Jong Moon", "Dhruv Alamuri"],
    paperLink: "#",
    logoUrl: "/emnlp2024logo.webp",
    secondLogoUrl: "/neuripslogo.webp",
    secondConference: "AIM-FM @ NeurIPS 2024",
    secondLocation: "Vancouver, Canada"
  },
  {
    title: "AAVENUE: Detecting LLM Biases on NLU Tasks in AAVE via a Novel Benchmark",
    conference: "EMNLP Positive Impact Track 2024",
    location: "Miami, Florida",
    authors: ["Abhay Gupta", "Philip Meng", "Ece Yurtseven"],
    paperLink: "#",
    websiteLink: "#",
    logoUrl: "/emnlp2024logo.webp",
    secondLogoUrl: "/neuripslogo.webp",
    secondConference: "NeurIPS High School Track 2024",
    secondLocation: "Vancouver, Canada"
  },
  {
    title: "Pause-Tuning for Long-Context Comprehension: A Lightweight Approach to LLM Attention Recalibration",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["James Begin", "Namit Agrawal", "Eshan Singh", "Yicheng Fu"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "CLEAR: Contrasting Textual Feedback with Experts and Amateurs for Reasoning",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Andrew Rufail", "Daniel Kim"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Automating Mathematical Proof Generation Using Large Language Model Agents and Knowledge Graphs",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Vincent Li", "Tim K.", "Yule Fu"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Introducing MAPO: Momentum-Aided Gradient Descent Prompt Optimization",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Anthony Cui", "Pranav Nandyalam", "Ethan Cheung", "Aiden Lei"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "ChunkRAG: Novel LLM-Chunk Filtering Method for RAG Systems",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Ishneet Singh", "Ritvik Aggarwal", "Ibrahim Allahverdiyev", "Muhammad Taha"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Truth Decay: Quantifying Multi-Turn Sycophancy in Language Models",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Joshua Liu", "Aarav Jain", "Srihan Vege", "Soham T"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Probing Audio-Generation Capabilities of Text-Based Language Models",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Arjun Prasaath A", "Ujjwal Kaur", "Parteek Kumar", "Souritra K."],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Exploring Taxonomic Emotion Detection via Saliency Mapping and Large Language Model Context Generation",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Tawfik Ali", "Ala Omidfar", "Raaneya", "Sai Phalguna"],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "UniToMBench: Integrating Perspective-Taking to Improve Theory of Mind in LLMs",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Prameshwar Thiyagarajan", "Vaishnavi Parimi", "Soumil Garg", "Zhangir", "Shamant", "Nitin Yarlagadda"],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Rosetta-PL: Propositional Logic as a Benchmark for Large Language Model Reasoning",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Shaun Baek", "Shaun Esua-Mensah", "Cyrus Tsui", "Sejan Vigneswaralingam"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "DIG-DIS: Transformer-Based Models vs State Space Models on Complex Theory of Mind Reasoning Tasks",
    conference: "NAACL SRW 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Aayushya Patel", "Maximilian Prince", "Sahasra Kalakonda", "Adithri Manda", "Hannah You"],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Error Reflection Prompting: Can Large Language Models Successfully Understand Errors",
    conference: "Insights @ NAACL 2025",
    location: "Albuquerque, New Mexico, USA",
    track: "Selected for Oral Presentation",
    authors: ["Jason Li", "Lauren Yraola"],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Self Knowledge-Tracing for Tool Use (SKT-Tool): Helping LLM Agents Understand Their Capabilities in Tool Use",
    conference: "Insights @ NAACL 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Joshua Vigel", "Renpei Cai", "Eleanor Chen", "Anish Neema"],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "MALIBU Benchmark: Multi-Agent LLM Implicit Bias Uncovered",
    conference: "Building Trust in LLMs @ ICLR 2025",
    location: "Singapore",
    authors: ["Imran Mirza", "Cole Huang", "Ishwara Vasista", "Rohan Patil"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp",
    secondLogoUrl: "/iclrlogo.webp",
    secondConference: "NAACL SRW 2025",
    secondLocation: "Albuquerque, New Mexico, USA"
  },
  {
    title: "EnDive: A Cross-Dialect Benchmark for Fairness and Performance in Large Language Models",
    conference: "Building Trust in LLMs @ ICLR 2025",
    location: "Singapore",
    authors: ["Abhay Gupta", "Jacob Cheung", "Philip Meng", "Shayan Sayyed"],
    paperLink: "#",
    logoUrl: "/naacl2025logo.webp",
    secondLogoUrl: "/iclrlogo.webp",
    secondConference: "NAACL SRW 2025",
    secondLocation: "Albuquerque, New Mexico, USA"
  },
  {
    title: "Advancing Uto-Aztecan Language Technologies: A Case Study on Comanche",
    conference: "AmericasNLP @ NAACL 2025",
    location: "Albuquerque, New Mexico, USA",
    authors: ["Jesus Alvarez C", "Daua D. Karajeanes", "Ashley Celeste Prado", "John Ruttan"],
    logoUrl: "/naacl2025logo.webp"
  },
  {
    title: "Pragmatic Metacognitive Prompting Improves LLM Performance on Sarcasm Detection",
    conference: "CHum 2025 @ COLING 2025",
    location: "Abu Dhabi, UAE",
    authors: ["Joshua Lee", "Wyatt Fong", "Alexander Le", "Sur Shah"],
    paperLink: "#",
    logoUrl: "/coling2025.webp"
  },
  {
    title: "Improving LLM Abilities in Idiomatic Translation",
    conference: "LoResLM 2025 @ COLING 2025",
    location: "Abu Dhabi, UAE",
    authors: ["Sundesh Donthi", "Maximilian Spencer", "Om Patel", "Joon Doh", "Eid Rodan"],
    paperLink: "#",
    logoUrl: "/coling2025.webp"
  }
];

const iclrPublications: PublicationProps[] = [
  {
    title: "MALIBU Benchmark: Multi-Agent LLM Implicit Bias Uncovered",
    conference: "Building Trust in LLMs @ ICLR 2025",
    location: "Singapore",
    authors: ["Imran Mirza", "Cole Huang", "Ishwara Vasista", "Rohan Patil"],
    paperLink: "#",
    logoUrl: "/iclrlogo.webp",
    secondLogoUrl: "/naacl2025logo.webp",
    secondConference: "NAACL Insights Workshop 2025",
    secondLocation: "Albuquerque, New Mexico, USA"
  },
  {
    title: "EnDive: A Cross-Dialect Benchmark for Fairness and Performance in Large Language Models",
    conference: "Building Trust in LLMs @ ICLR 2025",
    location: "Singapore",
    authors: ["Abhay Gupta", "Jacob Cheung", "Philip Meng", "Shayan Sayyed"],
    paperLink: "#",
    logoUrl: "/iclrlogo.webp",
    secondLogoUrl: "/naacl2025logo.webp",
    secondConference: "NAACL Insights Workshop 2025",
    secondLocation: "Albuquerque, New Mexico, USA"
  },
  {
    title: "Finding Sparse Autoencoder Representations Of Errors In CoT Prompting",
    conference: "Building Trust in LLMs @ ICLR 2025",
    location: "Singapore",
    authors: ["Justin Theodorus", "V Swaytha", "Shivani Gautam", "Adam Ward", "Mahir Shah"],
    paperLink: "#",
    logoUrl: "/iclrlogo.webp"
  },
  {
    title: "Deconstructing Bias: A Multifaceted Framework for Diagnosing Cultural and Compositional Inequities in Text-to-Image Generative Models",
    conference: "SynthData @ ICLR 2025",
    location: "Singapore",
    authors: ["Muna Said", "Aarib Haider", "Rabia Usman", "Sonia Okon"],
    paperLink: "#",
    logoUrl: "/iclrlogo.webp"
  },
  {
    title: "Efficient Transformers via MPO-Based Low-Rank Factorization and Pruning",
    conference: "Sparsity in LLMs @ ICLR 2025",
    location: "Singapore",
    authors: ["Sam Mikhak", "Venkata Sai Gummidi"],
    paperLink: "#",
    logoUrl: "/iclrlogo.webp"
  }
];

export default Research;
