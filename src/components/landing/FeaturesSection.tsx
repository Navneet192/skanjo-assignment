import { Button } from "@/components/ui/button";

const pillars = [
  {
    image: "/images/testing.jpg",
    title: "Relevance over Keywords",
    description:
      "Skanjo evaluates context—not just skills—using role, domain, and company-specific intelligence.",
  },
  {
    image: "/images/testing.jpg",
    title: "Speed That Matters",
    description:
      "Shortlists 1000+ CVs in minutes. No more 'will screen later' fatigue.",
  },
  {
    image: "/images/testing.jpg",
    title: "Insight That Helps Close",
    description:
      "Understand the 'why' behind every match—not just the percentage.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
          Why Skanjo? <span className="text-blue-500">A tool for Recruiters, by Recruiters</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Discover the pillars that make Skanjo the best choice for modern recruitment.
        </p>
      </div>
      <div className="space-y-16 max-w-7xl mx-auto h-full ">
        {pillars.map((pillar, idx) => (
          <div
            key={pillar.title}
            className={`flex flex-col-reverse sm:flex-row h-[500px] ${
              idx % 2 === 1 ? "sm:flex-row-reverse" : ""
            } items-center  dark:bg-muted/40  p-6 sm:p-10`}
          >
            <div className="sm:w-1/2 space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-black-700 mb-2 tracking-widest shadow-sm">
                FEATURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-4">
                {pillar.description}
              </p>
              <Button
                className={`mt-2 bg-black text-white px-7 py-2.5 rounded-xl font-semibold shadow-md${
                  idx === 1 ? "ring-4 ring-blue-300" : ""
                }`}
              >
                Learn More
              </Button>
            </div>
            <div
              className={`sm:w-1/2 flex justify-center relative  max-w-9xl h-[300px] ${
                idx === 2 ? "rounded-2xl p-2" : ""
              }`}
            >
              <div className="w-300 h-300 bg-muted  overflow-hidden shadow-lg flex items-center justify-center">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;