import './styles/globals.css';
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import { Navigation } from "./components/Navigation";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { CaseStudies } from "./components/CaseStudies";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact";
import { WhyDesign } from "./components/WhyDesign";
import ProfileCard from './components/ProfileCard'


export default function App() {
  const [isLoading, setIsLoading] = useState(true);//change this to true to show the loader
  const [showContent, setShowContent] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="bg-background min-h-screen relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes with sample colors */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent morphing-blob blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-pink-500/10 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Loader */}
      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      {/* Main content */}
      <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
        {!isLoading && (
          <>
            <Navigation />
            <main className="relative z-10">

              <ProfileCard
                name="Uvaisul Karni"
                title="UXD"
                handle="uvais"
                status="Online"
                contactText="Contact Me"
                avatarUrl="images/uvaisul.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                mobileTiltSensitivity={2}
                onContactClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
              <CaseStudies />
              <Experience />
              <Education />
              <Leadership />
              <WhyDesign />
              <div id="contact">
                <Contact />
              </div>
            </main>

            {/* Scroll to top button */}
            <ScrollToTopButton />
          </>
        )}
      </div>
    </div>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 glass-button p-3 rounded-full transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}