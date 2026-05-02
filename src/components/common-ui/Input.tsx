import "@commonUiCss/input.css";

interface InputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  variant?: "primary";
}

export function Input({ variant = "primary", ...inputParams }: InputProps) {
  const colorClasses = {
    primary: "input-primary-color",
  };

  return (
    <input className={`input ${colorClasses[variant]}`} {...inputParams} />
  );
}
