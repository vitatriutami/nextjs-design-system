import React from "react";
import { tv } from "tailwind-variants";

const style = tv({
  base: "bg-slate-50 text-slate-800 font-medium tracking-tight rounded-lg px-4 py-2",
  variants: {
    variant: {
      primary: "bg-indigo-600 text-white",
      secondary: "bg-slate-200 text-slate-700",
      outline: "bg-transparent border border-slate-200",
    },
    size: {
      sm: "px-2.5 py-1.5 text-sm",
      md: "px-3.5 py-2.5 text-base",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({ children, size, variant }: Props) => {
  return <button className={style({ size, variant })}>{children}</button>;
};
