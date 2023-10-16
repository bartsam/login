import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  variant?: "default" | "bordered";
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  variant = "default",
  className,
  ...props
}) => {
  return (
    <input
      className={classNames(styles.Input, className, {
        [styles[`Input--${variant}`]]: variant,
      })}
      {...props}
    />
  );
};

export default Input;
