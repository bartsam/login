import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "src/utils/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { PropsWithChildren } from "react";
import { UserProvider } from "@/contexts/LoginContext";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login Form",
  description: "Login form NextJs",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <main>
          <UserProvider>{children}</UserProvider>
        </main>
      </body>
    </html>
  );
}
