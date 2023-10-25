import { useState } from "react";
import { API_URL } from "@/config/apiUrl";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const initialLoginData = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const handleEventChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    setError("");
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    if (!email || !password) {
      setError("All fields are necessary");
      return;
    }
    try {
      const res = await fetch(`/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        setError("Login failed");
        return;
      }
    } catch (error) {
      console.log("Error during login", error);
    }
  };
  return { error, loginData, handleEventChangeLogin, handleSubmitLogin };
};
