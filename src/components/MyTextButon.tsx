interface MyTextButtonProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  variant?: "primary";
}

export function MyTextButton({
  children,
  variant = "primary",
  ...divParams
}: MyTextButtonProps) {
  const colorClasses = { primary: "text-blue-500 hover:text-blue-700" };

  return (
    <div
      {...divParams}
      className={`cursor-pointer font-medium duration-75 hover:scale-102 ${colorClasses[variant]}`}
    >
      {children}
    </div>
  );
}
