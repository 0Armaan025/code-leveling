import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor/CustomCursor";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Code-leveling",
    description: "Taking coding motivation to the extreme levels!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <UserProvider>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <Navbar />
                    {/* <CustomCursor/> */}
                    {children}
                    <Footer />

                </body>
            </UserProvider>
        </html>
    );
}
