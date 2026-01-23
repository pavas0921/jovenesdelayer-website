import Script from "next/script";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuál es el proceso de admisión?",
    answer:
      "El proceso comienza con una visita a nuestras instalaciones donde realizamos una evaluación inicial del estado de salud del adulto mayor. Luego, nuestro equipo médico determina el plan de cuidado más adecuado. Finalmente, coordinamos la fecha de ingreso y preparamos todo para recibir al nuevo residente.",
  },
  {
    question: "¿Puedo visitar a mi familiar en cualquier momento?",
    answer:
      "Sí, las visitas están permitidas dentro de nuestros horarios establecidos (Lunes a Viernes de 9am a 6pm, Sábados y Domingos de 10am a 5pm). Para el Plan Premium, las visitas no tienen restricción de horario. En casos especiales, podemos hacer excepciones previa coordinación.",
  },
  {
    question: "¿Qué incluye la mensualidad?",
    answer:
      "La mensualidad incluye alojamiento, alimentación (5 comidas diarias), atención de enfermería 24/7, administración de medicamentos, actividades recreativas, servicio de lavandería y asistencia en actividades de la vida diaria. Los servicios adicionales como fisioterapia y consultas médicas especializadas pueden tener costos adicionales según el plan.",
  },
  {
    question: "¿Aceptan pacientes con Alzheimer o demencia?",
    answer:
      "Sí, contamos con personal capacitado y protocolos especiales para el cuidado de personas con deterioro cognitivo. Nuestras instalaciones están adaptadas para garantizar su seguridad y bienestar, y ofrecemos programas de estimulación cognitiva específicos.",
  },
  {
    question: "¿Cómo me mantienen informado sobre el estado de mi familiar?",
    answer:
      "Mantenemos comunicación constante con las familias a través de llamadas telefónicas, mensajes de WhatsApp y reuniones periódicas. Enviamos actualizaciones sobre su estado de salud, fotos de las actividades y cualquier novedad relevante. Para el Plan Integral y Premium, la comunicación es diaria.",
  },
  {
    question: "¿Qué pasa en caso de una emergencia médica?",
    answer:
      "Contamos con protocolos de emergencia establecidos y convenios con centros hospitalarios cercanos. Nuestro personal de enfermería está capacitado para manejar emergencias y contamos con los equipos necesarios para primeros auxilios. En caso de requerir atención hospitalaria, coordinamos inmediatamente el traslado y notificamos a la familia.",
  },
  {
    question: "¿Ofrecen estancias temporales o respiro familiar?",
    answer:
      "Sí, ofrecemos el servicio de estancias temporales para cuando las familias necesitan un descanso o tienen compromisos que les impiden cuidar a su ser querido por un tiempo determinado. Estas estancias pueden ser desde una semana hasta el tiempo que sea necesario.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Aceptamos pagos en efectivo, transferencia bancaria y tarjetas de crédito/débito. La mensualidad se paga por adelantado los primeros 5 días de cada mes. Ofrecemos descuentos por pago semestral o anual anticipado.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FAQ() {
  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Preguntas Frecuentes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resolvemos sus Dudas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Encuentre respuestas a las preguntas más comunes de las familias
              que nos contactan.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-muted rounded-2xl">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              ¿Tiene más preguntas?
            </h3>
            <p className="text-muted-foreground mb-4">
              No dude en contactarnos. Estamos aquí para resolver todas sus
              inquietudes.
            </p>
            <a
              href="https://wa.me/3165783244?text=Hola,%20tengo%20una%20pregunta%20sobre%20el%20hogar%20geriátrico"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Escribir por WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
