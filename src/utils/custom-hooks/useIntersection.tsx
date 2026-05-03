import { useEffect, useState } from "react";

export function useIntersection(ref: React.RefObject<HTMLElement | null>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (element) intersectionObserver.observe(element);

    return () => {
      if (element) intersectionObserver.unobserve(element);
    };
  }, []);

  return isVisible;
}
