"use client";

import { Phone } from "lucide-react";

interface CallButtonProps {
  phoneNumber: string;
  label?: string;
}

export function CallButton({ phoneNumber, label = "Llamar" }: CallButtonProps) {
  const formattedPhone = phoneNumber.replace(/\D/g, "");

  return (
    <a
      href={`tel:${formattedPhone}`}
      aria-label={`Llamar a ${phoneNumber}`}
      className="fixed left-6 bottom-24 z-50 flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 animate-pulse-slow"
      onClick={() => {
        // Track call event
        if (typeof window !== "undefined" && window.gtag) {
          gtag("event", "call_click", {
            event_category: "Contact",
            event_label: "Home Page Call Button",
            value: 1,
          });
        }
      }}
    >
      <Phone size={24} />
      <span className="sr-only">
        {label}: {phoneNumber}
      </span>
    </a>
  );
}
