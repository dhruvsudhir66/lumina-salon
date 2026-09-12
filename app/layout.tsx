import type { Metadata } from "next";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Lumina Salon & Beauty",
    template: "%s | Lumina Salon & Beauty",
  },
  description:
    "A modern salon and beauty studio for hair, beauty, bridal and self-care.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main id="main-content" tabIndex={-1}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>

        <Footer />
      </body>
    </html>
  );
}