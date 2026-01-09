"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573001234567?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20el%20hogar%20geriátrico%20Jóvenes%20del%20Ayer"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] transition-all hover:scale-110 animate-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
