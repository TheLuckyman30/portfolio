import { useAnimation } from "@utils";
import { useRef } from "react";
import "@componentCss/section-header.css";

interface SectionHeaderProps {
  sectionName: string;
}

export function SectionHeader({ sectionName }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useAnimation(ref, "animate-drop-in");

  return (
    <h1 ref={ref} className="section-header delay-75">
      {sectionName}
    </h1>
  );
}
