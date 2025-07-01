const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Recruiter at TechHire",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Skanjo helped us reduce our screening time by over 70%. We no longer miss high-potential candidates buried under keyword mismatches.",
  },
  {
    name: "Amit Desai",
    role: "HR Lead at FinEdge",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The contextual fit analysis is a game-changer. It finds candidates we would've otherwise overlooked. Our hiring managers love it.",
  },
  {
    name: "Emily Chen",
    role: "Talent Acquisition at HealthCore",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    quote:
      "We used to spend hours manually sorting resumes. Now, Skanjo gives us a ranked shortlist in minutes — with reasons!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 sm:px-12 md:px-24 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
          What Our Clients Are Saying
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl bg-muted/10 shadow-xl flex flex-col justify-between h-full"
          >
            <div className="relative text-left">
              <p className="text-lg text-foreground leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;