import classNames from "classnames";
import React, { FormHTMLAttributes, InputHTMLAttributes } from "react";
import styles from "./Form.module.scss";

type FormProps = {
  children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

const Form: React.FC<FormProps> = ({ children, className, ...props }) => {
  return (
    <form className={classNames(styles.Form, className, {})} {...props}>
      {children}
    </form>
  );
};

export default Form;
