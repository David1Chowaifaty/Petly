import Link from "next/link";
import AccordionSection from "./components/AccordionSection";
import Image from "next/image";
export default function Home() {
  return (
    <main className="mt-16">
      <section className="h-screen flex flex-col items-center space-y-10 py-4">
        <h1 className="font-extrabold text-3xl text-center">
          Discover the Joy of Pet Ownership with Petly
        </h1>
        <p className="max-w-sm text-gray-700">
          {
            "We offer a wide range of high-quality pet foods that are made from natural ingredients and tailored to your pet's needs"
          }
        </p>
        <Link
          href="/"
          className="rounded-lg bg-[#10B8FF] text-black font-medium py-1.5 px-10
         ring-offset-2 ring-[#10B8FF] hover:bg-[#1990c3] active:ring
        "
        >
          Shop Now
        </Link>
        <Link href="/toys" className="hover:underline underline-offset-2">
          Learn more
        </Link>
        <div className="relative w-full h-[40vh]">
          <Image
            src={require("./assets/hero-0.png")}
            alt=""
            className="h-36 w-28 absolute top-[50%] translate-y-[-50%] left-4"
          />
          <Image
            src={require("./assets/hero-1.png")}
            alt=""
            className="h-36 w-28 absolute right-4 top-[50%] translate-y-[-50%]"
          />
          <Image
            src={require("./assets/hero-2.png")}
            alt=""
            className="h-36 w-28 absolute bottom-4 left-[65%] translate-x-[-65%]"
          />
          <Image
            src={require("./assets/hero-3.png")}
            alt=""
            className="h-36 w-28 absolute top-4 left-[35%] translate-x-[-35%]"
          />
        </div>
      </section>
      <section className="h-screen">
        <AccordionSection />
      </section>
      <section className="h-screen bg-green-300"></section>
    </main>
  );
}
