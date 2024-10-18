import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {ClerkProvider,SignInButton,SignUp,SignIn,SignedOut,SignedIn,UserButton} from "@clerk/nextjs"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chat App",
  description: "Created by Rashmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            <SignUp/>
            <SignIn/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
