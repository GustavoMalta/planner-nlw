import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center rounded-lg px-5 font-medium gap-2 justify-center",
  variants: {
    btType: {
      primary: "bg-lime-300 hover:bg-lime-400 text-lime-950",
      secondary: "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 ",
    },
    size: { default: "py-2", full: "w-full h-11" },
  },
  defaultVariants: { btType: "primary", size: "default" },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
export function Button({ children, btType, size, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ btType, size })}>
      {children}
    </button>
  );
}
