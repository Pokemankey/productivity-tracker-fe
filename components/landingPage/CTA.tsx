import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="w-full bg-linear-to-r from-indigo-600 to-purple-600 px-10 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3">
        <h1 className="text-center text-4xl font-bold text-white lg:text-6xl">
          Ready to Transform Your Productivity?
        </h1>
        <p className="text-md mt-2 text-center leading-relaxed font-light text-white md:text-lg">
          Join thousands of users achieving their goals with FlowState
        </p>
        <div className="mt-8">
          <Button variant="secondary" size="lg">
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}
