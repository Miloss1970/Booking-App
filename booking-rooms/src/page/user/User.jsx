import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createUser } from "../../service/cabine";

const schema = z
  .object({
    full_name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    createUser(data).then((res) => console.log(res));
  };
  // form row input componenta
  return (
    <div className="w-full">
      <h1 className="text-center text-3xl mt-6 font-bold text-gray-700">
        Create user
      </h1>
      <div className="flex justify-center">
        <form className="w-[500px]" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <InputComponent
              label="Full Name"
              register={{ ...register("full_name") }}
            />
            {errors.fullName && (
              <p className="error-input">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="label">Email</label>
            <InputComponent
              label="Email"
              type="email"
              register={{ ...register("email") }}
            />
            {errors.email && (
              <p className="error-input">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="label">Password</label>
            <InputComponent
              label="Email"
              type="email"
              register={{ ...register("email") }}
            />
            {errors.password && (
              <p className="error-input">{errors.password.message}</p>
            )}
          </div>

          <div>
            <InputComponent
              label="Confirm Password"
              type="password"
              register={{ ...register("confirmPassword") }}
            />

            {errors.confirmPassword && (
              <p className="error-input">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button className="btn-submit" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
