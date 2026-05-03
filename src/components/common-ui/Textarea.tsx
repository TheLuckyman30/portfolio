import "@commonUiCss/text-area.css";

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
  const colorClasses = { primary: "text-area-primary-color" };

  return (
    <textarea
      className={`text-area ${colorClasses[variant]}`}
      {...textareaParams}
    />
  );
}
