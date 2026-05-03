import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";
import "@commonUiCss/tab-group.css";

interface TabGroupProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  variant?: "primary";
  defaultIndex?: number;
  change?: (index: number) => void;
}

export function TabGroup({
  children,
  variant = "primary",
  defaultIndex = 0,
  change,
  ...divParams
}: TabGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);
  useEffect(() => {
    if (!change) return;

    change(selectedIndex);
  }, [selectedIndex, change]);

  const colorClasses = {
    primary: "tab-group-primary-color",
  };

  const newChildren = Children.map(children, (child, index) => {
    if (
      isValidElement<{
        index: number;
        isSelected: boolean;
        setSelectedIndex: (newSelectedIndex: number) => void;
      }>(child)
    ) {
      return cloneElement(child, {
        index,
        isSelected: index === selectedIndex,
        setSelectedIndex,
      });
    }
  });

  return (
    <div {...divParams} className={`tab-group ${colorClasses[variant]}`}>
      {newChildren}
    </div>
  );
}
