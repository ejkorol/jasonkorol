import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority";
import cn from "classnames";

const buttonVariants = cva(
  "w-full flex items-center justify-center font-medium transition-all",
  {
    variants: {
      variant: {
        dark: "bg-dark text-white hover:bg-shadow",
        light: "bg-light text-black",
      },
      size: {
        default: "py-2 px-3",
      },
      radius: {
        default: "rounded-lg",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "dark",
      radius: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  link?: string;
}

const Button = ({
  variant,
  size,
  radius,
  link,
  children = "button",
  className = "",
}: ButtonProps) => {
  const CLASSES = cn(buttonVariants({ variant, size, radius, className }));

  return (
    <>
      {link ? (
        <Link href={link} className={CLASSES}>
          {children}
        </Link>
      ) : (
        <button className={CLASSES}>{children}</button>
      )}
    </>
  );
};

export { Button };
