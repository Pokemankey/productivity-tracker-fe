interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
}: ButtonProps) {
  let base =
    "rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition";

  let sizeStyles = {
    sm: "",
    md: "px-6 py-3 text-md",
    lg: "px-10 py-4 text-xl",
  };

  let styles = {
    primary:
      "bg-gradient-to-br from-indigo-600 to-purple-600 text-white hover:opacity-90",
    secondary: "bg-white text-indigo-600 hover:opacity-90",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </button>
  );
}
