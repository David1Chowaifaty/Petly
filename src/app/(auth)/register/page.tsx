"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Button from "@/components/ui/Button";
interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form
      className="space-y-5 px-4 py-5"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          // const { data } = await axios.post("api/register", {
          //   email: mail,
          //   password,
          // });
          const res = await fetch("api/register", {
            method: "POST",
            body: JSON.stringify({ email: mail, password, name }),
          });
          const data = await res.json();
          if (data !== null) {
            redirect("/");
          }
        } catch (err) {}
      }}
    >
      <h1 className="text-2xl font-semibold">Sign up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
        required
      />
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
      <Button title="Register" type="submit" />
      <div className="flex items-center justify-center gap-2 w-full">
        <div className="w-[45%] h-[1px] bg-gray-100 block"></div>
        <p className="text-gray-300">Or</p>
        <div className="w-[45%] h-[1px] bg-gray-100 block"></div>
      </div>
      <Button
        title="Sign in with google"
        variant={"outline"}
        leadingIcon={
          <Image
            src={"/google-icon.svg"}
            alt="google icon"
            height={20}
            width={20}
          />
        }
        onClick={async () => {
          await signIn("google");
        }}
      />
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
