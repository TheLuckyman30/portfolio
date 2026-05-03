import { useIntersection } from "@utils";
import { useEffect } from "react";

export function useAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animation: string,
) {
  const isVisible = useIntersection(ref);

  const updateAnimation = () => {
    ref.current?.classList.add(animation);
  };

  useEffect(() => {
    if (isVisible) updateAnimation();
  }, [isVisible, updateAnimation]);
}
