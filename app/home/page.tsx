import Form from "@/components/molecules/Form";
import styles from "./page.module.scss";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Button variant="secondary" href="/">
        back
      </Button>
    </>
  );
}
