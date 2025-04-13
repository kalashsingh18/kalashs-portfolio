import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalash Singh - Backend Developer",
  description: "Portfolio of Kalash Singh, a backend developer specializing in Django, FastAPI, Node.js, and React",
  keywords: ["Kalash Singh", "Backend Developer", "Django", "FastAPI", "Node.js", "React", "Portfolio"],
  authors: [{ name: "Kalash Singh" }],
  creator: "Kalash Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
