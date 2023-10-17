"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Form from "@/components/molecules/Form";
import { isValidEmail } from "@/utils/helper/form/isValidEmail";
import styles from "./LoginFrom.module.scss";
import { toast } from "react-toastify";

type LoginProps = {
  email: string;
  password: string;
};

const LoginFrom = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit: SubmitHandler<LoginProps> = useCallback(
    (data) => {
      const { email, password } = data;
      const regexEmail = /@error./;
      const regexPassword = /^(?=.*\d).{3,}$/;
      if (regexEmail.test(email)) {
        toast.error("Domain '@error' isn't accepted", {
          position: toast.POSITION.BOTTOM_RIGHT,
          toastId: "login-error",
        });
      } else if (!regexPassword.test(password)) {
        toast.error(
          "The password must contain at least 4 characters including a number",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
            toastId: "login-error",
          }
        );
      } else {
        push("/home");
      }
    },
    [push]
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        variant="full-width"
        type="text"
        label="Email"
        {...register("email", {
          required: "Email Address is required",
          validate: (value) => isValidEmail(value),
        })}
        aria-invalid={errors.email ? "true" : "false"}
        error={errors.email}
      />
      <Input
        variant="full-width"
        type="password"
        label="Password"
        {...register("password", { required: "This field is required" })}
        error={errors.password}
      />

      <Button variant="primary" className={styles.submit} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginFrom;
