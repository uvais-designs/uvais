import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

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

  interface FeaturedCaseStudyAccordion {
    title: string;
    outcome: string;
    domain: string;
    tags: string[];
    context: string;
    contextMobile: string;
    approach: string;
    approachMobile: string;
    solutionHighlights: string;
    solutionHighlightsMobile: string;
    outcomes: string;
    outcomesMobile: string;
    visuals: string;
    figmaUrl: string;
  }

  const featuredCaseStudies: FeaturedCaseStudyAccordion[] = [
    {
      title: "Redesigning the Command Center for Maritime Operations",
      outcome: "Designed a high-trust dashboard that reduced task friction and improved situational clarity for complex operations.",
      domain: "Maritime Logistics",
      tags: ["Enterprise UX", "Operational Design", "Responsive", "Accessibility"],
      context: "Senior users were managing mission-critical marine communication systems in inconsistent network conditions, where a single error could delay logistics or compromise safety.",
      contextMobile: "Senior users managed marine comms in inconsistent conditions and needed clear, dependable controls.",
      approach: "I audited existing workflows, prioritized critical user journeys, and created a modular interface that supports both desktop and tablet navigation.",
      approachMobile: "I focused on the most important journeys, simplifying controls for clarity on smaller screens.",
      solutionHighlights: "Simplified onboarding flows, introduced progressive disclosure for complex controls, and created clear error states with recovery paths.",
      solutionHighlightsMobile: "Created easier onboarding, clearer controls, and stronger error recovery.",
      outcomes: "Improved task confidence, reduced review cycles, and created a visual system built for real-world operational constraints.",
      outcomesMobile: "Boosted confidence, cut review time, and made tasks more reliable.",
      visuals: "Dashboard screens, workflow sequences, and status-aware alerts that map to real operational scenarios.",
      figmaUrl: "https://www.figma.com/file/example-maritime-command-center"
    },
    {
      title: "Enterprise Banking Experience for Cross-Border Teams",
      outcome: "Created a secure, efficient banking workflow for staff operating across multiple markets and time zones.",
      domain: "Financial Services",
      tags: ["Banking", "Compliance", "Workflow", "Usability"],
      context: "Bank staff were switching between disparate systems to complete customer onboarding, creating delays and duplicate work.",
      contextMobile: "Staff switched between tools to onboard customers, creating delays and friction.",
      approach: "I mapped handoff points, harmonized information architecture, and designed a single responsive experience that adapts to desktop and tablet usage.",
      approachMobile: "I simplified handoffs, unified info, and created a responsive workflow for both desktop and tablet.",
      solutionHighlights: "Introduced role-based navigation, a unified customer timeline, and contextual help for complex compliance tasks.",
      solutionHighlightsMobile: "Added role-based navigation, a single timeline, and clearer compliance help.",
      outcomes: "Streamlined case handling, improved visibility into outstanding actions, and reduced training overhead.",
      outcomesMobile: "Faster handling, better visibility, and less training time.",
      visuals: "Customer journey maps, dashboard panels, and rapid selection screens for cross-border approvals.",
      figmaUrl: "https://www.figma.com/file/example-enterprise-banking"
    },
    {
      title: "Government Education Portal with Role-Based Insights",
      outcome: "Designed a government-facing education portal that made large datasets easy to understand and act on.",
      domain: "Public Sector",
      tags: ["GovTech", "Data Viz", "Accessibility", "Service Design"],
      context: "Administrators needed to manage school data while complying with existing government standards and limited network reliability.",
      contextMobile: "Administrators needed clear school data views with low network risk.",
      approach: "I built dashboards with progressive disclosure, clear status indicators, and mobile-friendly summaries for field use.",
      approachMobile: "I created simpler dashboards with status indicators and mobile summaries.",
      solutionHighlights: "Created intelligent data cards, adaptive navigation, and a consistent visual language for complex policy reporting.",
      solutionHighlightsMobile: "Delivered smart cards, adaptive navigation, and a consistent reporting language.",
      outcomes: "Enabled faster decision-making, better data comprehension, and more confident stakeholder reporting.",
      outcomesMobile: "Faster decisions, clearer data, and stronger reports.",
      visuals: "Role-based dashboard panels, alerts, and workflow diagrams for inspection and reporting tasks.",
      figmaUrl: "https://www.figma.com/file/example-education-portal"
    },
    {
      title: "Learning Platform with Adaptive Experience Paths",
      outcome: "Synthesized personalized learning journeys into a clear, motivating interface for diverse learner needs.",
      domain: "EdTech",
      tags: ["Adaptive UX", "Gamification", "Learner Experience", "Scalability"],
      context: "Learners engaged with multiple content formats and needed personalized guidance without overwhelming options.",
      contextMobile: "Learners needed clear guidance across mixed content without feeling overwhelmed.",
      approach: "I aligned success metrics, crafted meaningful micro-interactions, and prototyped responsive flows for learner motivation.",
      approachMobile: "I used clear micro-interactions and responsive flows to make learning motivating.",
      solutionHighlights: "Built adaptive progress summaries, milestone nudges, and simplified content discovery pathways.",
      solutionHighlightsMobile: "Built adaptive progress cards, milestone nudges, and clearer content paths.",
      outcomes: "Increased engagement clarity and created a flexible platform that supports future learning scenarios.",
      outcomesMobile: "Increased clarity and created a flexible learning platform.",
      visuals: "Learning path screens, progress dashboards, and simplified content selection flows.",
      figmaUrl: "https://www.figma.com/file/example-learning-platform"
    },
    {
      title: "High-Impact Product Launch Experience",
      outcome: "Built a launch-ready product experience that balanced speed, quality, and stakeholder alignment.",
      domain: "Product Design",
      tags: ["Launch", "Stakeholder Alignment", "Rapid Prototyping", "Design Ops"],
      context: "The product team needed a polished experience that could be shared with stakeholders while development timelines were tight.",
      contextMobile: "The team needed a polished launch experience on a tight schedule.",
      approach: "I created a clear experience roadmap, validated interactions with rapid prototypes, and aligned the team on the highest-impact screens.",
      approachMobile: "I built a roadmap, validated prototypes, and aligned screens to the launch goals.",
      solutionHighlights: "Delivered a purpose-driven experience with clear success metrics, launch checklists, and stakeholder-facing flows.",
      solutionHighlightsMobile: "Delivered a focused launch experience with clear metrics and stakeholder-ready screens.",
      outcomes: "Reduced review cycles and provided a confident handoff for development and launch planning.",
      outcomesMobile: "Reduced reviews and created a strong handoff for launch.",
      visuals: "Launch journey maps, prototype flow screens, and product walkthrough sequences.",
      figmaUrl: "https://www.figma.com/file/example-launch-experience"
    }
  ];

  const featuredProject = caseStudies.find(study => study.featured);
  const otherProjects = caseStudies.filter(study => !study.featured);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* <div className="max-w-5xl mx-auto mb-14">
          <div className="text-center space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Featured Case Studies
            </p>
          
            <p className="text-base md:text-lg leading-7 text-muted-foreground max-w-3xl mx-auto">
              Due to confidentiality agreements, real production work cannot be shown, but the displayed case studies are realistic simulations based on actual professional experience, reflecting similar challenges, constraints, and decision-making processes.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-10 space-y-4">
            {featuredCaseStudies.map((project, index) => (
              <AccordionItem
                key={project.title}
                value={`case-${index}`}
                className="glass-card overflow-hidden border border-border/20 bg-background/80 shadow-sm"
              >
                <AccordionTrigger className="px-5 md:px-6">
                  <div className="flex flex-col gap-3 py-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">{project.domain}</p>
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{project.outcome}</p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-5 md:px-6 pb-6">
                  <div className="grid gap-5">
                    <div className="rounded-3xl overflow-hidden border border-border/20 bg-muted/5">
                      <img
                        src="https://via.placeholder.com/1200x720?text=Project+Image+Placeholder"
                        alt="Project visual placeholder"
                        className="w-full h-56 object-cover sm:h-64"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Context & Problem</h4>
                        <p className="text-sm text-muted-foreground leading-6 pl-3 md:pl-0">
                          <span className="block md:hidden">{project.contextMobile}</span>
                          <span className="hidden md:block">{project.context}</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Approach & Decision Making</h4>
                        <p className="text-sm text-muted-foreground leading-6 pl-3 md:pl-0">
                          <span className="block md:hidden">{project.approachMobile}</span>
                          <span className="hidden md:block">{project.approach}</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Solution Highlights</h4>
                        <p className="text-sm text-muted-foreground leading-6 pl-3 md:pl-0">
                          <span className="block md:hidden">{project.solutionHighlightsMobile}</span>
                          <span className="hidden md:block">{project.solutionHighlights}</span>
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Outcomes / Impact</h4>
                        <p className="text-sm text-muted-foreground leading-6 pl-3 md:pl-0">
                          <span className="block md:hidden">{project.outcomesMobile}</span>
                          <span className="hidden md:block">{project.outcomes}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center gap-4 flex-wrap">
                      <div className="rounded-3xl bg-muted/10 border border-border/20 p-4 flex-1 min-w-[170px]">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Visual Screens / Flows</h4>
                        <p className="text-sm text-muted-foreground leading-6 pl-3">{project.visuals}</p>
                      </div>
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-lg"
                      >
                        View Figma File
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div> */}

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
              { title: "Hostel Management", image: hostel, url: "/uvais/hostel.html", disabled: false },
              { title: "TrunFrun - Upcoming", image: trunfrun, url: "", disabled: true },
            ].map((p, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{p.title}</h4>
                  </div>

                  <div className="mt-4">
                    {p.disabled ? (
                      <button
                        disabled
                        className="inline-block w-full text-center py-2 rounded-md bg-muted/50 text-muted-foreground cursor-not-allowed opacity-50"
                        aria-label={`${p.title} - Coming Soon`}
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full text-center py-2 rounded-md glass-button text-primary hover:scale-105 transition-all duration-200"
                        aria-label={`View ${p.title}`}
                      >
                        View Project
                      </a>
                    )}
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