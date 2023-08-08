import "./globals.css";
import { Inter } from "next/font/google";
import "@/styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-todo-app",
  description: "This app is developed in nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-inherit`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
