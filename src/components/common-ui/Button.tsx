import "@commonUiCss/button.css";

interface ButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...buttonParams
}: ButtonProps) {
  const colorClasses = {
    primary: "button-primary-color",
    secondary: "button-secondary-color",
  };

  return (
    <button {...buttonParams} className={`button ${colorClasses[variant]}`}>
      {children}
    </button>
  );
}
