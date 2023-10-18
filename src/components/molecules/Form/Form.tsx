import classNames from "classnames";
import { FC, ReactNode, FormHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Form.module.scss";

type FormProps = PropsWithChildren & FormHTMLAttributes<HTMLFormElement>;

const Form: FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <form className={classNames(styles.wrapper, className)} {...props}>
      {children}
    </form>
  );
};

export default Form;
