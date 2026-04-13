interface ButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant?: "primary";
}

export function Button({
  children,
  variant = "primary",
  ...buttonParams
}: ButtonProps) {
  const colorClasses = {
    primary: "bg-blue-700 hover:bg-blue-900 text-white disabled:bg-gray-400",
  };

  return (
    <button
      {...buttonParams}
      className={`not-disabled:cursor-pointer font-medium p-1.5 rounded-md not-disabled:hover:scale-105 duration-75 w-fit ${colorClasses[variant]}`}
    >
      {children}
    </button>
  );
}
