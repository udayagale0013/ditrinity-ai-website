import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";
import axios from "axios";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to diTrinity Technologies. How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userInput = input.trim();

    const userMessage = {
      sender: "user",
      text: userInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    try {
      const res = await axios.post(
        "192.168.1.8:8000",
        {
          message: userInput,
        }
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            res.data.reply ||
            "Sorry, I couldn't understand that.",
        },
      ]);
    } catch (err) {
      console.error("Chat Error:", err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Unable to connect to the chatbot server.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 text-white shadow-2xl flex items-center justify-center z-50"
      >
        {open ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaRobot className="text-xl" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 80,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed bottom-24 right-6 w-[380px] h-[520px] bg-[#111827] rounded-2xl shadow-2xl border border-gray-700 flex flex-col overflow-hidden z-50"
          >

            {/* Header */}

            <div className="bg-blue-600 p-5 flex items-center gap-3">

              <FaRobot className="text-white text-2xl" />

              <div>
                <h2 className="text-white font-bold">
                  diTrinity Assistant
                </h2>

                <p className="text-blue-100 text-sm">
                  Online • How can we help?
                </p>
              </div>

            </div>

            {/* Chat Messages */}

            <div className="flex-1 overflow-y-auto p-5 space-y-4">

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-xl max-w-[85%] whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-green-600 text-white ml-auto"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {typing && (
                <div className="bg-blue-600 text-white p-3 rounded-xl max-w-[70%]">
                  Typing...
                </div>
              )}

              <div ref={messagesEndRef}></div>

            </div>

            {/* Input */}

            <div className="bg-[#1F2937] p-4 flex gap-3">

              <input
                type="text"
                value={input}
                placeholder="Ask about services, careers..."
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                className="flex-1 bg-[#374151] text-white rounded-lg px-4 py-3 outline-none"
              />

              <button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg transition"
              >
                <FaPaperPlane />
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;