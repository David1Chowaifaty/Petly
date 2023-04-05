import Link from "next/link";
import AccordionSection from "../components/AccordionSection";
import Image from "next/image";
import { sitters } from "./data";
import {
  CalendarIcon,
  ClockIcon,
  PaperAirplaneIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import HomeCard from "../components/HomeCard";
export default function Home() {
  return (
    <main className="space-y-40">
      <section className="flex flex-col items-center space-y-10 py-4 lg:flex-row lg:space-y-0 lg:justify-around lg:items-start lg:mt-[20vh]">
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
            className="rounded-lg bg-sky-500 text-white font-medium py-1.5 px-10
         ring-offset-2 ring-[#10B8FF] hover:bg-opacity-80 active:ring
        "
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full h-[40vh] lg:w-[50vw] flex justify-center items-center">
          <Image
            width={1050}
            height={300}
            src={`/hero.png`}
            alt=""
            className={`scale-[0.8] rounded-sm md:w-auto sm:scale-[0.5] mt-[100px] lg:mt-0 lg:scale-[0.7]`}
          />
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
      <section className="flex flex-col lg:flex-row lg:items-center w-full px-4 space-y-6 md:space-y-0">
        <AccordionSection />
      </section>
      <section className="flex flex-col items-center space-y-5 px-4 lg:flex-row lg:justify-around">
        <h1 className="text-2xl font-extrabold mb-6 self-start md:hidden">
          Our Sitters Are Thoroughly Vetted
        </h1>
        <Image
          src="/pink_dog.webp"
          alt="sitting service"
          width={250}
          height={200}
          className="rounded-md hidden lg:block"
        />
        <div className="space-y-5 self-start">
          <h1 className="hidden text-2xl font-extrabold mb-6 md:block md:text-3xl">
            Our Sitters Are Thoroughly Vetted
          </h1>
          <p>
            We do our due diligence when hiring to make sure every single one of
            our sitter is not only safe.
          </p>
          <div className="space-y-3">
            {sitters.map((item, index) => (
              <div key={item + index} className="flex items-center space-x-4">
                <span className="p-1 rounded-full border">
                  <PlusIcon className="h-4 w-4" />
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-extrabold mb-6 max-w-sm text-center mx-auto lg:text-3xl">
          Consistent Availability Flexible Scheduling
        </h1>
        <div className="flex items-center justify-around  py-6">
          <HomeCard
            title="Last minute request"
            description="Find yourself heading out of town expectedly? There is no need to stress about finding care for your pet"
          >
            <PaperAirplaneIcon className="h-6 w-6 text-sky-500" />
          </HomeCard>
          <HomeCard
            title="Schedule Changes"
            description="Want to extend your vaction an extra day or two? That's no problem with us.Spending another day"
          >
            <ClockIcon className="h-6 w-6 text-orange-500" />
          </HomeCard>
          <HomeCard
            title="Cancellations"
            description="Don't need out services after all? We are flexible in regard to our cancellation policies"
          >
            <CalendarIcon className="h-6 w-6 text-yellow-500" />
          </HomeCard>
        </div>
      </section>
    </main>
  );
}
