
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileCode, Sparkle, BookOpen, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050017] text-white relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#050017] via-[#0a0a2e] to-[#050017] z-[-2]"></div>
      <div className="fixed inset-0 circuit-pattern opacity-30 z-[-1]"></div>
      <div className="fixed inset-0 grid-pattern z-[-1]"></div>
      
      <Helmet>
        <title>Research | Algoverse AI Research Program</title>
        <meta name="description" content="Explore our acclaimed conference publications and impactful research at Algoverse." />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container-inner relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">
                Research at Algoverse
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                Learn about our mission, explore our acclaimed conference publications, and delve into past student research papers.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 relative">
          <div className="container-inner">
            <div className="glass-card border border-[#00d2ff]/30 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a47d5]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#00d2ff]"></div>
                  <BookOpen size={20} className="text-[#00d2ff]" />
                  <div className="h-[1px] w-10 bg-gradient-to-r from-[#3a47d5] to-transparent"></div>
                </div>
                
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  Algoverse AI Research is dedicated to empowering students to create authentic and impactful AI research. 
                  Our distinctive emphasis on quality and process enables our students to produce exceptional research 
                  published at leading NLP conferences worldwide. We strive to push the boundaries of large language 
                  models (LLMs) on standard benchmarks while pioneering machine learning applications across diverse disciplines. 
                  This commitment to innovation and excellence sets us apart from other programs.
                </p>
                
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  Our PhD mentors have extensive experience conducting cutting-edge research at top AI institutions 
                  and research labs around the globe. They are deeply invested in each student's project, providing 
                  essential mentorship in scoping research proposals, implementing code, and academic writing. 
                  Through this guidance, our students are uniquely equipped to produce high-quality research papers 
                  and successfully navigate the publication process at prestigious conferences. Past papers of our 
                  students have been cited by researchers at Microsoft, Oxford, and University of Washington.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Conference Categories */}
        <section className="py-16 relative">
          <div className="container-inner">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-4 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Conference Publications</h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#00d2ff]"></div>
                <Award size={16} className="text-[#00d2ff]" />
                <div className="h-[1px] w-10 bg-gradient-to-r from-[#3a47d5] to-transparent"></div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl text-center hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">NeurIPS</h3>
              </div>
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl text-center hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">ACL / EMNLP / NAACL</h3>
              </div>
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl text-center hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">ICLR</h3>
              </div>
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl text-center hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Applied ML</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* NeurIPS Publications */}
        <section className="py-16 relative" id="neurips">
          <div className="container-inner">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-4 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Our NeurIPS Publications</h2>
              <p className="text-white/80 mb-6">
                Neural Information Processing Systems (NeurIPS) is widely recognized as the most prestigious 
                conference in artificial intelligence and machine learning. Publications at NeurIPS represent 
                groundbreaking contributions and are commonly associated with leading universities and industry 
                leaders like Google DeepMind. See more at the NeurIPS official website or view its ranking via Google Scholar.
              </p>
              <p className="text-white/80 mb-6">
                <strong>Note for high schoolers:</strong> NeurIPS acceptances are significantly more difficult 
                compared to high school science fairs. Less than 0.2% of authors at NeurIPS are high school students.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Paper 1 */}
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Translation Bias and Accuracy in Multilingual LLMs for Cross-Language Claim Verification</h3>
                <p className="text-sm text-[#00d2ff] mb-2">Accepted to Attribution @ NeurIPS 2024</p>
                <p className="text-sm text-white/70 mb-4">Vancouver, Canada</p>
                <p className="text-sm text-white/80 mb-4">
                  <strong>Authors:</strong> Aryan Singhal, Veronica Shao, Gary Sun, Ryan Ding
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-sm bg-black/30 hover:bg-black/50 border border-[#00d2ff]/50 text-[#00d2ff] hover:text-white text-center py-1 px-3 rounded transition-all duration-300">
                    Read the Paper
                  </a>
                  <span className="text-sm bg-[#3a47d5]/30 border border-[#3a47d5]/50 text-[#3a47d5]/90 text-center py-1 px-3 rounded">
                    Acceptance to NeurIPS
                  </span>
                </div>
              </div>
              
              {/* Paper 2 */}
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">QIANets for Reduced Latency and Improved Inference Times in CNN Models</h3>
                <p className="text-sm text-[#00d2ff] mb-2">Accepted to Compression @ NeurIPS 2024</p>
                <p className="text-sm text-white/70 mb-4">Vancouver, Canada</p>
                <p className="text-sm text-white/80 mb-4">
                  <strong>Authors:</strong> Zhumazhan Balapanov, Edward Magongo, Vanessa Matvei, Olivia Holmberg
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-sm bg-black/30 hover:bg-black/50 border border-[#00d2ff]/50 text-[#00d2ff] hover:text-white text-center py-1 px-3 rounded transition-all duration-300">
                    Read the Paper
                  </a>
                  <a href="#" className="text-sm bg-black/30 hover:bg-black/50 border border-[#00d2ff]/50 text-[#00d2ff] hover:text-white text-center py-1 px-3 rounded transition-all duration-300">
                    Website
                  </a>
                  <span className="text-sm bg-[#3a47d5]/30 border border-[#3a47d5]/50 text-[#3a47d5]/90 text-center py-1 px-3 rounded">
                    Acceptance to NeurIPS
                  </span>
                </div>
              </div>
              
              {/* More papers would continue... */}
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center justify-center p-1 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] rounded-full">
                <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#050017]">
                  <span>NeurIPS 2024</span>
                  <span>NeurIPS 2024</span>
                  <span>NeurIPS 2024</span>
                  <span>NeurIPS 2024</span>
                  <span>NeurIPS 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Paper Citations Section */}
        <section className="py-16 relative">
          <div className="container-inner">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-4 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Paper Citations</h2>
              <p className="text-white/80 mb-6">
                Undergraduate research cited by premier institutions is already a rare and exceptional achievement—demonstrating 
                the quality, depth, and real-world impact of our students' work. But at Algoverse, even high school students 
                regularly earn citations from researchers at top universities and labs—a nearly unheard-of accomplishment in academia. 
                Citations represent more than just recognition; they reflect meaningful contributions to science itself. 
                The fact that our students' discoveries are informing research conducted by seasoned scholars underscores 
                the extraordinary rigor, originality, and influence of their work.
              </p>
            </motion.div>
            
            <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl mb-12 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">26</h3>
              <p className="text-xl text-[#00d2ff]">Citations in the past year</p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Example Citations</h3>
            <div className="space-y-4">
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">PaperBench: Evaluating AI's Ability to Replicate AI Research.</h4>
                <p className="text-sm text-[#00d2ff]">OpenAI</p>
              </div>
              
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">One Language, Many Gaps: Evaluating Dialect Fairness and Robustness of Large Language Models in Reasoning Tasks</h4>
                <p className="text-sm text-[#00d2ff]">Microsoft, Oxford, University of Washington, others</p>
              </div>
              
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h4 className="text-xl font-bold text-white mb-2">GPT-4o Reads the Mind in the Eyes</h4>
                <p className="text-sm text-[#00d2ff]">Princeton, MIT, and other universities</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* NLP Publications Section */}
        <section className="py-16 relative" id="nlp">
          <div className="container-inner">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-lg mb-4 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Our NLP Publications</h2>
              <p className="text-white/80 mb-6">
                ACL, EMNLP, and NAACL are widely recognized as the world's most prestigious conferences in Natural Language 
                Processing (NLP). Top AI labs, including Stanford AI Lab (SAIL) and Berkeley AI Research (BAIR), regularly 
                submit their most influential research on large language models (LLMs) and related topics to these venues. 
                Known for rigorous peer-review standards, these conferences set the benchmark for groundbreaking advancements in NLP. 
                For more details, visit the official websites for ACL, EMNLP, and NAACL, or view their rankings on Google Scholar.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Paper 1 */}
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Question-Analysis-Prompting Improves LLM Performance in Reasoning Tasks</h3>
                <p className="text-sm text-[#00d2ff] mb-2">Accepted to ACL SRW 2024</p>
                <p className="text-sm text-white/70 mb-4">Bangkok, Thailand</p>
                <p className="text-sm text-white/80 mb-4">
                  <strong>Author:</strong> Dharunish Yugeswardeenoo
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-sm bg-black/30 hover:bg-black/50 border border-[#00d2ff]/50 text-[#00d2ff] hover:text-white text-center py-1 px-3 rounded transition-all duration-300">
                    Read the Paper
                  </a>
                  <span className="text-sm bg-[#3a47d5]/30 border border-[#3a47d5]/50 text-[#3a47d5]/90 text-center py-1 px-3 rounded">
                    Acceptance to ACL SRW
                  </span>
                </div>
              </div>
              
              {/* Paper 2 */}
              <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-xl hover:border-[#00d2ff]/60 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">DiversityMedQA: Assessing Demographic Biases in Medical Diagnosis using LLMs</h3>
                <p className="text-sm text-[#00d2ff] mb-2">Accepted to AIM-FM @ NeurIPS 2024</p>
                <p className="text-sm text-[#00d2ff] mb-2">Accepted to EMNLP Positive Impact Track 2024</p>
                <p className="text-sm text-white/70 mb-4">Vancouver, Canada & Miami, Florida</p>
                <p className="text-sm text-white/80 mb-4">
                  <strong>Authors:</strong> Rajat Rawat, Hudson McBride, Rajarshi Ghosh, Dhiyaan Nirmal, Jong Moon, Dhruv Alamuri
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="text-sm bg-black/30 hover:bg-black/50 border border-[#00d2ff]/50 text-[#00d2ff] hover:text-white text-center py-1 px-3 rounded transition-all duration-300">
                    Read the Paper
                  </a>
                  <span className="text-sm bg-[#3a47d5]/30 border border-[#3a47d5]/50 text-[#3a47d5]/90 text-center py-1 px-3 rounded">
                    Acceptance to NeurIPS
                  </span>
                  <span className="text-sm bg-[#3a47d5]/30 border border-[#3a47d5]/50 text-[#3a47d5]/90 text-center py-1 px-3 rounded">
                    Acceptance to EMNLP
                  </span>
                </div>
              </div>
              
              {/* More papers would continue... */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
