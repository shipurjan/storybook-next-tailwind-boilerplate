import { VariantProps, cva } from "class-variance-authority";
import { getNamedObjects, cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

/// ********************************************
// TypeScript will ensure that export names at the bottom of the file are correct.
// So you can just copy and paste this file and reuse it,
// creating a new component, and have type-safe export names.
//
// The exports will be named after these values:
// Declare component name here
const COMPONENT_NAME = "Button";
// Declare props name here
export type ButtonProps = Props;
/// ********************************************

type RefType = HTMLButtonElement;
type Props = HTMLAttributes<RefType> & {
  variants?: VariantProps<typeof Variants>;
};

const Component = forwardRef<RefType, Props>(
  ({ variants, className, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={cn(Variants({ ...variants, className }))}
    />
  ),
);

const Variants = cva(
  "inline-flex items-center justify-center rounded-md font-medium cursor-pointer border bg-gradient-to-b",
  {
    variants: {
      theme: {
        primary: "from-cyan-600 to-cyan-700 text-white border-cyan-800",
        secondary: "from-teal-600 to-teal-700 text-white border-teal-800",
        warning: "from-yellow-600 to-yellow-700 text-white border-yellow-800",
        dangerous: "from-red-600 to-red-700 text-white border-red-800",
      },
      size: {
        lg: "h-12 py-3 px-5",
        md: "h-10 py-2 px-4",
        sm: "h-8 py-1 px-3",
      },
    },
    defaultVariants: {
      theme: "primary",
      size: "md",
    },
  },
);

Component.displayName = COMPONENT_NAME;
export const { Button, ButtonVariants } = getNamedObjects(COMPONENT_NAME, {
  Component,
  Variants,
});
