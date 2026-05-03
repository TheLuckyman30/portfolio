import "@commonUiCss/alert.css";

interface AlertProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  variant?: "primary" | "success" | "error";
  message: string;
  header: string;
}

export function Alert({
  variant = "primary",
  message,
  header,
  ...divParams
}: AlertProps) {
  const colorClasses = {
    primary: "alert-primary-color",
    success: "alert-success-color",
    error: "alert-error-color",
  };

  return (
    <div className={`alert ${colorClasses[variant]}`} {...divParams}>
      <p className="alert-header">{header}</p>
      <p className="alert-message">{message}</p>
    </div>
  );
}
