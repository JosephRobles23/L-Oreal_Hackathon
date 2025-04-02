import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Productos de cuidado del cabello y cuidado de la piel | Garnier",
  description: "Garnier ha formulado productos para el cuidado de la piel, coloración, tintes y cuidado del cabello, desodorantes y antitranspirantes para mujer y hombre.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
