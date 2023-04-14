"use client";
import { FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from "./ui/Button";
interface CheckoutFormProps {
  session: Session | null;
}
export default function CheckoutForm({ session }: CheckoutFormProps) {
  const [address, setAddress] = useState<string>("");
  const [apartment, setApartment] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const items = useAppSelector((state) => state.cart.items);

  return (
    <form
      className="grid px-4 py-3 gap-3 mt-6  divide-y lg:grid-cols-2 lg:divide-y-0 lg:divide-x "
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = session?.user;
        const res = await axios.post("/api/checkout", {
          address,
          apartment,
          city,
          state,
          phone,
          items,
          user,
        });
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
          className="input"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <section className="flex flex-col items-center py-3 md:px-4 md:py-0 md:pb-4">
        <h1 className="text-xl font-semibold">Order Summary</h1>
        <Button
          type="submit"
          title="Confirm order"
          disabled={
            address === "" ||
            apartment === "" ||
            city === "" ||
            state === "" ||
            phone === "" ||
            items.length === 0
          }
        />
      </section>
    </form>
  );
}
