import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import { Button } from "./Button";

type Props = HTMLAttributes<RefType> & {
  variants?: VariantProps<typeof Variants>;
  user?: { name: string };
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  onDeleteAccount?: () => void;
};

type RefType = HTMLDivElement;
const Component = forwardRef<RefType, Props>(
  (
    {
      variants,
      className,
      user,
      onLogin,
      onLogout,
      onCreateAccount,
      onDeleteAccount,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      {...props}
      className={cn(Variants({ ...variants, className }))}
    >
      <div className="flex flex-col justify-center items-center pl-8 gap-2">
        <svg
          width="48"
          height="48"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1 className="font-bold">Acme</h1>
      </div>
      <div>
        {user ? (
          <div className="flex flex-col justify-center items-center gap-3">
            <div>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
            </div>
            <div className="flex gap-1">
              <Button variants={{ size: "sm" }} onClick={onLogout}>
                Log out
              </Button>
              <Button
                variants={{ size: "sm", theme: "dangerous" }}
                onClick={onDeleteAccount}
              >
                Delete account
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex gap-1">
            <Button variants={{ size: "sm" }} onClick={onLogin}>
              Log in
            </Button>
            <Button variants={{ size: "sm" }} onClick={onCreateAccount}>
              Sign up
            </Button>
          </div>
        )}
      </div>
    </div>
  ),
);

// Change component name and export names here
Component.displayName = "Header";
export { Component as Header, Variants as HeaderVariants };
export type { Props as HeaderProps };
//

const Variants = cva(
  "flex items-center justify-between p-4 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white w-full h-32",
  {
    variants: {},
    defaultVariants: {},
  },
);
