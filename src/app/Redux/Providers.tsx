"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
export type ProviderProp = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProviderProp) {
  return <Provider store={store}>{children}</Provider>;
}
