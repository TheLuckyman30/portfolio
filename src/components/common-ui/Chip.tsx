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

  return (
    <div
      {...divProps}
      className={`p-1 ${sizeClasses[size]} bg-gray-50 border border-gray-300 rounded-md text-gray-700 text-center sm:whitespace-nowrap`}
    >
      {children}
    </div>
  );
}
