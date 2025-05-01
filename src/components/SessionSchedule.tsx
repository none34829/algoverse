
import { SessionInfo } from "@/types";

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow
                ${!session.title && index > 0 ? 'md:col-span-1' : ''}`}
            >
              {session.title && (
                <h3 className="text-xl font-bold text-algoverse-800 mb-3">{session.title}</h3>
              )}
              <p className="font-semibold text-gray-800 mb-3">{session.dates}</p>
              <div className="space-y-1">
                {session.lectureSchedules.map((schedule, idx) => (
                  <p 
                    key={idx} 
                    className={`${schedule === "- or -" ? 'text-center text-gray-500 italic my-1' : 'text-gray-700'}`}
                  >
                    {schedule}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="font-medium text-algoverse-700">
            Summer Deadline: Sunday, May 4, 11:59 pm PT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionSchedule;
