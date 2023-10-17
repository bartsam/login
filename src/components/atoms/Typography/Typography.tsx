import classNames from "classnames";
import { ReactNode, createElement } from "react";
import styles from "./Typography.module.scss";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
  className?: string;
};

const Typography = ({
  tag = "p",
  children,
  className,
  ...restProps
}: TypographyProps) => {
  const props = {
    className: classNames(styles.content, className),
    ...restProps,
  };
  return createElement(tag, props, children);
};

export default Typography;
