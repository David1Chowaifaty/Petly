"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form
      className="space-y-5 px-4 py-5"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post("api/register", {
            email: mail,
            password,
          });
        } catch (err) {}
      }}
    >
      <h1 className="text-2xl font-semibold">Sign up</h1>
      <input
        type="email"
        placeholder="Mail"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        className="input"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="input"
        required
      />
      <button
        type="submit"
        className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw]"
      >
        Register
      </button>
      <button
        type="button"
        onClick={async () => {
          signIn("google");
        }}
        className="px-4 h-10 py-1.5 text-center w-full flex items-center rounded-lg border font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw]"
      >
        <Image
          src={"/google-icon.svg"}
          alt="google icon"
          height={20}
          width={20}
        />
        <p className="flex-1">Sign in with google</p>
      </button>
      <p>
        Already have an account?
        <Link href="/signin" className="text-sky-500 hover:underline">
          {" "}
          Sign in.
        </Link>
      </p>
    </form>
  );
};

export default Register;
