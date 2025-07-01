import { AlertTriangle, Clock, ShieldCheck, Compass, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Overwhelming Workload",
    description:
      "Are you overwhelmed by the number of job seekers you're trying to support, struggling to provide each one with the personalized guidance they deserve?",
  },
  {
    icon: Clock,
    title: "Limited Resources",
    description:
      "Do tight budgets and limited staff leave you feeling like you're constantly stretched too thin, trying to meet growing demands without the resources to do it all?",
  },
  {
    icon: Compass,
    title: "Navigating the ATS",
    description:
      "Are you finding it challenging to keep up with the complexities of ATS and the rapidly evolving job market, while also having to guide applicants through these confusing processes?",
  },
  {
    icon: ShieldCheck,
    title: "Placement Pressure",
    description:
      "Do you feel the pressure of ensuring high placement rates, all while trying to convince job seekers of the critical need to tailor their resumes for specific roles and ATS?",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-24 bg-muted/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          What can Skanjo help you achieve:
        </h2>
        <ul className="text-lg text-muted-foreground space-y-2 text-left sm:text-center">
          <li>Get better ROI on money spent searching for candidates</li>
          <li>Every ignored CV is a missed opportunity</li>
          <li>Manual shortlisting wastes recruiter time and frustrates managers</li>
          <li>Slow hiring = losing good candidates to competitors</li>
        </ul>
      </div>
      <div className="bg-card p-10  shadow-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {problems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start gap-4 text-left"
          >
            <item.icon className="w-8 h-8 text-primary" />
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <a
          href="/analyze"
          className="inline-block px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-primary/80 text-white"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  );
};

export default ImpactSection;