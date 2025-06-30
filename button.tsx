import { cn } from "../../lib/utils";

export function Button({ children, className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" && "bg-white text-blue-600 border border-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}