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
  return (
    <div
      {...divProps}
      className={`p-1 text-${size} bg-gray-50 border border-gray-300 rounded-md text-gray-700 text-center`}
    >
      {children}
    </div>
  );
}
