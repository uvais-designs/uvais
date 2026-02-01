import React, { useRef, useEffect, useState } from "react";
import {
  FaLinkedin,
  FaBehance,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaWordpress,
  FaGithub,
  FaFigma
} from "react-icons/fa";
import { useIsMobile } from "./ui/use-mobile";

export function Contact() {
  const isMobile = useIsMobile();
  const icons = [
    {
      href: "mailto:ysul2505@gmail.com",
      label: "Email",
      Icon: FaEnvelope,
      color: "#EA4335", // Gmail Red
    },
    {
      href: "https://www.linkedin.com/in/uvaisulkarni25/",
      label: "LinkedIn",
      Icon: FaLinkedin,
      color: "#0A66C2", // LinkedIn Blue
    },
    {
      href: "https://www.figma.com/design/sMaCcp6O3qgYvbNFbxmpi4/Uvaisul?node-id=1626-262&t=0tkEohgXWXsB7EBX-1",
      label: "Figma",
      Icon: FaFigma,
      color: "#F24E1E", // Figma Orange
    },
     {
      href: "tel:+918344875844",
      label: "Phone",
      Icon: FaPhone,
      color: "#6B7280", // Gray
    },
      ...(isMobile ? [] : [{
      href: "https://www.behance.net/uvaisulkarni",
      label: "Behance",
      Icon: FaBehance,
      color: "#1769FF", // Behance Blue
    }]),
    ...(isMobile ? [] : [{
      href: "https://api.whatsapp.com/send?phone=918344875844&text=Hi,%20Are%20you%20available%20for%20a%20quick%20chat%20regarding%20",
      label: "WhatsApp",
      Icon: FaWhatsapp,
      color: "#25D366", // WhatsApp Green
    }]),
    ...(isMobile ? [] : [{
      href: "https://uvaisdesigns.wordpress.com/",
      label: "WordPress",
      Icon: FaWordpress,
      color: "#21759B", // WP Blue
    }]),
    ...(isMobile ? [] : [{
      href: "https://github.com/uvais-designs",
      label: "GitHub",
      Icon: FaGithub,
      color: "#111827", // GitHub / dark
    }]),
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const [scales, setScales] = useState<number[]>(icons.map(() => 1));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const MAX_SCALE = 2; // maximum magnification for hovered icon
    const INFLUENCE = 160; // px radius where magnify still applies

    const handleMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX;
      const newScales = icons.map((_, i) => {
        const el = itemRefs.current[i];
        if (!el) return 1;
        const r = el.getBoundingClientRect();
        const centerX = r.left + r.width / 2;
        const dist = Math.abs(centerX - x);
        const t = Math.max(0, 1 - dist / INFLUENCE); // 1 at center, 0 outside
        // smooth easing
        const eased = t * t * (3 - 2 * t);
        return 1 + eased * (MAX_SCALE - 1);
      });
      // batch set via rAF
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScales(newScales);
      });
    };

    const handleLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScales(icons.map(() => 1)));
    };

    container.addEventListener("pointermove", handleMove);
    container.addEventListener("pointerleave", handleLeave);
    container.addEventListener("pointercancel", handleLeave);

    return () => {
      container.removeEventListener("pointermove", handleMove);
      container.removeEventListener("pointerleave", handleLeave);
      container.removeEventListener("pointercancel", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [icons]);

  return (
    <section className="py-16 flex justify-center">
      <div
        ref={containerRef}
        className="dock-frame relative inline-flex items-end px-4 py-3 bg-white/6 backdrop-blur-md rounded-full shadow-lg"
        role="navigation"
        aria-label="Contact dock"
        style={{ WebkitUserSelect: "none" }}
      >
        {/* Dock background glow */}
        <div className="absolute -inset-2 rounded-full opacity-20 pointer-events-none" />

        <div className="flex items-end gap-4 z-10" style={{ padding: "6px 10px" }}>
          {icons.map((item, idx) => {
            const IconComp = item.Icon;
            const scale = scales[idx] ?? 1;
            const color = scale > 1.02 ? item.color : "#FFFFFF";
            return (
                <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className="dock-item inline-flex items-center justify-center rounded-full bg-transparent transition-transform duration-150 ease-out"
                style={{
                  width: 56,
                  height: 56,
                  transform: `translateY(${-(scale - 1) * 18}px) scale(${scale})`,
                  transformOrigin: "center bottom",
                }}
                onClick={() => {
                  /* allow default navigation */ 
                }}
                >
                <div
                  className="icon-inner w-12 h-12 flex items-center justify-center rounded-full"
                  style={{
                  background: "rgba(255,255,255,0.06)",
                  boxShadow: "0 6px 18px rgba(2,6,23,0.35)",
                  color: color,
                  transition: "color 160ms ease, background 160ms ease",
                  }}
                >
                  <IconComp size={20} aria-hidden />
                </div>
                </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
