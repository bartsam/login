"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Form from "@/components/molecules/Form";
import { isValidEmail } from "@/utils/helper/form/isValidEmail";

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
      console.log(data);
      try {
        // if()
        push("/home");
      } catch (e) {
        console.log("error", e);
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginFrom;
