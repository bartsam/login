import styles from "./page.module.scss";
import Typography from "@/components/atoms/Typography";
import LoginFrom from "@/components/organisms/LoginFrom";
import { ToastContainer, Slide } from "react-toastify";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <Typography tag="h1" className={styles.Title}>
        Login
      </Typography>
      <LoginFrom />
      <ToastContainer transition={Slide} /> 
    </div>
  );
}
