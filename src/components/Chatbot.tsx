"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

function getResponse(input: string): string {
  const msg = input.toLowerCase();

  if (/hello|hi|hey|namaste/i.test(msg))
    return "Hello! 👋 Welcome to Skandha Constructions. I can help you with our services, completed projects, or contact info. What are you looking for?";

  if (/how many engineer|no\.? of engineer|number of engineer|engineers?\b/i.test(msg))
    return "We currently have 12 engineers supported by more than 80 skilled labourers.";

  if (/labour|labor|worker|crew/i.test(msg))
    return "We have more than 80 skilled labourers.";

  if (/which project|worked on|major project|portfolio|projects have you/i.test(msg))
    return "We've worked on Minnal M Mahal, Thangasaras Kalyana Mandapam, Valliyammal Mahal, Funmall, ITC WelcomHotel, and multiple PWD Government Projects.";

  if (/how many project|projects delivered|projects completed|completed.*project/i.test(msg))
    return "Skandha Constructions has successfully completed over 160 projects.";

  if (/marriage hall|kalyana|mandapam|banquet|wedding hall/i.test(msg))
    return "Yes, we specialise in marriage hall and kalyana mandapam construction — including Minnal M Mahal, Thangasaras Kalyana Mandapam and Valliyammal Mahal.";

  if (/civil|construct|build/i.test(msg))
    return "We offer comprehensive Civil Works — RCC buildings, load-bearing structures, retaining walls, culverts, and more. From foundations to roof, Skandha Constructions handles it all. Contact us for a free site visit!";

  if (/structural|rcc|concrete|reinforce/i.test(msg))
    return "Our Structural Design & RCC Works team includes senior engineers handling complete structural analysis, design, and execution for all types of buildings — residential, commercial, and industrial.";

  if (/foundation/i.test(msg))
    return "Foundation Works is our specialty! We do pile foundations, raft foundations, strip footings, and underpinning. Our team ensures your structure stands strong for decades.";

  if (/electrical|plumbing|mep|wiring/i.test(msg))
    return "We provide complete Electrical & Plumbing Works — wiring, panels, water supply lines, drainage, and sanitation systems, all done to code and on schedule.";

  if (/interior|finish|furnish|glazing|elevation/i.test(msg))
    return "Our Finishing & Interior Works include elevation design, structural glazing, flooring, ceiling, wall finishes, carpentry, and complete interior fit-outs tailored to your vision.";

  if (/landscap|garden|outdoor/i.test(msg))
    return "Our Landscaping service covers garden design, lawn installation, irrigation systems, and outdoor lighting — creating beautiful outdoor spaces that complement your property.";

  if (/approv|document|permit|license|tax|assessment/i.test(msg))
    return "We handle all Approval & Documentation Works — building permits, plan approvals, tax assessments, occupancy certificates, and liaison with local authorities. No stress for you!";

  if (/government|pwd|public works/i.test(msg))
    return "Yes, we are an empanelled Public Works Department (PWD) contractor, delivering government infrastructure projects across Tamil Nadu.";

  if (/commercial|mall|office|retail/i.test(msg))
    return "Yes, we provide commercial construction — malls, office complexes and retail spaces, including projects like Funmall.";

  if (/residential|apartment|villa/i.test(msg))
    return "Yes, we provide residential construction — apartments, villas and gated communities across Tamil Nadu.";

  if (/experience|year|about|history|founder|owner/i.test(msg))
    return "Skandha Constructions is led by Karuppusamy Udhayakumar with 14+ years of experience in the construction industry, delivering trusted projects across Tamil Nadu.";

  if (/real.?estate|property|diya|diyadev|developer/i.test(msg))
    return "DiyaDev Developers is our real estate arm! 🏠\n\nWe offer residential properties (2BHK, 3BHK, villas) and commercial spaces. Scroll to the DiyaDev section below or call +91 90873 53637 for current listings.";

  if (/contact|phone|call|whatsapp|number|address|email|location/i.test(msg))
    return "📞 Call/WhatsApp: +91 90873 53637\n📧 Email: hello@skandhaconstructions.com\n📍 Address: 12 Brigade Road, Bengaluru\n\n💬 WhatsApp chat: https://wa.me/919087353637";

  if (/quote|price|cost|rate|estimate|charge|fee/i.test(msg))
    return "We provide custom quotes tailored to your project scope, timeline, and location. Please contact us directly at +91 90873 53637 or fill out the Contact form for a detailed estimate.";

  return "I can help you with:\n• 🏗️ Construction Services\n• 🏢 Completed Projects\n• 🏠 DiyaDev Properties\n• 📞 Contact Information\n\nWhat would you like to know?";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 I'm the Skandha Constructions assistant. Ask me about our services, completed projects, or DiyaDev properties.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(2);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text || typing) return;
    const userMsg: Message = { id: idRef.current++, text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getResponse(text);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: idRef.current++, text: reply, sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle chat"
        className="fixed bottom-6 right-6 z-60 h-14 w-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: "#2d5a16" }}
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-60 w-85 sm:w-95 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-green-200"
          style={{ height: "480px", backgroundColor: "#fff" }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center gap-3 shrink-0"
            style={{ backgroundColor: "#2d5a16" }}
          >
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
              style={{ backgroundColor: "#4a7c2a" }}
            >
              S
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Skandha Constructions</p>
              <p className="text-xs text-white/70">We typically reply instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ backgroundColor: "#f5f9f2" }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    m.sender === "user"
                      ? "text-white rounded-br-sm"
                      : "text-gray-800 bg-white shadow-sm border border-gray-100 rounded-bl-sm"
                  }`}
                  style={m.sender === "user" ? { backgroundColor: "#4a7c2a" } : {}}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                  <span
                    className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 bg-white px-3 py-3 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
              className="flex-1 text-sm px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none bg-gray-50"
              style={{ borderColor: input ? "#4a7c2a" : undefined }}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || typing}
              className="h-10 w-10 rounded-full flex items-center justify-center transition-colors disabled:opacity-40"
              style={{ backgroundColor: "#4a7c2a" }}
            >
              <Send className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
