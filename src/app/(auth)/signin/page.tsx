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
    if (session.data !== null) {
      router.back();
    }
  }, [session, router]);
  return (
    <section className="flex gap-7 w-full">
      <form
        className="space-y-5 px-4 py-5 w-full lg:w-[40%]"
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
          className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring"
        >
          Register
        </button>
        <div className="flex items-center justify-center gap-2 w-full">
          <div className="w-[45%] h-[1px] bg-gray-100 block"></div>
          <p className="text-gray-300">Or</p>
          <div className="w-[45%] h-[1px] bg-gray-100 block"></div>
        </div>
        <button
          type="button"
          onClick={async () => {
            await signIn("google");
          }}
          className="bg-transparent h-10 w-full rounded-md py-2 px-4 flex items-center justify-center gap-5 border border-slate-200 hover:bg-slate-100"
        >
          <Image
            src={"/google-icon.svg"}
            alt="google icon"
            height={20}
            width={20}
          />
          <p>Sign in with google</p>
        </button>
        <p>
          {"Don't have an account?"}
          <Link href="/register" className="text-slate-800 hover:underline">
            {" "}
            Register here.
          </Link>
        </p>
      </form>
      <Image
        src={"/auth_pic.jpg"}
        alt="authpic"
        width={400}
        height={400}
        className="hidden lg:block"
      />
    </section>
  );
};

export default SignIn;
