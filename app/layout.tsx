import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import styles from "./page.module.scss";
import "src/utils/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login Form",
  description: "Login form NextJs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={font.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
