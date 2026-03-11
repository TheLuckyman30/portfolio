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
      className={`text-2xl cursor-pointer font-medium duration-75 hover:scale-103 w-fit select-none ${colorClasses[variant]}`}
    >
      {children}
    </div>
  );
}
