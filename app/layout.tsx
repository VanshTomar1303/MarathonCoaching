import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay, satoshi, inter } from "@/lib/fonts";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/animations/ThemeProvider";
import { site } from "@/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://marathonacademy.co.in"),
  title: {
    default: `${site.name} — IIT-JEE Coaching Institute in Orissa`,
    template: `%s | ${site.name}`,
  },
  description: site.mission,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
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
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <ScrollProgress />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
