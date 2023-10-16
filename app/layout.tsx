import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import styles from "./page.module.scss";
import "utils/styles/index.scss";

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
      <body className={font.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
