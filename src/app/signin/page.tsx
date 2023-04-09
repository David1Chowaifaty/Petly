"use client";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface RegisterProps {}

const SignIn: FunctionComponent<RegisterProps> = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const session = useSession();
  useEffect(() => {
    // if (session.data !== null) {
    //   router.back();
    // }
  }, [session, router]);
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
      <button
        type="button"
        onClick={async () => {
          await signIn("google");
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
