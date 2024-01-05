import Link from "next/link";
import React, { forwardRef } from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, IButton>(
  (
    { disabled, href, className, children, variant, onClick, ...passProps },
    ref,
  ) => {
    let buttonClasses = "flex items-center justify-center gap-[14px]";

    if (variant === "primary") {
      buttonClasses +=
        " h-[38px] px-[10px] text-[14px] font-medium text-textPrimary rounded-md bg-bgYellow";
    } else if (variant === "secondary") {
      buttonClasses +=
        " rounded-lg bg-white p-[13px] text-[14px] font-medium text-textPrimary";
    } else if (variant === "outline") {
      buttonClasses +=
        " border-bgBorder h-[46px] w-[46px] rounded-md border bg-transparent text-[14px] font-medium text-textPrimary";
    }

    buttonClasses += ` ${className}`;

    if (href) {
      return (
        <Link href={href}>
          <a className={buttonClasses} {...passProps}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...passProps}
      >
        {children}
      </button>
    );
  },
);

export default Button;
