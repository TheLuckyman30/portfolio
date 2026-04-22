interface TextButtonProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  variant?: "primary";
}

export function TextButton({
  children,
  variant = "primary",
  ...divParams
}: TextButtonProps) {
  const colorClasses = { primary: "text-blue-700 hover:text-blue-900" };

  return (
    <div
      {...divParams}
      className={`text-lg cursor-pointer font-medium duration-75 hover:scale-103 w-fit select-none whitespace-nowrap ${colorClasses[variant]}`}
    >
      {children}
    </div>
  );
}
