import {
  Target,
  ListTodo,
  Clock,
  Sparkles,
  StickyNote,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "Goal Management",
    description:
      "Create and organize your goals with ease. Break down big dreams into achievable milestones.",
    icon: <Target size={30} />,
    gradient: "bg-gradient-to-br from-purple-600 to-purple-600/80",
    bg: "bg-purple-50",
  },
  {
    title: "Smart Tasks",
    description:
      "Organize tasks under each goal. Track progress and stay on top of your action items.",
    icon: <ListTodo size={30} />,
    gradient: "bg-gradient-to-br from-blue-500 to-blue-500/80",
    bg: "bg-blue-50",
  },
  {
    title: "Session Tracking",
    description:
      "Start focused work sessions with built-in notes. Pause and resume whenever you need.",
    icon: <Clock size={30} />,
    gradient: "bg-gradient-to-br from-teal-600 to-teal-600/80",
    bg: "bg-teal-50",
  },
  {
    title: "AI Task Generator",
    description:
      "Describe your goal and let AI create a detailed action plan with timelines automatically.",
    icon: <Sparkles size={30} />,
    gradient: "bg-gradient-to-br from-violet-500 to-violet-500/80",
    bg: "bg-violet-50",
  },
  {
    title: "Session Notes",
    description:
      "Capture ideas and insights during work sessions. Keep everything organized in one place.",
    icon: <StickyNote size={30} />,
    gradient: "bg-gradient-to-br from-orange-500 to-orange-500/80",
    bg: "bg-orange-50",
  },
  {
    title: "Progress Analytics",
    description:
      "Visualize your productivity with insightful charts and track your journey to success.",
    icon: <BarChart3 size={30} />,
    gradient: "bg-gradient-to-br from-pink-600 to-pink-600/80",
    bg: "bg-pink-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full scroll-mt-20 bg-white px-10 py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold md:text-left lg:text-6xl">
          Everything You Need to Succeed
        </h1>
        <p className="mt-3 text-center text-lg text-gray-600 md:text-left">
          Powerful features designed to keep you focused and productive
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`flex w-full flex-col gap-4 rounded-2xl ${feature.bg} p-8`}
            >
              <div
                className={`${feature.gradient} inline-flex w-fit rounded-xl p-4 text-white`}
              >
                {feature.icon}
              </div>
              <h2 className="text-2xl font-bold">{feature.title}</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
