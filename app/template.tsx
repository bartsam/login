"use client";

import { useLoginContext } from "@/contexts/LoginContext";
import styles from "./page.module.scss";
import classNames from "classnames";
import { ToastContainer, Slide } from "react-toastify";

export default function Template({ children }: { children: React.ReactNode }) {
  const { email } = useLoginContext();

  return (
    <div
      className={classNames(styles.template, {
        [styles["template--logged"]]: !!email,
      })}
    >
      {children}
      <ToastContainer transition={Slide} /> 
    </div>
  );
}
