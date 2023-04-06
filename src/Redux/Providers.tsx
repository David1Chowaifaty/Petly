"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
export type ProviderProp = {
  children: React.ReactNode;
  session: Session | null;
};

export default function Providers({ children, session }: ProviderProp) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
