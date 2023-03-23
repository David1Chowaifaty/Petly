import Link from "next/link";
import AccordionSection from "./components/AccordionSection";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col items-center space-y-10 py-4 lg:flex-row lg:justify-around lg:items-start lg:mt-[20vh]">
        <div className="flex flex-col items-center space-y-10 lg:items-start">
          <h1 className="font-extrabold max-w-sm text-3xl text-center md:text-4xl lg:text-start">
            Discover the Joy of Pet Ownership with Petly
          </h1>
          <p className="max-w-sm text-center text-gray-700 lg:text-start">
            {
              "We offer a wide range of high-quality pet foods that are made from natural ingredients and tailored to your pet's needs"
            }
          </p>
          <div className="space-y-10 flex flex-col  items-center w-full lg:flex-row lg:space-y-0 lg:justify-between">
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
          </div>
        </div>
        <div className="relative w-full h-[40vh] md:w-[50vw]">
          <Image
            width={112}
            height={114}
            src={"/hero-0.png"}
            alt=""
            className="h-36 w-28 absolute top-[50%] translate-y-[-50%] left-4"
          />
          <Image
            width={112}
            height={114}
            src={"/hero-1.png"}
            alt=""
            className="h-36 w-28 absolute right-4 top-[50%] translate-y-[-50%]"
          />
          <Image
            width={112}
            height={114}
            src={"/hero-2.png"}
            alt=""
            className="h-36 w-28 absolute bottom-4 left-[65%] translate-x-[-65%]"
          />
          <Image
            width={112}
            height={114}
            src={"/hero-3.png"}
            alt=""
            className="h-36 w-28 absolute top-4 left-[35%] translate-x-[-35%] lg:h-52 lg:w-48"
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
