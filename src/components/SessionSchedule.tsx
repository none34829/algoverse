
import { motion } from "framer-motion";
import { SessionInfo } from "@/types";
import { Calendar, Clock } from "lucide-react";

const sessions: SessionInfo[] = [
  {
    title: "Spring 2025 Session",
    dates: "March 16 - June 1, 2025",
    lectureSchedules: [
      "Lecture: Sunday, 3:00 - 4:30pm PT"
    ]
  },
  {
    title: "Summer 2025 Sessions",
    dates: "May 25 - August 17, 2025",
    lectureSchedules: [
      "Lecture: Sunday, 1:00 - 2:30pm PT"
    ]
  },
  {
    title: "",
    dates: "June 7 - August 31, 2025",
    lectureSchedules: [
      "Lecture: Saturday, 10:00 - 11:30am PT",
      "- or -",
      "Lecture: Sunday, 3:00 - 4:30pm PT"
    ]
  },
  {
    title: "",
    dates: "June 21 - September 14, 2025",
    lectureSchedules: [
      "Lecture: Saturday, 1:00 - 2:30pm PT",
      "- or -",
      "Lecture: Sunday, 10:00 - 11:30am PT"
    ]
  },
  {
    title: "",
    dates: "July 13 - October 5, 2025",
    lectureSchedules: [
      "Lecture: Saturday, 6:00 - 7:30pm PT"
    ]
  }
];

const SessionSchedule = () => {
  return (
    <section className="section bg-algoverse-50">
      <div className="container-inner">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">2025 Program Sessions</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            Choose from our multiple session options to find the schedule that works best for you.
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d2ff] to-[#3a47d5] hidden md:block"></div>
          
          <div className="space-y-8">
            {sessions.map((session, index) => {
              const isFirst = index === 0;
              const isSecond = index === 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 transform -translate-x-1/2 hidden md:block">
                    <div className={`w-4 h-4 rounded-full ${isFirst ? 'bg-[#00d2ff]' : isSecond ? 'bg-[#3a47d5]' : 'bg-gradient-to-r from-[#00d2ff] to-[#3a47d5]'} border-2 border-white shadow-lg`}></div>
                  </div>
                  
                  <div className="md:ml-12 bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="bg-algoverse-50 rounded-lg px-4 py-2 inline-flex items-center">
                        <Calendar className="h-5 w-5 text-algoverse-600 mr-2" />
                        <span className="font-semibold text-algoverse-800">{session.dates}</span>
                      </div>
                      
                      {session.title && (
                        <h3 className="text-xl font-bold text-algoverse-800">{session.title}</h3>
                      )}
                    </div>
                    
                    <div className="bg-algoverse-50/50 rounded-lg p-4 space-y-3">
                      {session.lectureSchedules.map((schedule, idx) => (
                        <p 
                          key={idx} 
                          className={`${schedule === "- or -" 
                            ? 'text-center text-gray-500 italic my-2 bg-white/50 rounded-md py-1' 
                            : 'text-gray-700 flex items-center'}`}
                        >
                          {schedule !== "- or -" && <Clock className="h-4 w-4 text-algoverse-600 mr-2 flex-shrink-0" />}
                          {schedule}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-algoverse-600 text-white px-6 py-3 rounded-lg shadow-md">
            <p className="font-medium">
              <span className="mr-2 opacity-80">Deadline:</span> Sunday, May 4, 11:59 pm PT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SessionSchedule;
