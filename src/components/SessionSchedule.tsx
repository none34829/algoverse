
import { motion } from "framer-motion";
import { SessionInfo } from "@/types";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "./ui/badge";

const sessions: SessionInfo[] = [
  {
    title: "Spring 2025 Session",
    dates: "March 16 - June 1, 2025",
    lectureSchedules: [
      "Lecture: Sunday, 3:00 - 4:30pm PT"
    ],
    season: "Spring"
  },
  {
    title: "Summer 2025 Session",
    dates: "May 25 - August 17, 2025",
    lectureSchedules: [
      "Lecture: Sunday, 1:00 - 2:30pm PT"
    ],
    season: "Summer"
  },
  {
    title: "Summer 2025 Session",
    dates: "June 7 - August 31, 2025",
    lectureSchedules: [
      "Lecture: Saturday, 10:00 - 11:30am PT",
      "- or -",
      "Lecture: Sunday, 3:00 - 4:30pm PT"
    ],
    season: "Summer"
  },
  {
    title: "Summer 2025 Session",
    dates: "June 21 - September 14, 2025",
    lectureSchedules: [
      "Lecture: Saturday, 1:00 - 2:30pm PT",
      "- or -",
      "Lecture: Sunday, 10:00 - 11:30am PT"
    ],
    season: "Summer"
  },
  {
    title: "Summer 2025 Session",
    dates: "July 13 - October 5, 2025",
    lectureSchedules: [
      "Lecture: Saturday, 6:00 - 7:30pm PT"
    ],
    season: "Summer"
  }
];

// Group sessions by season
const groupedSessions: Record<string, SessionInfo[]> = sessions.reduce((acc, session) => {
  const season = session.season || 'Other';
  if (!acc[season]) {
    acc[season] = [];
  }
  acc[season].push(session);
  return acc;
}, {} as Record<string, SessionInfo[]>);

const seasonColors = {
  Spring: {
    badge: 'bg-green-100 text-green-800 border-green-200',
    dot: 'bg-green-500',
    card: 'border-green-100 hover:border-green-300'
  },
  Summer: {
    badge: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    dot: 'bg-yellow-500',
    card: 'border-yellow-100 hover:border-yellow-300'
  },
  Fall: {
    badge: 'bg-orange-100 text-orange-800 border-orange-200',
    dot: 'bg-orange-500',
    card: 'border-orange-100 hover:border-orange-300'
  },
  Winter: {
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
    dot: 'bg-blue-500',
    card: 'border-blue-100 hover:border-blue-300'
  },
  Other: {
    badge: 'bg-gray-100 text-gray-800 border-gray-200',
    dot: 'bg-gray-500',
    card: 'border-gray-100 hover:border-gray-300'
  }
};

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

        {Object.entries(groupedSessions).map(([season, seasonSessions]) => (
          <div key={season} className="mb-12 last:mb-0">
            <div className="flex items-center mb-6">
              <div className={`w-3 h-3 rounded-full ${seasonColors[season as keyof typeof seasonColors]?.dot} mr-2`} />
              <h3 className="text-2xl font-bold text-algoverse-800">{season} 2025</h3>
            </div>
            
            <div className="relative">
              {/* Timeline connector line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-algoverse-300 to-algoverse-500 hidden md:block"></div>
              
              <div className="space-y-6">
                {seasonSessions.map((session, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 transform -translate-x-1/2 hidden md:block">
                      <div className={`w-4 h-4 rounded-full ${seasonColors[season as keyof typeof seasonColors]?.dot} border-2 border-white shadow-lg`}></div>
                    </div>
                    
                    <div className={`md:ml-12 bg-white rounded-xl p-6 border shadow-md hover:shadow-lg transition-all ${seasonColors[season as keyof typeof seasonColors]?.card}`}>
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="bg-algoverse-50 rounded-lg px-4 py-2 inline-flex items-center">
                          <Calendar className="h-5 w-5 text-algoverse-600 mr-2" />
                          <span className="font-semibold text-algoverse-800">{session.dates}</span>
                        </div>
                        
                        <Badge className={seasonColors[season as keyof typeof seasonColors]?.badge}>
                          {season} Cohort
                        </Badge>
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
                ))}
              </div>
            </div>
          </div>
        ))}

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
