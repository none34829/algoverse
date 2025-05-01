
import InfoCard from "./InfoCard";
import { Calendar, Users, Book } from "lucide-react";

const ProgramInfo = () => {
  return (
    <section id="program" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-inner">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Program Information</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            Our AI Research program offers students hands-on experience with state-of-the-art AI 
            research under the guidance of expert mentors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="Schedule"
            icon={<Calendar size={24} />}
          >
            <p className="mb-3">
              The AI Research program is a 12-week online program with two weekly meetings.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Optional office hours are available</li>
              <li>~5 to 10 hours per week</li>
              <li>Flexibility for further exploration</li>
            </ul>
            <p className="mt-3 text-sm">
              While our program concludes at the end of the 12 weeks, you'll still have access 
              to asynchronous support via Slack from our mentors, whenever they are available.
            </p>
          </InfoCard>

          <InfoCard
            title="Project Groups"
            icon={<Users size={24} />}
          >
            <p className="mb-3">
              Project groups consist of:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>A close-knit team of 3 to 4 students.</li>
              <li>A dedicated mentor who collaborates intimately with the team.</li>
            </ul>
          </InfoCard>

          <InfoCard
            title="Mentorship"
            icon={<Book size={24} />}
          >
            <p className="mb-3">
              Receive mentorship from experts to scope a novel, feasible, and impactful research proposal.
            </p>
            <p className="mb-2">Mentors help throughout the entire process:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Literature review and ideation</li>
              <li>Code implementation and model training</li>
              <li>Drafting of the manuscript</li>
              <li>Conference submission</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default ProgramInfo;
