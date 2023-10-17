import styles from "./page.module.scss";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.wrapper}>{children}</section>;
}
