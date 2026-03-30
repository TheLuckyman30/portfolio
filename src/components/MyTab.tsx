interface MyTabProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant?: "primary";
  index?: number;
  isSelected?: boolean;
  setSelectedIndex?: (newSelectedIndex: number) => void;
}

export function MyTab({
  children,
  variant = "primary",
  index,
  isSelected,
  setSelectedIndex,
  ...buttonParams
}: MyTabProps) {
  if (
    setSelectedIndex !== undefined &&
    isSelected !== undefined &&
    index !== undefined
  ) {
    const colorClasses = { primary: isSelected ? "bg-white" : "" };
    const changeIndex = () => setSelectedIndex(index);

    return (
      <button
        {...buttonParams}
        onClick={(e) => {
          changeIndex();
          buttonParams.onClick?.(e);
        }}
        className={`rounded-full px-2 py-0.5 cursor-pointer ${colorClasses[variant]}`}
      >
        {children}
      </button>
    );
  }
}
