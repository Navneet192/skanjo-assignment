import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-background flex items-center justify-center px-6 sm:px-12 md:px-24 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Stop Ignoring Your Best Candidates.
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          AI-powered CV screening for Zoho Recruit that helps recruiters rescue online applicants from being overlooked.
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className="px-6 py-3 text-lg rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 transition-all transform hover:scale-105"
          >
            <Link to="/analyze">Try Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;