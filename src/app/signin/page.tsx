"use client";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
interface RegisterProps {}

const SignIn: FunctionComponent<RegisterProps> = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <form
      className="space-y-5 px-4 py-5"
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const res = await signIn("credentials", {
            redirect: false,
            email: mail,
            password,
          });
          if (res !== null) {
            router.back();
          }
        } catch (err) {}
      }}
    >
      <h1 className="text-2xl font-semibold">
        Welcome back 🐶!
        <br /> Sign in
      </h1>
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
      <button
        type="submit"
        className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw]"
      >
        register
      </button>
      <p>
        {"Don't have an account?"}
        <Link href="/register" className="text-sky-500 hover:underline">
          {" "}
          Register here.
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
