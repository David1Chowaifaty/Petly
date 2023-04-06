"use client";
import { FormEvent, useEffect, useState } from "react";
import CartElement from "./CartElement";
import { useAppSelector } from "../Redux/hooks";
import { sendOrder } from "../utils/CheckoutMethod";

export default function CheckoutForm() {
  const [address, setAddress] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const items = useAppSelector((state) => state.cart.items);
  return (
    <form
      className="grid px-4 py-3 gap-3 mt-6  divide-y lg:grid-cols-2 lg:divide-y-0 lg:divide-x "
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendOrder(e, address, apartment, city, state, phone, items);
      }}
    >
      <div className="space-y-5">
        <h1 className="text-xl font-semibold">Shipping infromation</h1>
        <input
          type="text"
          placeholder="Address"
          className="input "
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apartment,suite, etc."
          className="input"
          required
          value={apartment}
          onChange={(e) => setApartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          className="input"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State/ Province"
          className="input"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="phone"
          placeholder="Phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <section className="flex flex-col items-center py-3 md:px-4 md:py-0 md:pb-4">
        <h1 className="text-xl font-semibold">Order Summary</h1>
        <CartElement />
        <button
          type="submit"
          className="bg-sky-400 px-4 h-10 py-1.5 text-center w-full rounded-lg text-white font-medium ring-sky-200 hover:bg-opacity-80 active:ring md:w-[40vw] mt-3  disabled:bg-sky-300"
          disabled={
            address === "" ||
            apartment === "" ||
            city === "" ||
            state === "" ||
            phone === "" ||
            items.length === 0
          }
        >
          Confirm order
        </button>
      </section>
    </form>
  );
}
