import { useEffect } from "react";

export function useCloseModal(
  ref: React.RefObject<HTMLElement | null>,
  fn?: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        fn?.();
      }
    }

    function handleClickEscape(event: KeyboardEvent) {
      console.log("test");
      if (event.key === "Escape") {
        fn?.();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickEscape);
    };
  }, [ref, fn]);
}
