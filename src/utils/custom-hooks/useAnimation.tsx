import { useIntersection } from "@utils";
import { useEffect } from "react";

export function useAnimation(
  ref: React.RefObject<HTMLElement | null>,
  animation: string,
) {
  const isVisible = useIntersection(ref);

  useEffect(() => {
    if (isVisible) ref.current?.classList.add(animation);
  }, [isVisible, animation, ref]);
}
