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
    primary: "bg-slate-700 border-slate-950 text-white",
  };

  return (
    <div
      {...divProps}
      className={`p-1 border font-medium shdadow-md rounded-md text-center sm:whitespace-nowrap hover:scale-110 duration-75 ${sizeClasses[size]} ${colorClasses[variant]}`}
    >
      {children}
    </div>
  );
}
