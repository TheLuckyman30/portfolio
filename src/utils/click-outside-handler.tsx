import { useEffect } from "react";

export function useClickOutsie(
  ref: React.RefObject<HTMLElement | null>,
  show: boolean,
  setShow: (show: boolean) => void,
) {
  useEffect(() => {
    if (!show) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, show]);
}
