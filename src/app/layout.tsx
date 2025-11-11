import type { Metadata } from "next";
import "@/css/globals.css";
import { garamond, inter, libertinus_math, libertinus_serif, merriweather } from "@/app/fonts";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Create Draftkit",
  description: "To take note of app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.variable}
                          ${inter.variable}
                          ${merriweather.variable}
                           ${libertinus_math.variable}
                          ${libertinus_serif.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
