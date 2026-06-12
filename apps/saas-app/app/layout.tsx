import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "StudiOS - Unshackle your studio",
  description: "StudiOS",
};

import { Providers } from "@/components/providers/Providers";
import { Navbar } from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} bg-black text-white antialiased`}>
        <Providers>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
