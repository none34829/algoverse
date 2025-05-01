
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";
import { Calendar, Users, BrainCircuit, Sparkle, Zap, GraduationCap } from "lucide-react";

const ProgramInfo = () => {
  return (
    <section id="program" className="section relative py-24 bg-gradient-to-b from-transparent to-[#070021] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Neural network animated connections */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i}
            className="neural-connection"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              transformOrigin: 'center',
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-inner relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Program <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Information</span>
          </h2>
          <p className="paragraph text-algoverse-100 max-w-3xl mx-auto">
            Our AI Research program offers students hands-on experience with state-of-the-art AI 
            research under the guidance of expert mentors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InfoCard
              title="Schedule"
              icon={<Calendar size={24} className="text-[#00d2ff] animate-pulse-slow" />}
              className="h-full backdrop-blur-md bg-white/5 border border-white/10 hover:border-algoverse-400/30 group"
            >
              <p className="mb-4 text-algoverse-100">
                The AI Research program is a 12-week online program with:
              </p>
              
              <div className="space-y-4 mb-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex items-center justify-center h-6 w-6 rounded-full bg-[#00d2ff]/10">
                    <Zap size={14} className="text-[#00d2ff]" />
                  </div>
                  <p className="text-algoverse-200">Two structured weekly meetings</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex items-center justify-center h-6 w-6 rounded-full bg-[#00d2ff]/10">
                    <Zap size={14} className="text-[#00d2ff]" />
                  </div>
                  <p className="text-algoverse-200">Optional office hours</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 flex items-center justify-center h-6 w-6 rounded-full bg-[#00d2ff]/10">
                    <Zap size={14} className="text-[#00d2ff]" />
                  </div>
                  <p className="text-algoverse-200">~5 to 10 hours per week commitment</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#00d2ff]/10">
                <p className="text-sm text-algoverse-300">
                  While our program concludes at the end of the 12 weeks, you'll still have access 
                  to asynchronous support via Slack from our mentors, whenever they are available.
                </p>
              </div>
            </InfoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoCard
              title="Project Groups"
              icon={<Users size={24} className="text-[#00d2ff] animate-pulse-slow" />}
              className="h-full backdrop-blur-md bg-white/5 border border-white/10 hover:border-algoverse-400/30"
            >
              <p className="mb-6 text-algoverse-100">
                Project groups consist of:
              </p>
              
              <div className="space-y-6 mb-4">
                <div className="relative">
                  <div className="absolute -left-2 -top-2 w-10 h-10 bg-[#00d2ff]/10 rounded-full blur-md"></div>
                  <div className="relative bg-[#00d2ff]/10 backdrop-blur-sm rounded-lg p-4 border border-[#00d2ff]/20">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Sparkle size={16} className="text-[#00d2ff] mr-2" />
                      Student Team
                    </h4>
                    <p className="text-white/80 text-sm">
                      A close-knit team of 3 to 4 students collaborating on cutting-edge research.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -right-2 -top-2 w-10 h-10 bg-[#3a47d5]/10 rounded-full blur-md"></div>
                  <div className="relative bg-[#3a47d5]/10 backdrop-blur-sm rounded-lg p-4 border border-[#3a47d5]/20">
                    <h4 className="font-semibold text-white mb-2 flex items-center">
                      <Sparkle size={16} className="text-[#3a47d5] mr-2" />
                      Dedicated Mentor
                    </h4>
                    <p className="text-white/80 text-sm">
                      An expert researcher who works closely with the team throughout the program.
                    </p>
                  </div>
                </div>
              </div>
            </InfoCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <InfoCard
              title="Mentorship"
              icon={<BrainCircuit size={24} className="text-[#00d2ff] animate-pulse-slow" />}
              className="h-full backdrop-blur-md bg-white/5 border border-white/10 hover:border-algoverse-400/30"
            >
              <p className="mb-4 text-algoverse-100">
                Receive mentorship from experts to scope a novel, feasible, and impactful research proposal.
              </p>
              
              <div className="space-y-1 mb-4">
                <p className="text-lg font-semibold text-white">Mentors help with:</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-[#00d2ff]/10 rounded-lg p-3 border border-[#00d2ff]/20 flex flex-col items-center justify-center text-center">
                    <GraduationCap size={20} className="text-[#00d2ff] mb-2" />
                    <span className="text-sm text-white/80">Literature review & ideation</span>
                  </div>
                  <div className="bg-[#00d2ff]/10 rounded-lg p-3 border border-[#00d2ff]/20 flex flex-col items-center justify-center text-center">
                    <BrainCircuit size={20} className="text-[#00d2ff] mb-2" />
                    <span className="text-sm text-white/80">Implementation & training</span>
                  </div>
                  <div className="bg-[#00d2ff]/10 rounded-lg p-3 border border-[#00d2ff]/20 flex flex-col items-center justify-center text-center">
                    <Calendar size={20} className="text-[#00d2ff] mb-2" />
                    <span className="text-sm text-white/80">Manuscript drafting</span>
                  </div>
                  <div className="bg-[#00d2ff]/10 rounded-lg p-3 border border-[#00d2ff]/20 flex flex-col items-center justify-center text-center">
                    <Sparkle size={20} className="text-[#00d2ff] mb-2" />
                    <span className="text-sm text-white/80">Conference submission</span>
                  </div>
                </div>
              </div>
            </InfoCard>
          </motion.div>
        </div>
        
        {/* Program sessions timeline */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent mb-4">2025 Program Sessions</h3>
            <p className="text-white/80 max-w-xl mx-auto">
              Choose from our multiple session options to find the schedule that works best for you.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d2ff] to-[#3a47d5] transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Spring 2025 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-10 text-right hidden md:block">
                    <h4 className="text-xl font-bold text-white mb-2">Spring 2025 Session</h4>
                    <div className="glass-card inline-block px-4 py-2">March 16 - June 1, 2025</div>
                  </div>
                  
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4 hidden md:block">
                    <div className="w-6 h-6 rounded-full bg-[#00d2ff] border-4 border-[#050017]"></div>
                  </div>
                  
                  <div className="md:w-1/2 pl-10 md:pt-0 pt-4 block md:hidden">
                    <h4 className="text-xl font-bold text-white mb-2">Spring 2025 Session</h4>
                    <div className="glass-card inline-block px-4 py-2">March 16 - June 1, 2025</div>
                  </div>
                  
                  <div className="md:w-1/2 pl-10">
                    <div className="glass-card p-6">
                      <p className="font-medium text-[#00d2ff]">Lecture: Sunday, 3:00 - 4:30pm PT</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Summer 2025 */}
              <div className="relative">
                <div className="md:flex items-center">
                  <div className="md:w-1/2 pr-10">
                    <div className="glass-card p-6 text-right">
                      <p className="font-medium text-[#00d2ff]">Lecture: Sunday, 1:00 - 2:30pm PT</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4 hidden md:block">
                    <div className="w-6 h-6 rounded-full bg-[#3a47d5] border-4 border-[#050017]"></div>
                  </div>
                  
                  <div className="md:w-1/2 pl-10 md:pt-0 pt-4">
                    <h4 className="text-xl font-bold text-white mb-2">Summer 2025 Sessions</h4>
                    <div className="glass-card inline-block px-4 py-2">May 25 - August 17, 2025</div>
                  </div>
                </div>
              </div>
              
              {/* Additional summer sessions */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    dates: "June 7 - August 31, 2025",
                    lectures: ["Lecture: Saturday, 10:00 - 11:30am PT", "- or -", "Lecture: Sunday, 3:00 - 4:30pm PT"]
                  },
                  {
                    dates: "June 21 - September 14, 2025",
                    lectures: ["Lecture: Saturday, 1:00 - 2:30pm PT", "- or -", "Lecture: Sunday, 10:00 - 11:30am PT"]
                  },
                  {
                    dates: "July 13 - October 5, 2025",
                    lectures: ["Lecture: Saturday, 6:00 - 7:30pm PT"]
                  }
                ].map((session, index) => (
                  <motion.div 
                    key={index}
                    className="glass-card p-6 border border-[#00d2ff]/30 hover:border-[#00d2ff]/60 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <p className="font-semibold text-white mb-3">{session.dates}</p>
                    <div className="space-y-1">
                      {session.lectures.map((schedule, idx) => (
                        <p 
                          key={idx} 
                          className={schedule === "- or -" 
                            ? 'text-center text-[#00d2ff] italic my-1' 
                            : 'text-white/70'}
                        >
                          {schedule}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="inline-block glass-card px-6 py-3 text-[#00d2ff] font-semibold">
              Summer Deadline: Sunday, May 4, 11:59 pm PT
            </p>
          </div>
        </motion.div>
        
        {/* Program costs section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card border border-[#00d2ff]/30 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00d2ff]/10 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 bg-[#00d2ff]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl text-[#00d2ff]">$</span>
                </span>
                Program Fee
              </h3>
              
              <div className="space-y-6">
                <p className="text-xl">
                  The total cost of the program is <span className="text-2xl font-bold text-[#00d2ff]">$2,325</span>
                </p>
                <p className="text-white/70">
                  (~$60 per instructional hour)
                </p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00d2ff]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#00d2ff]"></div>
                    </div>
                    <span className="text-white/80">Priced at a fraction of other research programs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#00d2ff]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[#00d2ff]"></div>
                    </div>
                    <span className="text-white/80">Covers compute costs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card border border-[#00d2ff]/30 p-8 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#3a47d5]/10 rounded-full blur-xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 bg-[#3a47d5]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl text-[#3a47d5]">★</span>
                </span>
                Scholarships
              </h3>
              
              <div className="space-y-6">
                <p className="text-white/90">
                  Algoverse is committed to making its AI Research Program accessible to all students.
                </p>
                <p className="text-white/90">
                  We offer scholarships to exceptional applicants who cannot afford the program fee.
                </p>
                <p className="mt-6 italic text-white/70">
                  Our program is available to undergraduate students, high school students, and industry professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramInfo;
