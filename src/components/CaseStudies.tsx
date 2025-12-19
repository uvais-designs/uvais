const Kognitive = "images/image.png";
const citi = "images/citi.png";
const cba = "images/cba.png";
const emis = "images/emis.png";
const self = "images/self.png";
const hostel = "images/hostel.png";
const trunfrun = "images/trunfrun.png";


interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  image: string;
  tags: string[];
  featured?: boolean;
  url?: string; // external link
}

function FeaturedCaseStudyCard({
  title,
  category,
  description,
  challenge,
  solution,
  impact,
  image,
  tags,
  url
}: CaseStudyProps) {
  return (
    <div className="group cursor-pointer mb-10">
      <div className="glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl relative">

        {/* Layout */}
        <div className="grid grid-rows-[auto_1fr]">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col justify-start relative space-y-6">
            {/* Personal note */}
            <div className="absolute top-4 right-4 opacity-30">
              <div className="text-xs text-muted-foreground italic">"My latest work"</div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 glass-button rounded-full text-sm text-primary mb-3">
                {category}
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                {title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Challenge */}
              <div className="flex-1 glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  The Challenge
                </h4>
                <p className="text-muted-foreground text-sm">{challenge}</p>
              </div>

              {/* My Approach */}
              <div className="flex-1 glass-card p-4 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-1 h-6 bg-chart-2 rounded-full"></div>
                  My Approach
                </h4>
                <p className="text-muted-foreground text-sm">{solution}</p>
              </div>
            </div>

            {/* Tags & CTA */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 glass-button rounded-full text-sm text-primary hover:scale-105 transition-transform duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* External link button */}
              <a
                href={url ?? "#"}
                target={url ? "_blank" : undefined}
                rel={url ? "noopener noreferrer" : undefined}
                className="inline-block glass-button px-6 py-3 rounded-full text-primary hover:text-primary-foreground group/btn relative overflow-hidden transition-all duration-300 hover:scale-105"
                aria-label={`Open ${title} project`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore This Project
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-primary scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function CompactCaseStudyCard({
  title,
  category,
  description,
  challenge,
  image,
  tags,
  url
}: CaseStudyProps) {
  return (
    <div className="group cursor-pointer">
      <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute top-3 left-3">
          </div>
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-4">
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-3">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-4">{description}</p>
          </div>

          <div className="space-y-3 flex-1">
            <div className="glass-card p-3 rounded-lg">
              <h4 className="font-medium text-foreground text-xs mb-1 titlecase tracking-wide "><b>My Part</b></h4>
              <p className="text-xs text-muted-foreground line-clamp-5">{challenge}</p>
            </div>
          </div>

          <div className="space-y-3 mt-auto pt-4">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 glass-button text-xs rounded-full text-primary hover:scale-105 transition-transform duration-200"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2 py-1 glass-card text-muted-foreground text-xs rounded-full">
                  +{tags.length - 3}
                </span>
              )}
            </div>

            {/* External link button */}
            {/* <a
              href={url ?? "#"}
              target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
              className="w-full glass-button py-2 rounded-lg text-primary text-xs font-medium hover:scale-105 transition-all duration-200 inline-block text-center"
              aria-label={`Open ${title} project`}
            >
              View Project
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudies() {
  const caseStudies: CaseStudyProps[] = [
    {
      title: "Streamlining the Sea: A UX Overhaul for Kognitive Cloud",
      category: "Featured Work",
      description: "Led a comprehensive UX redesign for Kognitive Cloud, enhancing user engagement and operational efficiency across their platform.Redesigned outdated workflows and screens into a usable, responsive interface based on customer needs.This revamp empowers maritime users—especially those using Starlink—to manage networks effortlessly in their day-to-day operations.",
      challenge: "Users, especially in the maritime sector, struggled with an outdated UI that wasn’t optimized for modern workflows or hardware integrations like Starlink.",
      solution: "I reimagined old screens from a user-centered perspective simplifying flows, applying consistent UI patterns, and ensuring accessibility across devices. I also introduced scalable components to support new feature rollouts.",
      impact: [
        "The result is a more intuitive, task-focused experience. Daily operations became faster and less error-prone, and feedback from maritime users showed a clear increase in satisfaction and adoption."
      ],
      image: Kognitive,
      tags: ["UX Strategy", "Design Systems", "User Research", "Leadership"],
      featured: true,
      url: "https://www.kognitive.net/"
    },
    {
      title: "Enterprise Banking Platform – LATAM Region",
      category: "Banking",
      description: "An internal platform used by bank staff in Latin America to manage customer data, transactions, and operational workflows.",
      challenge: "Translated wireframes into clean, responsive UI using design systems. Collaborated with design leads to deliver scalable and maintainable layouts.",
      solution: "Implemented a comprehensive user research program, redesigned the checkout flow, and created a mobile-first responsive design system.",
      impact: [
        "Translated wireframes into clean, responsive UI using enterprise design systems.",
        "Collaborated with design manager to implement and extend reusable components.",
        "Ensured pixel-perfect handoffs for development and participated in daily agile ceremonies."
      ],
      image: citi,
      tags: ["Finance", "Mobile UX", "Conversion"],
      featured: false,
      url: "https://uvais.design/projects/enterprise-banking"
    },
    {
      title: "Retail Banking Dashboard – APAC Region",
      category: "Banking",
      description: "A dashboard solution for an APAC-based bank enabling customer account management, daily transactions, and service operations.",
      challenge: "Worked under design leadership to deliver new screen flows. Reused and adapted UI components to ensure visual and functional consistency.",
      solution: "Created an intuitive interface with smart automation, role-based access, and streamlined workflows that reduced cognitive load.",
      impact: [
        "50% reduction in data entry time",
        "95% healthcare provider satisfaction",
        "Full HIPAA compliance achieved"
      ],
      image: cba,
      tags: ["Banking", "Design Guide", "Prototypes"],
      featured: false,
      url: "https://uvais.design/projects/retail-banking"
    },
    {
      title: "Tamil Nadu EMIS Portal – School Education Platform",
      category: "Education",
      description: "A government portal that centralizes student, teacher, and school data across Tamil Nadu for administrative and academic management.",
      challenge: "Revamped outdated screens to improve clarity and navigation. Worked closely with the team to follow government design standards and improve workflows.",
      solution: "Designed role-based dashboards with progressive disclosure, smart alerts, and personalized insights using advanced data visualization.",
      impact: [
        "40% faster decision-making process",
        "85% improvement in data comprehension",
        "Increased client engagement by 60%"
      ],
      image: emis,
      tags: ["Education", "Government", "User Research"],
      featured: false,
      url: "https://uvais.design/projects/emis-tn"
    },
    {
      title: "Self-Initiated Projects for Skill Growth",
      category: "General",
      description: "Conceptual UI/UX projects including portals, dashboards, and websites created to simulate real-world product scenarios",
      challenge: "Practiced full design process from ideation to handoff. Focused on building solid UX foundations and consistency across diverse platforms.",
      solution: "Integrated gamification elements, peer learning features, and adaptive content delivery based on individual learning patterns.",
      impact: [
        "75% increase in course completion rates",
        "90% learner satisfaction improvement",
        "Featured in top EdTech innovations of 2023"
      ],
      image: self,
      tags: ["EdTech", "Gamification", "Social Learning"],
      featured: false,
      url: "https://uvais.design/projects/self-initiated"
    }
  ];

  const featuredProject = caseStudies.find(study => study.featured);
  const otherProjects = caseStudies.filter(study => !study.featured);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Design Stories & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project tells a story of challenges overcome, users delighted, and businesses transformed through thoughtful design.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedCaseStudyCard
            title={featuredProject.title}
            category={featuredProject.category}
            description={featuredProject.description}
            challenge={featuredProject.challenge}
            solution={featuredProject.solution}
            impact={featuredProject.impact}
            image={featuredProject.image}
            tags={featuredProject.tags}
            url={featuredProject.url}
          />
        )}

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Work Projects</h3>
            <p className="text-muted-foreground">A selection of impactful design solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((study, index) => (
              <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                <CompactCaseStudyCard
                  title={study.title}
                  category={study.category}
                  description={study.description}
                  challenge={study.challenge}
                  solution={study.solution}
                  impact={study.impact}
                  image={study.image}
                  tags={study.tags}
                  url={study.url}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground">Personal Projects</h3>
            <p className="text-muted-foreground">Small experiments and side projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {[
              { title: "Hostel Management", image: hostel, url: "/uvais/hostel.html" },
              { title: "TrunFrun - Upcoming", image: trunfrun, url: "" },
            ].map((p, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{p.title}</h4>
                  </div>

                  <div className="mt-4">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center py-2 rounded-md glass-button text-primary hover:scale-105 transition-all duration-200"
                      aria-label={`View ${p.title}`}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}