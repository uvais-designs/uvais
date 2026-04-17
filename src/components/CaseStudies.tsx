import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
const Kognitive = "images/image.png";
const citi = "images/citi.png";
const cba = "images/cba.png";
const emis = "images/emis.png";
const netmaster = "images/netmaster.png";
const banking = "images/banking.png";
const self = "images/self.png";
const recertificate = "images/recertificate.png";
const adminpermissions = "images/adminpermissions.png";
const hostel = "images/hostel.png";
const trunfrun = "images/trunfrun.png";
const badge1 = "images/badge1.jpg";
const badge2 = "images/badge2.jpg";
const badge3 = "images/badge3.jpg";
const cert1 = "images/cert1.jpg";
const cert2 = "images/cert2.jpg";
const cert3 = "images/cert3.jpg";
const cert5 = "images/cert5.jpg";
const cert6 = "images/cert6.jpg";
const screen1 = "images/screen1.jpg";
const screen2 = "images/screen2.jpg";
const screen3 = "images/screen3.jpg";
const screen4 = "images/screen4.jpg";
const screen5 = "images/screen5.jpg";
const screen6 = "images/screen6.jpg";
const screen7 = "images/screen7.jpg";
const screen8 = "images/screen8.jpg";
const screen9 = "images/screen9.jpg";
const screen10 = "images/screen10.jpg";
const screen11 = "images/screen11.jpg";




const visualScreens = [
screen1,
screen2,
screen3,
screen4,
screen5,
screen6,
screen7,
screen8,
screen9,
screen10,
screen11
].filter(Boolean) as string[];
const assetBase = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/";
const visualScreenSources = visualScreens.map((src) =>
  src.startsWith("images/") ? `${assetBase}${src}` : src
);

const initialBulletinItems = [
  { src: badge1, alt: "badge1 preview", x: 4, y: 12, rotate: -6, width: 160 },
  { src: badge2, alt: "badge2 preview", x: 38, y: 4, rotate: 4, width: 176 },
  { src: badge3, alt: "badge3 preview", x: 68, y: 18, rotate: 6, width: 160 },
  { src: cert1, alt: "cert1 preview", x: 6, y: 56, rotate: 7, width: 214 },
  { src: cert2, alt: "cert2 preview", x: 54, y: 66, rotate: -8, width: 182 },
  { src: cert3, alt: "cert3 preview", x: 80, y: 36, rotate: -5, width: 150 },
  { src: cert5, alt: "cert5 preview", x: 28, y: 8, rotate: 9, width: 184 },
  { src: cert6, alt: "cert6 preview", x: 70, y: 10, rotate: 12, width: 166 },
];

const uxSteps = [
  {
    title: "Define Problem",
  },
  {
    title: "Identify Audience",
  },
  {
    title: "Research",
  },
  {
    title: "Insights",
  },
  {
    title: "Use Cases",
  },
  {
    title: "Information Architecture",
  },
  {
    title: "Workflows",
  },
  {
    title: "Low Fidelity",
  },
  {
    title: "High Fidelity + Content",
  },
  {
    title: "Validation",
  },
  {
    title: "Iteration",
  },
  {
    title: "Continuous Questions",
  }
];

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
            <div className="flex flex-wrap items-center gap-3">
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
                className="ml-auto inline-flex w-full md:w-auto justify-center glass-button px-6 py-3 rounded-full text-primary hover:text-primary-foreground group/btn relative overflow-hidden transition-all duration-300 hover:scale-105"
                aria-label={`Open ${title} project`}
              >
                <span className="group/btn relative z-10 flex items-center gap-2 text-gray-300 hover:text-gray-900 transition-colors duration-200">
                  To Know More
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
    <div className="group cursor-pointer h-full">
      <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden">
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

