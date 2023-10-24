"use client";
import Link from "next/link";
import { useRegister } from "@/components/hooks/useRegister";

export const Register = () => {
  const {
    error,
    registerData,
    handleEventChangeRegister,
    handleSubmitRegister,
  } = useRegister();
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmitRegister} className="flex flex-col gap-3">
          <input
            onChange={handleEventChangeRegister}
            name="name"
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={handleEventChangeRegister}
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            onChange={handleEventChangeRegister}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
