// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
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

//add favicon
export const favicon = {
  rel: "icon",
  href: "/favicon.png",
  type: "image/x-icon",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const appliedTheme = theme === 'system' ? systemTheme : theme || 'light';
                if (appliedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                } else {
                  document.documentElement.style.colorScheme = 'light';
                }
              } catch (e) {}
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --tw-ring-color: rgb(59 130 246 / 0.5);
              }
              .dark {
                --tw-ring-color: rgb(147 197 253 / 0.5);
              }
              body {
                opacity: 0;
                transition: opacity 0.1s ease-in-out;
              }
              body.loaded {
                opacity: 1;
              }
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.body.classList.add('loaded');
            `,
          }}
        />
      </body>
    </html>
  );
}
