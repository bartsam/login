import classNames from "classnames";
import { FC, ReactNode, FormHTMLAttributes, LegacyRef } from "react";
import styles from "./Form.module.scss";

type FormProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

const Form: FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <form className={classNames(styles.wrapper, className)} {...props}>
      {children}
    </form>
  );
};

export default Form;
