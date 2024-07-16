import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginUser } from "../../service/cabine";
import InputComponent from "../../components/inputComponent/InputComponent";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  //sticenje ruta
  const onSubmit = async (body) => {
    loginUser(body).then((res) => console.log(res));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
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
          <InputComponent
            label="Password"
            type="password"
            register={{ ...register("password") }}
          />
          {errors.password && (
            <p className="error-input">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
