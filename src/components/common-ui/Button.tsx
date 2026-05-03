import "@commonUiCss/button.css";

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
    primary: "button-primary-color",
  };

  return (
    <button {...buttonParams} className={`button ${colorClasses[variant]}`}>
      {children}
    </button>
  );
}
