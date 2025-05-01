
import { DollarSign, Award } from "lucide-react";

const ProgramCost = () => {
  return (
    <section className="section py-20 relative bg-gradient-to-b from-algoverse-800 to-algoverse-900">
      <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      <div className="container-inner relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <DollarSign size={30} className="text-algoverse-400 mr-3" />
              <h2 className="heading-lg text-white">Program Fee</h2>
            </div>
            <div className="space-y-6">
              <p className="paragraph text-algoverse-100">
                The total cost of the program is <span className="font-bold text-white">$2,325</span> (~$60 per instructional hour).
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-algoverse-700 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-algoverse-400"></div>
                  </div>
                  <span className="text-algoverse-200">Priced at a fraction of other research programs</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-algoverse-700 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-algoverse-400"></div>
                  </div>
                  <span className="text-algoverse-200">Covers compute costs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Award size={30} className="text-algoverse-400 mr-3" />
              <h2 className="heading-lg text-white">Scholarships</h2>
            </div>
            <div className="space-y-6">
              <p className="paragraph text-algoverse-100">
                Algoverse is committed to making its AI Research Program accessible to all students.
              </p>
              <p className="paragraph text-algoverse-100">
                We offer scholarships to exceptional applicants who cannot afford the program fee.
              </p>
              <p className="mt-6 paragraph-sm italic text-algoverse-300">
                Our program is available to undergraduate students, high school students, and industry professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCost;
