import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const variants = cva(
  "inline-flex items-center justify-center rounded-md font-medium cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-slate-900 dark:bg-white text-white dark:text-slate-900",
        red: "bg-red-400 text-cyan-400",
      },
      size: {
        default: "h-10 py-2 px-4",
        small: "h-8 py-1 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type Props = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants> & {};

const Component = forwardRef<HTMLDivElement, Props>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      {...props}
      ref={ref}
      className={cn(variants({ variant, size, className }))}
    />
  ),
);
Component.displayName = "Button";

export { Component as Button, variants as ButtonVariants };
export type { Props as ButtonProps };
