"use client";
import Link from "next/link";
import { useLogin } from "@/components/hooks/useLogin";

export const Login = () => {
  const { error, loginData, handleEventChangeLogin, handleSubmitLogin } =
    useLogin();
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form onSubmit={handleSubmitLogin} className="flex flex-col gap-3">
          <input
            onChange={handleEventChangeLogin}
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            onChange={handleEventChangeLogin}
            type="password"
            placeholder="Password"
            name="password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          {/*
          <Link className="text-sm mt-3 text-right" href={"/auth/register"}>
            Don&apos;t have an account?{" "}
            <span className="underline">Register</span>
          </Link>*/}
        </form>
      </div>
    </div>
  );
};
