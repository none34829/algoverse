
import InfoCard from "./InfoCard";
import { Calendar, Users, BrainCircuit, Code } from "lucide-react";

const ProgramInfo = () => {
  return (
    <section id="program" className="section relative py-20 bg-gradient-to-b from-algoverse-900 to-algoverse-800">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="container-inner relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-white">Program Information</h2>
          <p className="paragraph text-algoverse-100 max-w-3xl mx-auto">
            Our AI Research program offers students hands-on experience with state-of-the-art AI 
            research under the guidance of expert mentors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="Schedule"
            icon={<Calendar size={24} />}
            className="backdrop-blur-md bg-white/10 border border-white/10 hover:border-algoverse-400/30"
          >
            <p className="mb-3 text-algoverse-100">
              The AI Research program is a 12-week online program with two weekly meetings.
            </p>
            <ul className="space-y-2 list-disc list-inside text-algoverse-200">
              <li>Optional office hours are available</li>
              <li>~5 to 10 hours per week</li>
              <li>Flexibility for further exploration</li>
            </ul>
            <p className="mt-3 text-sm text-algoverse-300">
              While our program concludes at the end of the 12 weeks, you'll still have access 
              to asynchronous support via Slack from our mentors, whenever they are available.
            </p>
          </InfoCard>

          <InfoCard
            title="Project Groups"
            icon={<Users size={24} />}
            className="backdrop-blur-md bg-white/10 border border-white/10 hover:border-algoverse-400/30"
          >
            <p className="mb-3 text-algoverse-100">
              Project groups consist of:
            </p>
            <ul className="space-y-2 list-disc list-inside text-algoverse-200">
              <li>A close-knit team of 3 to 4 students.</li>
              <li>A dedicated mentor who collaborates intimately with the team.</li>
            </ul>
          </InfoCard>

          <InfoCard
            title="Mentorship"
            icon={<BrainCircuit size={24} />}
            className="backdrop-blur-md bg-white/10 border border-white/10 hover:border-algoverse-400/30"
          >
            <p className="mb-3 text-algoverse-100">
              Receive mentorship from experts to scope a novel, feasible, and impactful research proposal.
            </p>
            <p className="mb-2 text-algoverse-100">Mentors help throughout the entire process:</p>
            <ul className="space-y-1 list-disc list-inside text-algoverse-200">
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
