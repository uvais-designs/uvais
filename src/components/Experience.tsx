interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceItem({ role, company, period, description }: ExperienceItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all 
      hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 
        transition-opacity group-hover:opacity-100" />

      {/* Content */}
      <div className="relative space-y-4">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary 
            transition-colors">{role}</h3>
          <h4 className="text-xxl font-bold tracking-tight text-blue-600">{company}</h4>
          <h5 className="text-m font-bold tracking-tight text-foreground group-hover:text-primary 
            transition-colors">{period}</h5>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Experience() {
  const experiences = [
    {
      role: "Senior UX Designer",
      company: "Kognitive Networks",
      period: "2025 - Present",
      description: "Leading UX design for maritime and aviation network products.",
    },
    {
      role: "UX Designer",
      company: "TCS",
      period: "2023 - 2025",
      description: "Designed for diffrent banking clients, improving UX by 35%.",
    },
    {
      role: "UX Designer/Dev",
      company: "Xenovex Technologies",
      period: "2021 - 2023",
      description: "Designed government education platform for 100k+ users.",
    },
    {
      role: "UX Designer/Dev",
      company: "Szigony Technologies",
      period: "2020 - 2021",
      description: "Designed e-commerce products for customers.",
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="heading-large text-foreground">Experience</h2>
            <p className="mt-4 text-muted-foreground">
              Building user-centered products across different domains
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}