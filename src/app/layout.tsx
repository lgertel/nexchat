// Utils
import { cn } from "@/lib/utils";

// Styles
import "./globals.css";

// SEO
import type { Metadata } from "next";

// Fonts
import { Inter } from "next/font/google";

// Components
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexChat",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br' className='light'>
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
