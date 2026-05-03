import "@commonUiCss/chip.css";

interface ChipProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  variant?: "primary";
  size?: "xs" | "sm" | "md" | "lg";
}

export function Chip({
  variant = "primary",
  size = "xs",
  children,
  ...divProps
}: ChipProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const colorClasses = {
    primary: "chip-primary-color",
  };

  return (
    <div
      {...divProps}
      className={`chip ${sizeClasses[size]} ${colorClasses[variant]}`}
    >
      {children}
    </div>
  );
}
