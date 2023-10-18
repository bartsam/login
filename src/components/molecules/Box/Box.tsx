import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Box.module.scss";

type Boxrops = PropsWithChildren & { className?: string };

const Box: FC<Boxrops> = ({ children, className }) => {
  return <div className={classNames(styles.box, className)}>{children}</div>;
};

export default Box;
