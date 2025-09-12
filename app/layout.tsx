// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Puneet Yadav | Full Stack MERN Developer Portfolio",
  description:
    "Explore the animated, responsive portfolio of Puneet Ji — a full stack MERN developer skilled in React, Next.js, TypeScript, and modern UI with Tailwind & Shadcn. Showcasing projects, design, and development expertise.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />  
        </ThemeProvider>
      </body>
    </html>
  );
}
