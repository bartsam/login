import styles from "./page.module.scss";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome</h1>
      <Button variant="primary" href="/login">
        Login
      </Button>
    </div>
  );
}
