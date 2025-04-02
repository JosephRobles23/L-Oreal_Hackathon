import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  ArrowLeft,
  Send,
  ChevronLeft,
  Sparkle,
  SparkleIcon,
  SparklesIcon,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import ReactMarkdown from "react-markdown";
import { useColors } from "../context/ColorContext";
import ColorPicker from "./ColorPicker";

interface ChatWidgetProps {
  title?: string;
  subtitle?: string;
  suggestedTopics?: string[];
}
const colors = {
  primary: "from-[#3AA0FF] to-[#4FB5FF]",
  secondary: "bg-[#1E1E1E]",
  background: "bg-black",
  buttonText: "text-[#3AA0FF]",
  buttonHover: "hover:text-[#4FB5FF]",
  borderColor: "border-[#2A2A2A]",
  inputBg: "bg-[#1E1E1E]",
};

const ChatWidget: React.FC<ChatWidgetProps> = ({
  title = "Hi, I'm here to help!",
  subtitle = "Ask me anything about our services and solutions. I'm here to assist you.",
  suggestedTopics = [
    "Tell me more about your services",
    "What makes your team unique?",
    "How can we start working together?",
  ],
}) => {
  const { colors } = useColors();
  console.log("🎨 Colores actuales:", colors);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const socket = useRef<WebSocket | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const wss_url = import.meta.env.VITE_WSS_URL;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateTourismResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    if (message.includes("soles") && message.includes("días")) {
      return "Aquí tienes un itinerario para explorar Huánuco con un presupuesto de 600 soles en 3 días: \n\n" +
        "**Día 1:** Llegada a Huánuco, visita a la Plaza de Armas, la Catedral y el Templo de Kotosh. Cena en un mercado local para economizar. \n\n" +
        "**Día 2:** Excursión a la Laguna de Lauricocha, un lugar tranquilo y poco concurrido. Almuerzo con productos locales y caminata por los alrededores. \n\n" +
        "**Día 3:** Recorrido por el Puente Calicanto y visita a los Baños Termales de Conoc. Retorno a la ciudad y compra de recuerdos locales antes de partir. \n\n" +
        "Este itinerario es económico y te permitirá disfrutar de la cultura y naturaleza de Huánuco sin salirte del presupuesto.";
    }
    else if (message.includes("selva")) {
      return "Te recomiendo Tarapoto, un destino hermoso en la selva peruana. Con un presupuesto de 700 soles en 3 días, podrías visitar:\n\n" +
        "**Día 1:** Llegada a Tarapoto, visita a la Catarata de Ahuashiyacu y paseo por la ciudad.\n\n" +
        "**Día 2:** Tour a Laguna Azul en Sauce, con paseo en bote y almuerzo en la orilla.\n\n" +
        "**Día 3:** Relajación en los baños termales de San José y retorno.\n\n" +
        "Es un destino perfecto para quienes buscan naturaleza y aventura sin gastar demasiado.";
    }
    else if (message.includes("costa")) {
      return "En la costa, un destino poco explorado es el balneario de Zorritos en Tumbes. Con 800 soles en 3 días podrías hacer:\n\n" +
        "**Día 1:** Llegada a Zorritos, descanso en la playa y cena de mariscos frescos.\n\n" +
        "**Día 2:** Visita a los Hervideros (aguas termales naturales) y paseo en kayak.\n\n" +
        "**Día 3:** Excursión a Punta Sal o Los Órganos para ver tortugas marinas antes del retorno.\n\n" +
        "Es un destino tranquilo y perfecto para relajarte en la playa sin multitudes.";
    }
    else if (message.includes("huánuco") || message.includes("huanuco")) {
      return "Si buscas un lugar poco concurrido en Huánuco, te recomiendo la Laguna de Lauricocha. Es un destino hermoso y menos visitado, ideal para una experiencia tranquila en la naturaleza. ¿Cuántos días estarás y cuál es tu presupuesto? Puedo sugerirte un itinerario personalizado.";
    }
    else {
      return "Perú tiene muchos destinos turísticos poco explorados. ¿Quieres recomendaciones para la selva, sierra o costa? ¿Tienes un presupuesto o cantidad de días en mente?";
    }
  };




  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { text: message, isUser: true };
    const botMessage = { text: generateTourismResponse(message), isUser: false };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    setMessage("");
  };

  const handleTopicClick = (topic: string) => {
    if (!topic.trim()) return;

    const userMessage = { text: topic, isUser: true };
    const botMessage = { text: generateTourismResponse(topic), isUser: false };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
  };


  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[80] bg-gradient-to-r ${colors.primary} text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[90]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-full sm:w-4/5 md:w-1/2 h-full bg-black z-[100] shadow-2xl rounded-tl-[4rem] sm:rounded-tl-[6rem] rounded-bl-[4rem] sm:rounded-bl-[6rem]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`mt-10 sm:mt-14 mx-3 flex gap-x-3 px-4 sm:px-6 items-center justify-between bg-black backdrop-blur-sm ${colors.borderColor} z-10 rounded-l-[4rem] sm:rounded-l-[8rem]`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <ChevronLeft size={18} sm:size={20} />
                  </button>
                  <ColorPicker />
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    Conversa con nosotros
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={18} sm:size={20} />
                </button>
              </div>

              <div className="h-full pt-12 sm:pt-16 pb-16 sm:pb-20 flex flex-col">
                <div className="flex-1 overflow-y-auto flex flex-col space-y-2 px-3 sm:px-6">
                  {messages.length > 0 ? (
                    messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`p-2 sm:p-3 max-w-xs sm:max-w-md rounded-lg ${msg.isUser
                          ? `bg-gradient-to-r ${colors.primary} text-black self-end`
                          : `bg-black text-white self-start`
                          }`}
                      >
                        <span className="text-xs sm:text-sm font-semibold">
                          {msg.isUser ? "Tú" : "Nuna"}
                        </span>
                        <div>
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                        <div ref={messagesEndRef} />
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center px-6">
                      <h2 className={`text-4xl sm:text-6xl font-light bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent tracking-wide`}>
                        {title}
                      </h2>
                      <p className="mt-4 sm:mt-6 text-white max-w-sm text-sm sm:text-base">
                        {subtitle}
                      </p>
                      <div className="space-y-2 sm:space-y-3 mt-6 sm:mt-8 w-full max-w-sm">
                        {suggestedTopics.map((topic, index) => (
                          <button
                            key={index}
                            className="w-full text-xs sm:text-sm text-white bg-[#FFFFFF1A] rounded-full py-2 sm:py-3"
                            onClick={() => handleTopicClick(topic)}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6 bg-black backdrop-blur-sm rounded-tl-[4rem] sm:rounded-tl-[6rem] rounded-bl-[4rem] sm:rounded-bl-[6rem]">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Escribe aquí..."
                      className="w-full text-white text-sm sm:text-lg bg-gray-800/50 rounded-full px-4 sm:px-6 py-3 sm:py-4 placeholder-gray-400"
                    />
                    <button
                      type="submit"
                      className={`absolute right-1 top-1/2 -translate-y-1/2 ${colors.primary} bg-gradient-to-r text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg transition-all`}
                    >
                      <SparklesIcon size={20} sm:size={25} />
                    </button>
                  </form>
                  <p className="text-xs sm:text-md text-gray-500 mt-4 sm:mt-6 text-center">
                    Interactua con nuestro {" "}
                    <a href="https://wa.me/14155238886?text=join%20numeral-excited" className="text-white underline" target="_blank" rel="noopener noreferrer">
                      agente de IA
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </>
  );
};

export default ChatWidget;
