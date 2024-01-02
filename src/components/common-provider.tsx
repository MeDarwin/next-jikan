"use client";
import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";

const CommonProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CommonProvider;
