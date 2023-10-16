import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  variant: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  onClick,
  href,
  isExternal,
}) => {
  return !!href ? (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      onClick={onClick}
      className={classNames(styles.Button, className, {
        [styles[`Button--${variant}`]]: variant,
      })}
    >
      <span>{children}</span>
    </Link>
  ) : (
    <button
      className={`
    ${styles.button} 
    ${variant ? styles[`button--${variant}`] : ""}
  `}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
