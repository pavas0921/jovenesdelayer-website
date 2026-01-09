"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    relation: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <Card className="bg-card border-border">
        <CardContent
          className="p-8 text-center"
          role="alert"
          aria-live="polite"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-card-foreground mb-4">
            Mensaje enviado al Hogar Geriátrico Jóvenes del Ayer
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Gracias por contactarnos. Hemos recibido su solicitud de información
            sobre el cuidado de adultos mayores y nos comunicaremos con usted en
            las próximas 24 horas.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                relation: "",
                message: "",
              });
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Enviar otro mensaje
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className="bg-card border-border"
      role="form"
      aria-labelledby="contact-form-title"
      aria-describedby="contact-form-description"
    >
      <CardHeader>
        <CardTitle
          id="contact-form-title"
          className="text-2xl font-bold text-card-foreground"
        >
          Formulario de Contacto – Hogar Geriátrico
        </CardTitle>
        <p id="contact-form-description" className="text-muted-foreground">
          Complete este formulario para recibir información sobre nuestros
          servicios de cuidado para adultos mayores o para agendar una visita.
        </p>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
          aria-label="Formulario de contacto hogar geriátrico"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-card-foreground">
                Nombre completo *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Su nombre completo"
                aria-required="true"
                className="bg-background border-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-card-foreground">
                Teléfono de contacto *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número de teléfono"
                aria-required="true"
                className="bg-background border-input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground">
              Correo electrónico *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="correo@ejemplo.com"
              aria-required="true"
              className="bg-background border-input"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="relation" className="text-card-foreground">
              Relación con el adulto mayor
            </Label>
            <select
              id="relation"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
              aria-label="Relación con el adulto mayor"
            >
              <option disabled value="">
                Seleccione una opción
              </option>
              <option value="hijo">Hijo/a</option>
              <option value="nieto">Nieto/a</option>
              <option value="esposo">Esposo/a</option>
              <option value="hermano">Hermano/a</option>
              <option value="sobrino">Sobrino/a</option>
              <option value="otro">Otro familiar</option>
              <option value="cuidador">Cuidador profesional</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-card-foreground">
              Mensaje *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntenos sobre la situación del adulto mayor y el tipo de cuidado que necesita..."
              aria-required="true"
              className="bg-background border-input min-h-[150px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                Enviar mensaje
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al enviar este formulario, acepta nuestra política de privacidad y
            el uso de sus datos para responder a su solicitud de información.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
