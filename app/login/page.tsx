import Form from "@/components/molecules/Form";
import styles from "./page.module.scss";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

export default function Login() {
  return (
    <section className={styles.Login}>
      <h1>Login</h1>
      <Form>
        <Input type="text" />
      </Form>
      <Button variant="secondary" href="/">
        back
      </Button>
    </section>
  );
}
