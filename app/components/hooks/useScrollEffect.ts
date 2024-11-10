import { useEffect, useRef, useState } from "react";

export function useScrollEffect(threshold: number = 0.5) {
  const [scrollPos, setScrollPos] = useState(0);
  const [isInView, setIsInView] = useState(false);  
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);  
      },
      { threshold } // Trigger when a specific portion (e.g., 50%) of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    const handleScroll = () => {
      if (isInView && sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        
        if (sectionTop < window.innerHeight) {
          const sectionOffsetTop = sectionRef.current.offsetTop;
          const normalizedScroll = window.scrollY - sectionOffsetTop;
          setScrollPos(normalizedScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return { scrollPos, sectionRef, isInView };  // Return isInView as a state, not ref
}
