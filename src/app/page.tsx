import Link from "next/link";
import AccordionSection from "./components/AccordionSection";
import Image from "next/image";
export default function Home() {
  return (
    <main className="space-y-7">
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

          <Link
            href="/"
            className="rounded-lg bg-[#10B8FF] text-white font-medium py-1.5 px-10
         ring-offset-2 ring-[#10B8FF] hover:bg-[#1990c3] active:ring
        "
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full h-[40vh] grid grid-cols-4 justify-items-center lg:w-[50vw]">
          {Array.from(Array(4), (_, i) => i).map((i) => (
            <Image
              key={"heroImage" + i}
              width={112}
              height={114}
              src={`/hero-${i}.png`}
              alt=""
              className={`h-36 w-28 ${i % 2 != 0 && "self-center"}`}
            />
          ))}
        </div>
      </section>
      <section className="h-screen bg-yellow-300 flex flex-col p-6 justify-around items-center lg:rounded-lg lg:h-56 lg:mx-7 lg:flex-row lg:space-y-0">
        <h1
          className="font-extrabold text-xl max-w-xs text-center lg:order-3 pb-10 
        border-b w-full flex items-center justify-center border-gray-600 lg:w-auto lg:h-full lg:border-b-0 lg:border-l lg:pb-0 lg:pl-16"
        >
          A Pet or companion animal is an animal kept primarily
        </h1>
        <div className="max-w-sm flex flex-col items-center space-y-5 lg:order-1 lg:self-start">
          <h2 className="flex font-bold text-lg items-center">
            <div className="rounded-full bg-gray-50 p-1.5 mr-4">
              <Image
                src={"/paws.svg"}
                alt="paws"
                width={18}
                height={18}
                className="h-6 w-6"
              />
            </div>
            Pet Care
          </h2>
          <p className="text-center text-gray-800 max-w-xs lg:text-sm">
            Petly provides essential tips for pet care, including a healthy
            diet, exercise, grooming, regular vet check-ups, and lots of love
            and attention. Keep your furry friend happy and healthy with our
            expert pet care advice.
          </p>
        </div>
        <div className="max-w-sm flex flex-col items-center space-y-5 lg:order-2 lg:text-sm lg:self-start">
          <h2 className="flex font-bold text-lg items-center">
            <div className="rounded-full bg-gray-50 p-1.5 mr-4">
              <Image
                src={"/dog_dish.svg"}
                alt="paws"
                width={18}
                height={18}
                className="h-6 w-6"
              />
            </div>
            Pet Food
          </h2>
          <p className="text-center text-gray-800 max-w-xs">
            Petly provides nutritious and tailored pet food options, including
            premium brands, portion control, and feeding guidance for a healthy
            and happy pet.
          </p>
        </div>
      </section>
      <section className="h-screen flex lg:items-center w-full">
        <AccordionSection />
      </section>
      <section className="h-screen"></section>
    </main>
  );
}
