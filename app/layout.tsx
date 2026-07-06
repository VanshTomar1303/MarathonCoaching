import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay, satoshi, inter } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://marathonacademy.co.in"),
  title: {
    default: `${site.name} — IIT-JEE, NEET & WBJEE Coaching Institute`,
    template: `%s | ${site.name}`,
  },
  description: site.mission,
  openGraph: {
    title: `${site.name} — Run Beyond Limits. Achieve Excellence.`,
    description: site.mission,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${clashDisplay.variable} ${satoshi.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
