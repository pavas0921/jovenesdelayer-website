"use client";

import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({
  phoneNumber = "573165783244",
  message = "Hola, me gustaría recibir información sobre el hogar geriátrico Jóvenes del Ayer en Medellín y sus servicios para adultos mayores.",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp con el hogar geriátrico Jóvenes del Ayer en Medellín"
      title="WhatsApp Hogar Geriátrico Jóvenes del Ayer – Medellín"
      data-service="whatsapp"
      data-business="hogar-geriatrico-medellin"
      data-conversion="lead-whatsapp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] transition-all hover:scale-110 animate-pulse"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
