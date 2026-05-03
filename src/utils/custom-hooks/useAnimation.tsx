import { useIntersection } from "@utils";
import { useEffect } from "react";

export function useAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animation: string,
) {
  const isVisible = useIntersection(ref);

  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.classList.add(animation);
      ref.current.style.opacity = "100%";
    }
  }, [isVisible, animation, ref]);
}
