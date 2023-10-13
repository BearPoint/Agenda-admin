"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import Input from "@/components/input";
import "@/styles/login.css";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabase = createClientComponentClient();
  const router = useRouter();

  const onClickHandler = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-image text-stone-700">
      <div className="bg-white relative p-6 pt-8 rounded-sm">
        <div className="w-full h-20 flex justify-center items-center ">
          Logo
        </div>
        <div className="w-full text-center mb-4 text-5xl text-stone-700">
          Login
        </div>
        <div className="">
          <Input
            name="Email"
            type="text"
            onChange={(value: string) => setEmail(value)}
            icon="user"
          />
        </div>
        <div>
          <Input
            name="Password"
            type="password"
            onChange={(value: string) => setPassword(value)}
            icon="lock"
          />
        </div>
        <button
          className="bg-[#41c2bd] w-full py-[6px] px-3 rounded-sm "
          onClick={onClickHandler}
        >
          login
        </button>
        <div className="py-2 w-full text-center font-light text-xs">
          <Link href="/forgot-password">Forgot Password</Link>
        </div>
        <p className="py-2 text-xs">
          <span className='font-bold'>Dont have an account?</span>
          <Link href={"/register"}> Sing up</Link>
        </p>
      </div>
    </div>
  );
}
