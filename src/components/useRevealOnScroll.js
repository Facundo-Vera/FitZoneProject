import { useEffect } from "react";

export const useRevealOnScroll = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-appear]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-20",
              "translate-y-4",
              "blur-sm"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "blur-0"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
};
