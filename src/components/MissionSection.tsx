import { motion } from "framer-motion";
 import { BrainCog, Sparkles, GraduationCap, Code } from "lucide-react";
 
 const features = [
   {
     icon: <BrainCog className="h-6 w-6 text-[#00d2ff]" />,
     title: "Research Excellence",
     description: "Access to cutting-edge AI research methodologies and mentorship from experts in the field."
   },
   {
     icon: <Sparkles className="h-6 w-6 text-[#00d2ff]" />,
     title: "Industry Relevance",
     description: "Practical skills and knowledge that directly apply to careers in AI and machine learning."
   },
   {
     icon: <GraduationCap className="h-6 w-6 text-[#00d2ff]" />,
     title: "Academic Advancement",
     description: "Enhanced prospects for admission to top universities for undergraduate and graduate programs."
   },
   {
     icon: <Code className="h-6 w-6 text-[#00d2ff]" />,
     title: "Hands-On Experience",
     description: "Real-world AI projects and challenges that build practical expertise and portfolio materials."
   }
 ];
 
 const MissionSection = () => {
   return (
     <section id="mission" className="relative py-20">
       <div className="container-inner">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: true }}
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space">
               Our <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Mission</span>
             </h2>
             
             <p className="text-white/80 mb-8 leading-relaxed">
               At Algoverse, we're dedicated to bridging the gap between academic AI research and practical industry applications. Our mission is to democratize access to high-quality AI education, creating pathways for students to thrive in this rapidly evolving field regardless of their background.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {features.map((feature, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="glass-card p-5 border border-[#00d2ff]/20 hover:border-[#00d2ff]/40 transition-all duration-300"
                 >
                   <div className="flex items-center mb-3">
                     <div className="mr-3 rounded-md bg-[#00d2ff]/10 p-2">
                       {feature.icon}
                     </div>
                     <h3 className="font-bold text-[#00d2ff]">{feature.title}</h3>
                   </div>
                   <p className="text-sm text-white/70">{feature.description}</p>
                 </motion.div>
               ))}
             </div>
           </motion.div>
           
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7 }}
             viewport={{ once: true }}
             className="relative"
           >
             <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] rounded-lg opacity-30 blur-sm animate-pulse-slow"></div>
             <div className="glass-card border-[#00d2ff]/30 p-6 relative h-full">
               <h3 className="text-2xl font-bold mb-4 font-space">
                 Making AI <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Accessible</span>
               </h3>
               
               <p className="text-white/80 mb-6">
                 We believe that everyone with passion and dedication should have the opportunity to learn from the brightest minds in AI research. Our program is designed to:
               </p>
               
               <ul className="space-y-3">
                 <li className="flex items-start">
                   <span className="text-[#00d2ff] mr-2 mt-1">•</span>
                   <span className="text-white/80">Connect students with mentors from leading research labs and tech companies</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-[#00d2ff] mr-2 mt-1">•</span>
                   <span className="text-white/80">Provide hands-on experience with cutting-edge AI technologies</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-[#00d2ff] mr-2 mt-1">•</span>
                   <span className="text-white/80">Foster a collaborative community of learners and innovators</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-[#00d2ff] mr-2 mt-1">•</span>
                   <span className="text-white/80">Prepare students for success in higher education and industry careers</span>
                 </li>
               </ul>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default MissionSection;