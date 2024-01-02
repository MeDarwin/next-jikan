import CommonProvider from "@/components/common-provider";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Js with Jikan API",
  description: "Next Js application with Jikan API",
};

//TODO: Add interactive mouse animation
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CommonProvider>
      <html lang="en" data-theme="neonime" className="bg-slate-950">
        <body className={`${inter.className} overflow-x-hidden`}>
          <Sidebar />
          <Header />
          <main className="container mx-auto flex flex-col">
            <div className="p-8 grow pt-32">{children}</div>
          </main>
        </body>
      </html>
    </CommonProvider>
  );
}
