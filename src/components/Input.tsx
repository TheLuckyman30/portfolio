interface InputProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  variant?: "primary";
}

export function Input({ variant = "primary", ...inputParams }: InputProps) {
  const colorClasses = {
    primary: "border-gray-300 bg-gray-50",
  };

  return (
    <input
      className={`block border p-2.5 rounded-lg text-sm w-full focus:outline-none ${colorClasses[variant]}`}
      {...inputParams}
    />
  );
}
