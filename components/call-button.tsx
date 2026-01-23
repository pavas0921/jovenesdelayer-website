"use client";

import { Phone } from "lucide-react";

export function CallButton() {
  return (
    <a
      href="tel:+573165783244"
      onClick={() => {
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "call_click", {
            event_category: "Contact",
            event_label: "Home Page Call Button",
            value: 1,
          });
        }
      }}
      className="..."
      aria-label="Llamar al hogar geriátrico Jóvenes del Ayer en Medellín"
    >
      <Phone className="h-5 w-5" />
      Llamar
    </a>
  );
}
