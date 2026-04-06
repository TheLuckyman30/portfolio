import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from "react";

interface MyTabGroupProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  variant?: "primary";
  defaultIndex?: number;
  change?: (index: number) => void;
}

export function MyTabGroup({
  children,
  variant = "primary",
  defaultIndex = 0,
  change,
  ...divParams
}: MyTabGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);
  useEffect(() => {
    if (!change) return;

    change(selectedIndex);
  }, [selectedIndex, change]);

  const colorClasses = {
    primary: " bg-black/15 ",
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
    <div
      {...divParams}
      className={`flex gap-4 p-1 shadow-md w-fit rounded-full font-semibold ${colorClasses[variant]}`}
    >
      {newChildren}
    </div>
  );
}
