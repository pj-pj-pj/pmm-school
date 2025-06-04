"use client";

export default function ProblemSolution() {
  const steps = [
    {
      number: 1,
      title: "Master PMM foundations",
      description: "with real case studies and expert insights",
    },
    {
      number: 2,
      title: "Build a standout resume",
      description: "that catches recruiters' attention",
    },
    {
      number: 3,
      title: "Ace your interviews",
      description: "with detailed mock interview breakdowns",
    },
    {
      number: 4,
      title: "Make an impact",
      description: "with simple, effective PMM frameworks",
    },
  ];

  return (
    <section
      id="problem-solution"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Here's how I can help:
          </h2>
        </div>

        <div className="border-t border-gray-200 pt-6 mb-6"></div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-800">
              I've turned <span className="font-bold">10+ years</span> of PMM
              experience at Google and startups into a{" "}
              <span className="font-bold">step-by-step system</span> to help
              you:
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center  gap-4 bg-violet-50 border-[1px] border-violet-500 px-3 py-4 pl-5 rounded-2xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
