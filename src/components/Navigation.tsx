import { useState, useEffect } from "react";


interface NavItem {
  href: string;
  label: string;
}

interface NavigationProps {
  isVisible?: boolean;
  logoVisible?: boolean;
}

export function Navigation({ isVisible = true, logoVisible = true }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state immediately for any scroll
      setIsScrolled(window.scrollY > 0);

      // Update active section with offset for navbar height
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 64; // navbar height offset

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    // Throttled scroll handler for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const navItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-nav shadow-lg border-b border-white/10 backdrop-blur-md'
        : 'bg-background/50 backdrop-blur-sm'
        } ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div
        className={`container mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'
          }`}
      >
        {/* Logo */}
        <a href="#home" className="w-16 h-12 flex items-center">
          <div
            data-nav-logo
            className={`w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl 
       flex items-center justify-center transition-all duration-300 
      ${isScrolled ? 'scale-90' : 'scale-100'} ${logoVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src="images/uklogo.svg"
              alt="UK"
              className="w-12 h-12 object-contain"
            />
          </div>
        </a>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group
                ${activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
                }
                ${isScrolled ? 'py-1.5' : 'py-2'}
              `}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              <span className="relative z-10">{item.label}</span>
              <div className={`absolute inset-0 rounded-lg transition-all duration-200
                ${activeSection === item.href.slice(1)
                  ? 'bg-primary/10'
                  : 'scale-0 group-hover:scale-100 glass-button'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-white/10 transition-all duration-300 
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-base transition-colors duration-200 rounded-lg
                ${activeSection === item.href.slice(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
