"use client";
import { FormEvent, useEffect, useState } from "react";
import CartElement from "./CartElement";

export default function CheckoutForm() {
  const [address, setAddress] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="grid px-4 gap-3 mt-6 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x py-3">
      <form
        className="space-y-5"
        onSubmit={(e: FormEvent<HTMLFormElement>) => {}}
      >
        <h1 className="text-xl font-semibold">Shipping infromation</h1>
        <input
          type="text"
          placeholder="Address"
          className="input p-2.5 border focus:ring hover:ring"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apartment,suite, etc."
          className="input p-2.5 border focus:ring hover:ring"
          required
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="input p-2.5 border focus:ring hover:ring"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State/ Province"
          className="input p-2.5 border focus: hover:ring"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Phone"
          className="input p-2.5 border focus:ring hover:ring"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
      <section className="flex flex-col items-center py-3 md:px-4 md:py-0 md:pb-4">
        <h1 className="text-xl font-semibold">Order Summary</h1>
        <CartElement />
        <button
          type="button"
          className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw] mt-3"
        >
          Confirm order
        </button>
      </section>
    </div>
  );
}