function MetricsCarousel({ image, metrics }: { image: string; metrics: { label: string; value: string; trend: 'up' | 'down' }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  type CarouselItem = { type: 'image'; content: string } | { type: 'metrics'; content: { label: string; value: string; trend: 'up' | 'down' }[] };

  const items: CarouselItem[] = [
    { type: 'image', content: image },
    { type: 'metrics', content: metrics }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden rounded-2xl border border-border/20 bg-black cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {items.map((item, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          {item.type === 'image' ? (
            <img src={item.content} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-black/90 flex flex-col items-start justify-start p-6 space-y-4">
              <h4 className="text-lg font-bold text-white">Key Metrics</h4>
              <div className="flex flex-col gap-4 w-full">
                {item.content.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 pb-3 border-b border-white/20 last:border-b-0">
                    <span className="text-base font-semibold text-white/80">{metric.label}</span>
                    <span className={`text-2xl font-black ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.trend === 'up' ? '↑' : '↓'} {metric.value.replace(/[↑↓]/, '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-6' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function UxRoadmapSection({ className = "" }: { className?: string }) {
  const [activeUxStep, setActiveUxStep] = useState(0);
  const [visibleUxSteps, setVisibleUxSteps] = useState<number[]>([]);
  const uxStepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const idx = Number(entry.target.getAttribute("data-step"));
          if (!Number.isNaN(idx) && entry.isIntersecting) {
            setActiveUxStep(prev => Math.max(prev, idx));
            setVisibleUxSteps(prev => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.45, rootMargin: "0px 0px -20% 0px" }
    );

    uxStepRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`ux-roadmap-section max-w-6xl w-full mx-auto ${className}`.trim()}>
      <div className="ux-roadmap-header text-center">
        <h3 className="text-3xl font-semibold text-foreground">My UX Process 0 → 1</h3>
        <p className="text-muted-foreground">
          A visual roadmap that mirrors how I move from ambiguity to clarity.
        </p>
      </div>

      <div className="ux-roadmap">
        <svg className="ux-roadmap-svg" viewBox="0 0 1200 620" aria-hidden>
          <path
            d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
            fill="none"
            stroke="rgba(245,245,245,0.92)"
            strokeWidth="74"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
            fill="none"
            stroke="rgba(30,41,59,0.85)"
            strokeWidth="64"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
            fill="none"
            stroke="rgba(226,232,240,0.9)"
            strokeWidth="4"
            strokeDasharray="18 18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {uxSteps.map((step, index) => {
          const positions = [
            { x: "12%", y: "6%" },
            { x: "32%", y: "6%" },
            { x: "55%", y: "6%" },
            { x: "72%", y: "6%" },
            { x: "78%", y: "44%" },
            { x: "55%", y: "44%" },
            { x: "38%", y: "44%" },
            { x: "18%", y: "44%" },
            { x: "16%", y: "78%" },
            { x: "38%", y: "78%" },
            { x: "50%", y: "78%" },
            { x: "65%", y: "78%" }
          ];
          const pinColors = [
            "#ef4444",
            "#f97316",
            "#f59e0b",
            "#84cc16",
            "#22c55e",
            "#14b8a6",
            "#06b6d4",
            "#3b82f6",
            "#6366f1",
            "#8b5cf6",
            "#ec4899",
            "#f43f5e"
          ];
          const tagColors = [
            "#fde68a",
            "#fed7aa",
            "#fecaca",
            "#bbf7d0",
            "#bae6fd",
            "#c7d2fe",
            "#e9d5ff",
            "#fbcfe8",
            "#d9f99d",
            "#a7f3d0",
            "#fef08a",
            "#fca5a5"
          ];

          const position = positions[index] || { x: "0%", y: "0%" };
          const isActive = activeUxStep === index;
          const isVisible = visibleUxSteps.includes(index);

          return (
            <div
              key={step.title}
              ref={el => {
                uxStepRefs.current[index] = el;
              }}
              data-step={index}
              className={`ux-signboard ${isActive ? "is-active" : ""} ${isVisible ? "is-visible" : ""}`}
              style={{
                left: position.x,
                top: position.y,
                ["--pin-color" as any]: pinColors[index % pinColors.length],
                ["--tag-color" as any]: tagColors[index % tagColors.length]
              }}
            >
              <div className="ux-pin-label">{step.title}</div>
              <div className="ux-pin">
                <span className="ux-pin-number">{index + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="ux-roadmap-note">
        This process is iterative. I continuously refine based on feedback and user behavior.
      </p>
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
    image: string;
    figmaUrl: string;
    metrics: { label: string; value: string; trend: 'up' | 'down' }[];
  }

  const featuredCaseStudies: FeaturedCaseStudyAccordion[] = [
    {
      "title": "Optimizing Banking User Journeys",
      "outcome": "Improved critical banking flows, reducing drop-offs and increasing trust across payments, onboarding, and fraud handling.",
      "domain": "Banking / Financial Services",
      "tags": ["Enterprise UX", "Fintech", "User Flows", "Accessibility"],
      "context": "SMEs and retail users faced friction across payments, KYC onboarding, and fraud scenarios due to complexity, unclear flows, and low transparency.",
      "contextMobile": "Users struggled with complex banking tasks on mobile, causing drop-offs and confusion.",
      "approach": "Analyzed high-friction journeys, prioritized critical flows, and redesigned experiences balancing compliance, security, and usability constraints.",
      "approachMobile": "Focused on simplifying key journeys and reducing cognitive load for mobile users.",
      "solutionHighlights": "Introduced step-based flows, contextual validation, retry mechanisms, and real-time alerts to improve clarity and reduce user errors.",
      "solutionHighlightsMobile": "Simplified flows, added guidance, and improved error handling for better usability.",
      "outcomes": "Reduced drop-offs, improved completion rates, minimized support calls, and increased user trust in critical financial tasks.",
      "outcomesMobile": "Improved task success and reduced confusion in mobile banking interactions.",
      "visuals": "Payment flows, KYC onboarding journeys, and fraud alert interactions designed to reduce friction and improve clarity.",
      "image": banking,
      "figmaUrl": "https://www.figma.com/design/sMaCcp6O3qgYvbNFbxmpi4/Uvaisul?node-id=2592-979&t=9k4UV0KxCzeV9duc-1",
      "metrics": [
        { label: "KYC drop-offs", value: "↓32%", trend: "down" },
        { label: "Payment success", value: "↑22%", trend: "up" },
        { label: "Support tickets", value: "↓20%", trend: "down" }
      ]
    },
    {
      "title": "Enterprise Recertification Experience Redesign",
      "outcome": "Streamlined access reviews, reducing errors and improving compliance efficiency across large-scale enterprise systems.",
      "domain": "Banking / Financial Services",
      "tags": ["Enterprise UX", "Access Control", "Data Tables", "Compliance"],
      "context": "Enterprise teams struggled with unclear recertification processes, leading to delays, errors, and compliance risks in user-role management.",
      "contextMobile": "Users needed simplified access review flows with clear status visibility on constrained screens.",
      "approach": "Structured workflows around task clarity, leveraged design system constraints, and prioritized scalability, accessibility, and decision visibility.",
      "approachMobile": "Focused on simplifying complex tables and actions for better usability on smaller screens.",
      "solutionHighlights": "Designed grid-based tables, role management flows, status indicators, and bulk actions for efficient and error-free recertification.",
      "solutionHighlightsMobile": "Simplified role views, status indicators, and actions for better mobile interaction.",
      "outcomes": "Faster recertification cycles, reduced manual errors, improved audit readiness, and better control over user access.",
      "outcomesMobile": "Improved clarity and reduced friction in managing access on mobile devices.",
      "visuals": "Project tables, user-role management screens, and state-driven workflows improving visibility and operational control.",
      "image": recertificate,
      "figmaUrl": "https://www.figma.com/design/sMaCcp6O3qgYvbNFbxmpi4/Uvaisul?node-id=2293-2156&t=9k4UV0KxCzeV9duc-1",
      "metrics": [
        { label: "Recertification time", value: "↓40%", trend: "down" },
        { label: "Errors", value: "↓50%", trend: "down" },
        { label: "Task completion", value: "↑28%", trend: "up" }
      ]
    },
    {
      "title": "Admin Permissions & Bulk User Management",
      "outcome": "Reduced permission errors and scaled admin workflows through clear access models and efficient bulk operations.",
      "domain": "B2B SaaS / Enterprise Tools",
      "tags": ["Enterprise UX", "Access Management", "Scalability", "Admin Tools"],
      "context": "Admins faced permission complexity and inefficient bulk user management, causing over-access, errors, and lack of visibility across systems.",
      "contextMobile": "Admins needed simplified controls and visibility for managing users and permissions on mobile.",
      "approach": "Designed hierarchical access models, introduced inheritance logic, and enabled scalable bulk operations with clear risk indicators.",
      "approachMobile": "Simplified permission views and actions to reduce cognitive load on smaller screens.",
      "solutionHighlights": "Custom roles, permission grouping, bulk actions, audit dashboards, and plain-language summaries for better understanding.",
      "solutionHighlightsMobile": "Streamlined role views, bulk actions, and summaries for mobile usability.",
      "outcomes": "Reduced support tickets, improved access clarity, faster bulk operations, and increased admin confidence.",
      "outcomesMobile": "Enabled faster and clearer user management on mobile devices.",
      "visuals": "Role management tables, bulk user workflows, and audit dashboards improving access clarity and operational efficiency.",
      "image": adminpermissions,
      "figmaUrl": "https://www.figma.com/design/sMaCcp6O3qgYvbNFbxmpi4/Uvaisul?node-id=1672-645&t=9k4UV0KxCzeV9duc-1",
      "metrics": [
        { label: "Support tickets", value: "↓35%", trend: "down" },
        { label: "Bulk efficiency", value: "↑50%", trend: "up" },
        { label: "Over-permissioning", value: "↓30%", trend: "down" }
      ]
    },
    {
      "title": "Mobile Network Monitoring Experience",
      "outcome": "Enabled real-time network visibility and faster issue resolution for IT admins through a mobile-first monitoring experience.",
      "domain": "Enterprise IT / Network Management",
      "tags": ["Mobile UX", "Enterprise UX", "Data Visualization", "Monitoring"],
      "context": "IT admins lacked efficient mobile tools to monitor network health, devices, and alerts, leading to delayed responses and operational inefficiencies.",
      "contextMobile": "Admins needed quick access to network insights and controls on mobile devices.",
      "approach": "Prioritized real-time data visibility, simplified navigation, and designed action-oriented dashboards for efficient monitoring.",
      "approachMobile": "Focused on fast access to critical insights and quick actions for mobile usage.",
      "solutionHighlights": "Dashboard metrics, device management flows, alert categorization, and bandwidth analytics for complete network control.",
      "solutionHighlightsMobile": "Simplified dashboards, alerts, and device actions for mobile efficiency.",
      "outcomes": "Improved response time, faster issue detection, better device control, and increased operational efficiency.",
      "outcomesMobile": "Enabled faster monitoring and action-taking on mobile.",
      "visuals": "Dashboard metrics, device lists, alert flows, and bandwidth charts supporting real-time monitoring and actions.",
      "image": netmaster,
      "figmaUrl": "https://www.figma.com/design/sMaCcp6O3qgYvbNFbxmpi4/Uvaisul?node-id=2585-6034&t=r0fADU8euF7PAtNN-1",
      "metrics": [
        { label: "Response time", value: "↓35%", trend: "down" },
        { label: "Alert response", value: "↑30%", trend: "up" },
        { label: "Time Spent", value: "↓35%", trend: "down" }
      ]
    }
  ];





  const featuredProject = caseStudies.find(study => study.featured);
  const otherProjects = caseStudies.filter(study => !study.featured);
  const [figmaToOpen, setFigmaToOpen] = useState<string | null>(null);
  const [activeUxStep, setActiveUxStep] = useState(0);
  const [visibleUxSteps, setVisibleUxSteps] = useState<number[]>([]);
  const uxStepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const workCarouselRef = useRef<HTMLDivElement | null>(null);
  const personalCarouselRef = useRef<HTMLDivElement | null>(null);

  const personalProjects = [
    { title: "Hostel Management", image: hostel, url: "/uvais/hostel.html", disabled: false },
    { title: "TrunFrun - Upcoming", image: trunfrun, url: "", disabled: true },
  ];

  useEffect(() => {
    if (!figmaToOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFigmaToOpen(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [figmaToOpen]);

  const uxSteps = [
    {
      title: "Define Problem",
      bullets: ["Frame the actual user pain", "Clarify business impact", "Set success metrics"],
      example: "Example: reduce onboarding drop‑off by 20%"
    },
    {
      title: "Identify Audience",
      bullets: ["Primary and secondary users", "Contexts and constraints", "Jobs-to-be-done"],
      example: "Example: ops admins vs. end users"
    },
    {
      title: "Research",
      bullets: ["Interviews and surveys", "Competitive scan", "Analytics review"],
      example: "Example: support tickets + session replays"
    },
    {
      title: "Insights",
      bullets: ["Synthesize patterns", "Prioritize needs", "Define opportunity areas"],
      example: "Example: 3 bottlenecks drive 70% errors"
    },
    {
      title: "Use Cases",
      bullets: ["Core flows + edge cases", "Critical states", "Success criteria per flow"],
      example: "Example: Submit → Generate Certificate"
    },
    {
      title: "Information Architecture",
      bullets: ["Structure content and navigation", "Labeling system", "Hierarchy rules"],
      example: "Example: settings grouped by role"
    },
    {
      title: "Workflows",
      bullets: ["End‑to‑end task paths", "Decision points", "System feedback"],
      example: "Example: invite → verify → assign access"
    },
    {
      title: "Low‑Fidelity",
      bullets: ["Fast layout exploration", "Validate logic", "Iterate quickly"],
      example: "Example: 3 variants tested in 1 day"
    },
    {
      title: "High‑Fidelity + Content",
      bullets: ["Microcopy: labels, errors, helper text", "Final UI patterns", "Accessibility checks"],
      example: "Submit → Generate Certificate | Invalid → Specific actionable error"
    },
    {
      title: "Validation",
      bullets: ["Usability testing", "Stakeholder reviews", "Edge‑case verification"],
      example: "Example: 5 user tasks, 90% success"
    },
    {
      title: "Iteration",
      bullets: ["Refine based on findings", "Polish interactions", "Tighten content"],
      example: "Example: reduce steps from 6 to 4"
    },
    {
      title: "Continuous Questions",
      bullets: ["Monitor metrics", "Collect feedback", "Plan next experiments"],
      example: "Example: weekly UX check‑ins"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const idx = Number(entry.target.getAttribute("data-step"));
          if (!Number.isNaN(idx) && entry.isIntersecting) {
            setActiveUxStep(prev => Math.max(prev, idx));
            setVisibleUxSteps(prev => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.45, rootMargin: "0px 0px -20% 0px" }
    );

    uxStepRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Reorder this list to change section order without moving JSX blocks.
  const sectionOrder = ["caseStudies", "workProjects", "personalProjects", "roadmap"] as const;
  const sectionIndex = Object.fromEntries(
    sectionOrder.map((key, idx) => [key, idx])
  ) as Record<(typeof sectionOrder)[number], number>;

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col">
          <div className="max-w-6xl w-full mx-auto mb-16" style={{ order: sectionIndex.caseStudies }}>
            <div className="text-center space-y-6">
              <p className="text-2xl uppercase tracking-[0.3em] text-primary font-semibold">
                Featured Case Studies
              </p>

              <p className="text-base sm:text-lg leading-7 text-muted-foreground max-w-3xl mx-auto">
                Due to confidentiality agreements, real production work cannot be shown, but the displayed case studies are realistic simulations based on actual professional experience, reflecting similar challenges, constraints, and decision-making processes.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              onValueChange={() => setFigmaToOpen(null)}
              className="mt-10 space-y-4"
            >
              {featuredCaseStudies.map((project, index) => (
                <AccordionItem
                  key={project.title}
                  value={`case-${index}`}
                  className="glass-card overflow-hidden border border-border/20 bg-background/80 shadow-sm group"
                >
                  <AccordionTrigger className="px-2 md:px-2">
                    <div className="flex items-center gap-4 pl-5 group-data-[state=open]:pl-0 transition-all duration-300">
                      <img
                        src={project.image}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover group-data-[state=open]:scale-0 transition-transform duration-300"
                      />
                      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="relative px-4 md:px-4 pb-6">
                    <div className="grid gap-5 lg:grid-cols-[minmax(220px,320px)_1fr] items-start">
                      <div className="hidden lg:block relative rounded-3xl overflow-hidden border border-border/20 bg-muted/5 aspect-square max-w-[320px] mx-auto lg:mx-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover scale-0 group-data-[state=open]:scale-100 transition-transform duration-1000 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black/85 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-start justify-start p-6">
                          <div className="text-white space-y-4 w-full">
                            <h4 className="text-lg font-bold">Key Metrics</h4>
                            {project.metrics.map((metric, i) => (
                              <div key={i} className="flex items-center justify-between gap-4 pb-3 border-b border-white/20 last:border-b-0">
                                <span className="text-base font-semibold">{metric.label}</span>
                                <span className={`text-2xl font-black ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                  {metric.trend === 'up' ? '↑' : '↓'} {metric.value.replace(/[↑↓]/, '')}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="lg:hidden">
                        <MetricsCarousel image={project.image} metrics={project.metrics} />
                      </div>

                      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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

                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between w-full lg:col-span-2">
                        <div className="rounded-3xl bg-muted/10 border border-border/20 p-4 flex-1">
                          <h4 className="text-sm font-semibold text-foreground mb-2">Visual Screens / Flows</h4>
                          <p className="text-sm text-muted-foreground leading-6 pl-3 lg:pl-0">{project.visuals}</p>
                        </div>

                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-full h-11 items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-lg md:hidden"
                        >
                          View in Figma
                        </a>

                        <button
                          type="button"
                          onClick={() => setFigmaToOpen(project.figmaUrl)}
                          aria-label="Open Figma confirmation"
                          className="hidden md:inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:shadow-lg self-start lg:self-end"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {figmaToOpen === project.figmaUrl && (
                      <div
                        className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-slate-950/95 p-4"
                        onClick={() => setFigmaToOpen(null)}
                      >
                        <div
                          className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(30,41,59,0.78))] p-6 shadow-[0_40px_120px_-45px_rgba(0,0,0,0.75)] backdrop-blur-3xl ring-1 ring-white/10 sm:p-8"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(148,163,184,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(71,85,105,0.18),transparent_35%)]" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-90" />
                          <div className="relative z-10">
                            <h3 className="text-xl font-semibold text-white mb-3">Open Figma file?</h3>
                            <p className="text-sm text-slate-200 mb-6">This will open the project in Figma. Are you sure you want to continue?</p>
                            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                              <button
                                type="button"
                                onClick={() => setFigmaToOpen(null)}
                                className=" px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-900/60"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  if (figmaToOpen) {
                                    window.open(figmaToOpen, "_blank");
                                  }
                                  setFigmaToOpen(null);
                                }}
                                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:shadow-lg"
                              >
                                Yes, open Figma
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>

          <div className="ux-roadmap-section max-w-6xl mx-auto mt-16 hidden">
            <div className="ux-roadmap-header text-center">
              <h3 className="text-3xl font-semibold text-foreground">My UX Process: From Problem to Clarity</h3>
              <p className="text-muted-foreground">
                A visual roadmap that mirrors how I move from ambiguity to clarity.
              </p>
            </div>

            <div className="ux-roadmap">
              <svg className="ux-roadmap-svg" viewBox="0 0 1200 620" aria-hidden>
                <path
                  d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
                  fill="none"
                  stroke="rgba(245,245,245,0.92)"
                  strokeWidth="74"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
                  fill="none"
                  stroke="rgba(30,41,59,0.85)"
                  strokeWidth="64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
                  fill="none"
                  stroke="rgba(226,232,240,0.9)"
                  strokeWidth="4"
                  strokeDasharray="18 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {uxSteps.map((step, index) => {
                const positions = [
                  { x: "12%", y: "6%" },
                  { x: "32%", y: "6%" },
                  { x: "55%", y: "6%" },
                  { x: "72%", y: "6%" },
                  { x: "78%", y: "44%" },
                  { x: "55%", y: "44%" },
                  { x: "38%", y: "44%" },
                  { x: "18%", y: "44%" },
                  { x: "16%", y: "78%" },
                  { x: "38%", y: "78%" },
                  { x: "50%", y: "78%" },
                  { x: "65%", y: "78%" }
                ];
                const pinColors = [
                  "#ef4444",
                  "#f97316",
                  "#f59e0b",
                  "#84cc16",
                  "#22c55e",
                  "#14b8a6",
                  "#06b6d4",
                  "#3b82f6",
                  "#6366f1",
                  "#8b5cf6",
                  "#ec4899",
                  "#f43f5e"
                ];
                const tagColors = [
                  "#fde68a",
                  "#fed7aa",
                  "#fecaca",
                  "#bbf7d0",
                  "#bae6fd",
                  "#c7d2fe",
                  "#e9d5ff",
                  "#fbcfe8",
                  "#d9f99d",
                  "#a7f3d0",
                  "#fef08a",
                  "#fca5a5"
                ];

                const position = positions[index] || { x: "0%", y: "0%" };
                const isActive = activeUxStep === index;
                const isVisible = visibleUxSteps.includes(index);

                return (
                  <div
                    key={step.title}
                    ref={el => {
                      uxStepRefs.current[index] = el;
                    }}
                    data-step={index}
                    className={`ux-signboard ${isActive ? "is-active" : ""} ${isVisible ? "is-visible" : ""}`}
                    style={{
                      left: position.x,
                      top: position.y,
                      ["--pin-color" as any]: pinColors[index % pinColors.length],
                      ["--tag-color" as any]: tagColors[index % tagColors.length]
                    }}
                  >
                    <div className="ux-pin-label">{step.title}</div>
                    <div className="ux-pin">
                      <span className="ux-pin-number">{index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="space-y-8 max-w-6xl w-full mx-auto mt-16" style={{ order: sectionIndex.workProjects }}>
            <div className="text-center">
              <h3 className="text-2xl uppercase tracking-[0.3em] text-primary font-semibold">Work Projects</h3>
              <p className="text-muted-foreground">A selection of impactful design solutions</p>
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

            <div className="hidden min-[751px]:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <div className="max-[750px]:block min-[751px]:hidden">
              <div
                ref={workCarouselRef}
                className="flex snap-x snap-mandatory overflow-x-auto gap-5 pb-6 px-6 touch-pan-both scrollbar-hidden"
                aria-label="Work projects carousel"
              >
                {otherProjects.map((study, index) => (
                  <div
                    key={index}
                    className="snap-center shrink-0 w-[85%] min-w-[260px] h-[520px] min-[513px]:h-[580px] max-[740px]:h-[580px] max-[512px]:h-[520px] rounded-[28px] bg-background/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-transform duration-300"
                  >
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

              {/* <div className="mt-3 flex items-center justify-center gap-2">
              {otherProjects.map((_, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center justify-center h-2.5 ${activeWorkIndex === index ? "w-8 bg-primary" : "w-2.5 bg-muted/40"} rounded-full transition-all duration-200`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div> */}
            </div>
          </div>

          {/* Personal Projects */}
          <div className="mt-16 max-w-6xl w-full mx-auto" style={{ order: sectionIndex.personalProjects }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl uppercase tracking-[0.3em] text-primary font-semibold">Personal Projects</h3>
              <p className="text-muted-foreground">Small experiments and side projects</p>
            </div>

            <div className="hidden min-[751px]:grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((p, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden flex flex-col sm:flex-row gap-5 p-4 sm:p-5">
                  <div className="flex-shrink-0 w-full sm:w-32 md:w-36 aspect-square overflow-hidden rounded-3xl bg-muted/10">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-h-[180px]">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2 text-lg sm:text-base">{p.title}</h4>
                      <p className="text-sm text-muted-foreground leading-6">
                        {p.disabled
                          ? "A coming soon concept with the next iteration of interactive workflows."
                          : "A compact project showcasing UX, interaction design, and lightweight project flows."}
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-4">
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
                          See Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-[750px]:block min-[751px]:hidden">
              <div
                ref={personalCarouselRef}
                className="flex snap-x snap-mandatory overflow-x-auto gap-5 pb-6 px-6 touch-pan-both scrollbar-hidden"
                aria-label="Personal projects carousel"
              >
                {personalProjects.map((p, i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-[85%] min-w-[260px] h-[540px] min-[513px]:h-[600px] max-[740px]:h-[600px] max-[512px]:h-[540px] rounded-[28px] bg-background/80 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition-transform duration-300"
                  >
                    <div className="glass-card rounded-2xl overflow-hidden flex flex-col gap-5 max-[740px]:gap-4 p-4 h-full">
                      <div className="flex-shrink-0 w-full aspect-square overflow-hidden rounded-3xl bg-muted/10">
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1 flex flex-col justify-between min-h-[140px]">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 line-clamp-2 text-lg max-[740px]:text-base">{p.title}</h4>
                          <p className="text-sm text-muted-foreground leading-6 max-[740px]:line-clamp-3">
                            {p.disabled
                              ? "A coming soon concept with the next iteration of interactive workflows."
                              : "A compact project showcasing UX, interaction design, and lightweight project flows."}
                          </p>
                        </div>

                        <div className="mt-auto">
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
                              See Case Study
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ux-roadmap-section max-w-6xl w-full mx-auto mt-16 hidden" style={{ order: sectionIndex.roadmap }}>
            <div className="ux-roadmap-header text-center">
              <h3 className="text-3xl font-semibold text-foreground">My UX Process 0 → 1</h3>
              <p className="text-muted-foreground">
                A visual roadmap that mirrors how I move from ambiguity to clarity.
              </p>
            </div>

            <div className="ux-roadmap">
              <svg className="ux-roadmap-svg" viewBox="0 0 1200 620" aria-hidden>
                <path
                  d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
                  fill="none"
                  stroke="rgba(245,245,245,0.92)"
                  strokeWidth="74"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
                  fill="none"
                  stroke="rgba(30,41,59,0.85)"
                  strokeWidth="64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M80 90 H1020 Q1120 90 1120 190 V250 Q1120 330 1020 330 H220 Q120 330 120 430 V480 Q120 560 220 560 H880"
                  fill="none"
                  stroke="rgba(226,232,240,0.9)"
                  strokeWidth="4"
                  strokeDasharray="18 18"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {uxSteps.map((step, index) => {
                const positions = [
                  { x: "12%", y: "6%" },
                  { x: "32%", y: "6%" },
                  { x: "55%", y: "6%" },
                  { x: "72%", y: "6%" },
                  { x: "78%", y: "44%" },
                  { x: "55%", y: "44%" },
                  { x: "38%", y: "44%" },
                  { x: "18%", y: "44%" },
                  { x: "16%", y: "78%" },
                  { x: "38%", y: "78%" },
                  { x: "50%", y: "78%" },
                  { x: "65%", y: "78%" }
                ];
                const pinColors = [
                  "#ef4444",
                  "#f97316",
                  "#f59e0b",
                  "#84cc16",
                  "#22c55e",
                  "#14b8a6",
                  "#06b6d4",
                  "#3b82f6",
                  "#6366f1",
                  "#8b5cf6",
                  "#ec4899",
                  "#f43f5e"
                ];
                const tagColors = [
                  "#fde68a",
                  "#fed7aa",
                  "#fecaca",
                  "#bbf7d0",
                  "#bae6fd",
                  "#c7d2fe",
                  "#e9d5ff",
                  "#fbcfe8",
                  "#d9f99d",
                  "#a7f3d0",
                  "#fef08a",
                  "#fca5a5"
                ];

                const position = positions[index] || { x: "0%", y: "0%" };
                const isActive = activeUxStep === index;
                const isVisible = visibleUxSteps.includes(index);

                return (
                  <div
                    key={step.title}
                    ref={el => {
                      uxStepRefs.current[index] = el;
                    }}
                    data-step={index}
                    className={`ux-signboard ${isActive ? "is-active" : ""} ${isVisible ? "is-visible" : ""}`}
                    style={{
                      left: position.x,
                      top: position.y,
                      ["--pin-color" as any]: pinColors[index % pinColors.length],
                      ["--tag-color" as any]: tagColors[index % tagColors.length]
                    }}
                  >
                    <div className="ux-pin-label">{step.title}</div>
                    <div className="ux-pin">
                      <span className="ux-pin-number">{index + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="ux-roadmap-note">
              This process is iterative. I continuously refine based on feedback and user behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesExtras() {
  const [visualTouching, setVisualTouching] = useState(false);
  const [bulletinItems, setBulletinItems] = useState(initialBulletinItems);
  const bulletinBoardRef = useRef<HTMLDivElement | null>(null);
  const bulletinItemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dragRef = useRef<{ index: number; offsetX: number; offsetY: number } | null>(null);
  const dragFrameRef = useRef<number | null>(null);
  const dragNextPosRef = useRef<{ x: number; y: number } | null>(null);
  const dragBoardSizeRef = useRef<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      if (!dragRef.current || !bulletinBoardRef.current) return;
      const board = bulletinBoardRef.current;
      const boardRect = board.getBoundingClientRect();
      dragBoardSizeRef.current = { width: boardRect.width, height: boardRect.height };
      const { index, offsetX, offsetY } = dragRef.current;
      const currentIndex = index;
      const itemEl = bulletinItemRefs.current[currentIndex];
      const itemWidth = itemEl?.offsetWidth ?? 160;
      const itemHeight = itemEl?.offsetHeight ?? 160;

      const maxX = Math.max(0, boardRect.width - itemWidth);
      const maxY = Math.max(0, boardRect.height - itemHeight);
      const rawX = event.clientX - boardRect.left - offsetX;
      const rawY = event.clientY - boardRect.top - offsetY;
      const clampedX = Math.min(Math.max(0, rawX), maxX);
      const clampedY = Math.min(Math.max(0, rawY), maxY);
      dragNextPosRef.current = { x: clampedX, y: clampedY };

      if (dragFrameRef.current == null) {
        dragFrameRef.current = requestAnimationFrame(() => {
          const next = dragNextPosRef.current;
          const size = dragBoardSizeRef.current;
          dragFrameRef.current = null;
          if (!next || !size || currentIndex == null) return;
          setBulletinItems(prev =>
            prev.map((item, i) =>
              i === currentIndex
                ? {
                  ...item,
                  x: (next.x / size.width) * 100,
                  y: (next.y / size.height) * 100
                }
                : item
            )
          );
        });
      }
    };

    const handleUp = () => {
      dragRef.current = null;
      dragNextPosRef.current = null;
      dragBoardSizeRef.current = null;
      if (dragFrameRef.current) {
        cancelAnimationFrame(dragFrameRef.current);
        dragFrameRef.current = null;
      }
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      if (dragFrameRef.current) {
        cancelAnimationFrame(dragFrameRef.current);
        dragFrameRef.current = null;
      }
    };
  }, []);
  const extrasSection = (
    <>
      {/* Bulletin Board */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl uppercase tracking-[0.3em] text-primary font-semibold">Certificates (L)Earned</h3>
          <p className="text-muted-foreground">From I'll learn to I learned it</p>
        </div>

        <div className="relative mx-auto max-w-6xl rounded-[34px] border border-white/15 bg-background/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/5">
          <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle,rgba(213,182,124,0.18)_1.6px,transparent_1.6px)] [background-size:24px_24px] opacity-70" />
          <div className="absolute inset-3 rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-black/30" />

          <div ref={bulletinBoardRef} className="relative h-[420px] overflow-hidden">
            {bulletinItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  bulletinItemRefs.current[index] = el;
                }}
                className="absolute bulletin-card cursor-grab active:cursor-grabbing"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  width: item.width,
                  transform: `rotate(${item.rotate}deg)`
                }}
                onPointerDown={(event) => {
                  event.preventDefault();
                  const board = bulletinBoardRef.current;
                  if (!board) return;
                  const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
                  dragRef.current = {
                    index,
                    offsetX: event.clientX - rect.left,
                    offsetY: event.clientY - rect.top
                  };
                  (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
                }}
              >
                <div className="rounded-2xl bg-white/95 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
            Try moving things
          </p>
        </div>
      </div>

      <UxRoadmapSection className="mt-16 hidden min-[1001px]:block" />

      {/* Visual Screens Carousel */}
      <div className="mt-10 max-w-6xl mx-auto">
        <div className="text-center mb-3">
          <h3 className="text-2xl uppercase tracking-[0.3em] text-primary font-semibold">Some Visual Screens</h3>
          <p className="text-muted-foreground">A quick look at UI explorations and key screens</p>
        </div>

        <div
          className={`visual-carousel relative z-10 min-h-[200px] rounded-[32px] border border-white/10 bg-background/70 px-4 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)] max-[750px]:px-5 max-[750px]:py-2 max-[750px]:rounded-[28px] overflow-x-auto scrollbar-hidden touch-pan-both ${visualTouching ? "is-touching" : ""}`}
          onTouchStart={() => setVisualTouching(true)}
          onTouchEnd={() => setVisualTouching(false)}
          onTouchCancel={() => setVisualTouching(false)}
        >
          <div className="visual-carousel-track">
            {[...visualScreenSources, ...visualScreenSources].map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="visual-carousel-card shrink-0 w-[300px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] rounded-2xl overflow-hidden bg-muted/30 ring-1 ring-white/10 max-[750px]:w-[85%] max-[750px]:min-w-[260px] max-[750px]:h-[200px] max-[750px]:rounded-[26px] max-[750px]:shadow-[0_12px_30px_rgba(0,0,0,0.35)] max-[750px]:px-3 max-[750px]:py-3"
              >
                <img src={src} alt="Visual screen" className="h-full w-full object-cover rounded-[20px]" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  return <div className="hidden min-[751px]:block">{extrasSection}</div>;
}
