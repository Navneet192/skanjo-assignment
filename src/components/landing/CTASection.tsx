const CTASection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 text-center text-white px-6 sm:px-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Ready to Turn CV Clutter Into Quality Candidates?
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          AI-powered CV screening for Zoho Recruit that helps recruiters rescue online applicants from being overlooked.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/analyze"
            className="inline-block px-8 py-4 rounded-xl bg-white text-primary font-semibold text-lg hover:shadow-xl transition-all"
          >
            Try Skanjo Free
          </a>
          <a
            href="/demo"
            className="inline-block px-8 py-4 rounded-xl border border-white text-white font-semibold text-lg hover:bg-white/10 transition-all"
          >
            Schedule a Demo
          </a>
        </div>
        <div className="text-sm mt-2">⭐⭐⭐⭐⭐</div>
      </div>
      <p className="text-sm text-red-500 mt-2">No credit card required.</p>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] pointer-events-none z-0"></div>
    </section>
  );
};

export default CTASection;