
const ProgramCost = () => {
  return (
    <section className="section bg-white">
      <div className="container-inner">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h2 className="heading-lg mb-6">Program Fee</h2>
            <div className="space-y-4">
              <p className="paragraph text-gray-700">
                The total cost of the program is <span className="font-semibold">$2,325</span> (~$60 per instructional hour).
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Priced at a fraction of other research programs</li>
                <li>Covers compute costs</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="heading-lg mb-6">Scholarships</h2>
            <div className="space-y-4">
              <p className="paragraph text-gray-700">
                Algoverse is committed to making its AI Research Program accessible to all students.
              </p>
              <p className="paragraph text-gray-700">
                We offer scholarships to exceptional applicants who cannot afford the program fee.
              </p>
              <p className="mt-6 paragraph-sm italic text-gray-600">
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
