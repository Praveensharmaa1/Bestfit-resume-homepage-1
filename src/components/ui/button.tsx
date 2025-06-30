import React from "react";
import { cn } from "./utils";

export const Button = ({ variant = "solid", className = "", ...props }) => {
  const base = "px-6 py-3 rounded font-medium transition";
  const solid = "bg-blue-600 text-white hover:bg-blue-700";
  const outline = "border border-blue-600 text-blue-600 hover:bg-blue-50";

  const classes =
    variant === "outline"
      ? `${base} ${outline}`
      : `${base} ${solid}`;

  return <button className={`${classes} ${className}`} {...props} />;
};
