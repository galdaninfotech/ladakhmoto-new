export const handleAccordionScrollIntoView = (
  event: React.MouseEvent<HTMLButtonElement>,
  triggerId: string
) => {
  setTimeout(() => {
    const trigger = document.getElementById(triggerId);
    if (trigger) {
      // Calculate position with offset for sticky header (71px) + tour nav bar (~45px)
      const offset = 120; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = trigger.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 500);
};