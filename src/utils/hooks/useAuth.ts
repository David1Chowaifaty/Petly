"use client";
import { auth } from "@/app/firebase";
import { User } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const route = useRouter();
  const path = usePathname();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async (user) => {
      if (!user && path === "/checkout") route.push("/signin");
    });
    return () => unsub();
  }, []);

  return user;
}
