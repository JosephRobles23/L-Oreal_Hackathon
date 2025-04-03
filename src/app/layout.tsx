import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import ChatWidget from "../components/ChatWidget";
import { FaWhatsapp } from "react-icons/fa"; // Asegúrate de instalar react-icons

export const metadata: Metadata = {
  title: "Productos de cuidado del cabello y cuidado de la piel | Garnier",
  description:
    "Garnier ha formulado productos para el cuidado de la piel, coloración, tintes y cuidado del cabello, desodorantes y antitranspirantes para mujer y hombre.",
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

        {/* Botón de WhatsApp flotante */}
        <a
          href="https://wa.me/51959713558?text=Hi
" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </body>
    </html>
  );
}