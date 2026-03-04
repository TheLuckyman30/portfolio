interface MyButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant?: "primary";
}

export function MyButton({
  children,
  variant = "primary",
  ...buttonParams
}: MyButtonProps) {
  const colorClasses = { primary: "bg-blue-500 text-white" };

  return (
    <button
      {...buttonParams}
      className={`cursor-pointer font-medium p-1.5 rounded-md hover:scale-105 duration-75 ${colorClasses[variant]}`}
    >
      {children}
    </button>
  );
}
