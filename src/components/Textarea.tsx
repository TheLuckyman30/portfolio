interface TextareaProps extends React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> {
  variant?: "primary";
}

export function Textarea({
  variant = "primary",
  ...textareaParams
}: TextareaProps) {
  const colorClasses = { primary: "border-gray-300 bg-gray-50" };

  return (
    <textarea
      className={`block border p-2.5 rounded-lg text-sm w-full focus:outline-none min-h-50 ${colorClasses[variant]}`}
      {...textareaParams}
    />
  );
}
