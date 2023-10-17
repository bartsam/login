import Form from "@/components/molecules/Form";
import styles from "./page.module.scss";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Typography from "@/components/atoms/Typography";
import { FormEventHandler, LegacyRef, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginFrom from "@/components/organisms/LoginFrom";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <Typography tag="h1" className={styles.Title}>
        Login
      </Typography>
      <LoginFrom />
    </div>
  );
}
