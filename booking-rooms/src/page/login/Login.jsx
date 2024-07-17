import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginUser } from "../../service/cabine";
import InputComponent from "../../components/inputComponent/InputComponent";
import { useDispatch } from "react-redux";
import { storeUser } from "../../store/cabineSlice";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (body) => {
    loginUser(body).then((res) => {
      if (!res.user) return alert("Wrong email or password");
      dispatch(storeUser(res.user.user_metadata));
      navigate("/rooms");
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <InputComponent
            label="Email"
            type="email"
            register={register}
            editType={"email"}
          />
          {errors.email && (
            <p className="error-input">{errors.email.message}</p>
          )}
        </div>

        <div>
          <InputComponent
            label="Password"
            type="password"
            register={register}
            editType="password"
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
