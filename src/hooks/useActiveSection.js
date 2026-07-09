// "use client"
// import { useEffect, useState } from "react";

// export default function useActiveSection(
//   selector = 'section[data-scrollspy]',
//   options = { threshold: 0.6 }
// ) {
//   const [activeId, setActiveId] = useState(null);

//   useEffect(() => {
//     const sections = Array.from(document.querySelectorAll(selector));
//     if (sections.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveId(entry.target.id);
//           }
//         });
//       },
//       options
//     );

//     sections.forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, [selector, JSON.stringify(options)]);

//   return activeId;
// }





import { useEffect, useState } from "react";

export default function useActiveSection(
  selector = 'section[data-scrollspy]',
  options = { 
    rootMargin: '-10% 0px -70% 0px', // Top 10% and bottom 30% of viewport
    threshold: [0, 0.25, 0.5, 0.75, 1] 
  }
) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(selector));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio that's currently visible
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      options
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selector]);

  return activeId;
}
