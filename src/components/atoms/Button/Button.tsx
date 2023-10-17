import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface ButtonProps {
  variant: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  variant,
  type = "button",
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
      className={classNames(styles.wrapper, className, {
        [styles[`wrapper--${variant}`]]: variant,
      })}
    >
      <span className={styles.label}>{children}</span>
    </Link>
  ) : (
    <button
      type={type}
      className={classNames(styles.wrapper, className, {
        [styles[`wrapper--${variant}`]]: variant,
      })}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>
    </button>
  );
};

export default Button;
