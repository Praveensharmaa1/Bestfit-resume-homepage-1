import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

export const Button: React.FC<ButtonProps> = ({ variant = "solid", className, ...props }) => {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const solid = "bg-blue-600 hover:bg-blue-700";
  const outline = "border border-blue-600 text-blue-600 hover:bg-blue-50";

  const classes = variant === "outline" ? \`\${base} \${outline}\` : \`\${base} \${solid}\`;

  return <button className={\`\${classes} \${className || ""}\`} {...props} />;
};