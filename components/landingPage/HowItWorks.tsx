const steps = [
  {
    number: 1,
    title: "Set Your Goals",
    description: "Define what you want to achieve and add it to your dashboard",
    gradient: "from-purple-600 to-purple-400",
  },
  {
    number: 2,
    title: "Generate Tasks",
    description: "Let AI create a detailed action plan or add tasks manually",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    number: 3,
    title: "Start Sessions",
    description: "Begin focused work sessions and track your time effortlessly",
    gradient: "from-emerald-600 to-emerald-400",
  },
  {
    number: 4,
    title: "Achieve Success",
    description: "Complete tasks, reach milestones, and celebrate your wins",
    gradient: "from-purple-600 to-purple-400",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full scroll-mt-20 bg-[#EEF2FF] px-10 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Get started in minutes and transform your productivity
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br ${step.gradient} shadow-lg`}
              >
                <span className="text-4xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
