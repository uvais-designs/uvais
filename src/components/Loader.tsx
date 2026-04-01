import { useState, useEffect, useRef } from "react";

interface LoaderProps {
  onComplete: () => void;
  onLogoArrive?: () => void;
}

export function Loader({ onComplete, onLogoArrive }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading, transitioning, complete
  const [flyState, setFlyState] = useState({ x: 0, y: 0, scale: 1, active: false });
  const logoRef = useRef<HTMLDivElement | null>(null);
  const hasFlownRef = useRef(false);
  const flyDurationMs = 1200;

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const next = Math.min(prev + Math.random() * 20, 100);
        if (next >= 100) {
          clearInterval(progressInterval);
          setPhase('transitioning');

          // Delay phase change and onComplete for clean transitions
          setTimeout(() => {
            setPhase('complete');
          }, flyDurationMs); // Allow logo animation to complete

          setTimeout(() => {
            onComplete(); // Unmount after fade-out
          }, flyDurationMs + 400); // Slightly after 'complete' phase

          return 100;
        }
        return next;
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, [onComplete]);


  useEffect(() => {
    if (phase !== 'transitioning') return;
    if (hasFlownRef.current) return;

    const logoEl = logoRef.current;
    const navLogoEl = document.querySelector('[data-nav-logo]') as HTMLElement | null;
    if (!logoEl || !navLogoEl) return;

    const logoRect = logoEl.getBoundingClientRect();
    const navRect = navLogoEl.getBoundingClientRect();

    const dx = navRect.left + navRect.width / 2 - (logoRect.left + logoRect.width / 2);
    const dy = navRect.top + navRect.height / 2 - (logoRect.top + logoRect.height / 2);
    const scale = navRect.width / logoRect.width;

    setFlyState({ x: dx, y: dy, scale, active: true });
    hasFlownRef.current = true;
  }, [phase]);

  useEffect(() => {
    if (phase !== 'transitioning' || !onLogoArrive) return;
    const timer = setTimeout(() => onLogoArrive(), Math.max(0, flyDurationMs - 150));
    return () => clearTimeout(timer);
  }, [phase, onLogoArrive]);

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-1000 ${phase === 'complete' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)] animate-pulse"></div>
      </div>

      {/* Liquid glass overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10 dark:bg-black/10"></div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center space-y-8">
          {/* Animated Logo */}
          <div>
            <div className="relative">
              {/* Liquid glass logo container */}
              <div
                ref={logoRef}
                className={`w-24 h-24 mx-auto mb-6 relative transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${phase !== 'loading' ? 'z-50' : ''}`}
                style={{
                  transform: flyState.active
                    ? `translate(${flyState.x}px, ${flyState.y}px) scale(${flyState.scale})`
                    : 'translate(0px, 0px) scale(1)'
                }}
              >
                <div className="">
                  <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-primary/30 to-transparent backdrop-blur-sm"></div>
                </div>

                {/* Logo content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    {/* <div className="text-2xl font-bold text-primary relative z-10">UK</div> */}
                    <img
                      src="images/uklogo.svg"
                      alt="UK"
                      className="w-24 h-24"
                    /></div>
                </div>
              </div>

              {/* Name with typewriter effect */}
              <div className={`transition-all duration-500 ${phase !== 'loading' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  Hey, Uvais Here!
                </h1>
                <p className="text-muted-foreground font-bold">UXD</p>
              </div>
            </div>
          </div>

          {/* Progress section */}
          <div className={`transition-all duration-500 ${phase !== 'loading' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}>
            {/* Liquid glass progress container */}
            <div className="w-80 mx-auto p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-xl shadow-xl">
              <div className="space-y-4">
                {/* Progress bar */}
                <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>

                {/* Loading text */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    {phase === 'loading' ? 'Loading Portfolio...' : 'Ready!'}
                  </span>
                  <span className="text-primary font-medium">
                    {Math.round(progress)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full animate-bounce"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
