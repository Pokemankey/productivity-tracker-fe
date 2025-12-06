import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";

interface InputProps {
  children?: React.ReactNode;
  title: string;
  icon?: "email" | "lock" | "user";
  type?: string;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function Input({
  children,
  title,
  icon,
  type = "text",
  placeholder,
  error,
  onChange,
  value,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const renderIcon = () => {
    if (icon === "email") {
      return <Mail className="h-5 w-5 text-gray-400" />;
    }
    if (icon === "lock") {
      return <Lock className="h-5 w-5 text-gray-400" />;
    }
    if (icon === "user") {
      return <User className="h-5 w-5 text-gray-400" />;
    }
    return null;
  };

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-semibold text-gray-900">
        {title}
      </label>
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            {renderIcon()}
          </div>
        )}

        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition-colors placeholder:text-gray-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:outline-none ${
            icon ? "pl-12" : ""
          } ${isPassword ? "pr-12" : ""} ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
              : ""
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-4 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {children}
    </div>
  );
}
