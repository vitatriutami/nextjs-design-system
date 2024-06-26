import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "bg-slate-50 text-slate-800 font-medium tracking-tight rounded-lg px-4 py-2",
  variants: {
    variant: {
      primary: "bg-indigo-600 text-white",
      secondary: "bg-slate-200 text-slate-700",
      outline: "bg-transparent border border-slate-200",
      ghost: "bg-transparent text-slate-300",
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

type TButton = VariantProps<typeof style>;

// 1. extends dari type
// 2. extends dari native dan cari secara khusus "button"
//    -> akan memiliki gabungan dari type dan seluruh props dari button
interface Props extends TButton, React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

// interface Props {
//   children: React.ReactNode;
//   variant?: "primary" | "secondary" | "outline";
//   size?: "sm" | "md" | "lg";
// }

export const Button = (props: Props) => {
  // spreading props -> style akan cari key yang sesuai di interface Props, selebihnya di-ignore
  // agar onClick melakukan trigger: spread props
  return (
    <button {...props} className={style({ ...props })}>
      {props.children}
    </button>
  );
};
