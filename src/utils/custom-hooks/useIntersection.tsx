import { useEffect, useState } from "react";

export function useIntersection(element: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const current = element.current;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (current) intersectionObserver.observe(current);

    return () => {
      if (current) intersectionObserver.unobserve(current);
    };
  }, []);

  return isVisible;
}
