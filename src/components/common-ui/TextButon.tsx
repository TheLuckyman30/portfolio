import "@commonUiCss/text-button.css";

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
  const colorClasses = { primary: "text-button-primary-color" };

  return (
    <div {...divParams} className={`text-button ${colorClasses[variant]}`}>
      {children}
    </div>
  );
}
