// import React from "react";
// import { tv, type VariantProps } from "tailwind-variants";
// import { twMerge } from "tailwind-merge";

// const style = tv({
//   base: "bg-slate-50 text-slate-800 font-medium tracking-tight rounded-lg px-4 py-2",
//   variants: {
//     variant: {
//       primary: "bg-rose-600 text-white",
//       secondary: "bg-slate-200 text-slate-700",
//       outline: "bg-transparent border border-slate-200",
//       ghost: "bg-transparent text-slate-300",
//     },
//     size: {
//       sm: "p-1.5 text-sm",
//       md: "p-2.5 text-base",
//       lg: "p-3 text-lg",
//     },
//   },
//   defaultVariants: {
//     variant: "primary",
//     size: "sm",
//   },
// });

// type TInput = VariantProps<typeof style>;

// // 1. extends dari type
// // 2. extends dari native dan cari secara khusus "button"
// //    -> akan memiliki gabungan dari type dan seluruh props dari button
// interface Props extends TInput, React.ComponentPropsWithRef<"input"> {
//   children: React.ReactNode;
// }

// export const Input = (props: Props) => {
//   return (
//     <input
//       {...props}
//       className={twMerge(style({ ...props }), props.className)} // twMerge = to override previous classes
//     >
//       {props.children}
//     </input>
//   );
// };
