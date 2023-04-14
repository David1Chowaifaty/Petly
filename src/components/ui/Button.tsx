import { VariantProps, cva } from "class-variance-authority";
import { FunctionComponent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { title } from "process";
import React from "react";
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leadingIcon?: ReactNode;
  title: string;
  isLoading?: boolean;
}

export const buttonVariants = cva(
  "inline-flex items-center gap-4 justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-sky-400 text-white hover:bg-opacity-80",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline: "bg-transparent border border-slate-200 hover:bg-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 ",
        ghost: "bg-transparent hover:bg-slate-100",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900",
      },
      size: {
        default: "h-10 py-2 w-full px-4 rounded-md",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { leadingIcon, isLoading, title, className, variant, size, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {isLoading ? (
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-5 h-5 mr-3 text-sky-400 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          leadingIcon && <span className="mr-2">{leadingIcon}</span>
        )}
        <span>{title}</span>
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
