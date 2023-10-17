import classNames from "classnames";
import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import { FieldError } from "react-hook-form";
import Typography from "../Typography";

type InputProps = {
  variant?: "default" | "full-width";
  label: string;
  error?: FieldError | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    {
      variant = "default",
      name,
      error,
      label,
      className,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.wrapper, className, {
          [styles[`wrapper--${variant}`]]: variant,
        })}
      >
        <input name={name} placeholder="" {...props} />
        <label htmlFor={name}>{label}</label>
        {error && (
          <Typography tag="span" className={styles.error}>
            {error.message}
          </Typography>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
