"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/enfermera-actividad-fisica-hogar-geriaitrico.webp",
    alt: "Enfermera actividad física hogar geriatrico",
    category: "Instalaciones",
  },
  {
    src: "/enfermera-cuidados-alimentacion.webp",
    alt: "Enfermera cuidados alimentacion hogar geriatrico",
    category: "Instalaciones",
  },
  {
    src: "/professional-caregiver-helping-elderly-person-with.webp",
    alt: "Enfermera cuidados hogar geriatrico",
    category: "Instalaciones",
  },
  {
    src: "/actividad-fisica-hogar-geriatrico.webp",
    alt: "Actividad física hogar geriatrico",
    category: "Instalaciones",
  },
  {
    src: "/alegria-hogar-geriatrico.webp",
    alt: "Alegria hogar geriatrico",
    category: "Actividades",
  },
  {
    src: "/cuidados-hogar-geriatrico.webp",
    alt: "Cuidados hogar geriatrico",
    category: "Actividades",
  },
  {
    src: "/espiritualidad-hogar-geriatrico.webp",
    alt: "Espiritualidad hogar geriatrico",
    category: "Celebraciones",
  },
  {
    src: "/terapeuta-hogar-geriatrico.webp",
    alt: "Terapeuta hogar geriatrico",
    category: "Celebraciones",
  },
  // {
  //   src: "/placeholder.svg?key=wdm6a",
  //   alt: "Musicoterapia",
  //   category: "Actividades",
  // },
  // {
  //   src: "/placeholder.svg?key=mphgq",
  //   alt: "Sala de enfermería",
  //   category: "Instalaciones",
  // },
  // {
  //   src: "/placeholder.svg?key=hzg2v",
  //   alt: "Área de recreación",
  //   category: "Instalaciones",
  // },
  // {
  //   src: "/placeholder.svg?key=qicpt",
  //   alt: "Visita de familiares",
  //   category: "Vida diaria",
  // },
];

const categories = [
  "Todas",
  "Instalaciones",
  "Actividades",
  "Celebraciones",
  "Vida diaria",
];

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Cerrar lightbox con Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && lightboxImage) {
        setLightboxImage(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  // Evitar cerrar el lightbox si clickeas la imagen (solo cerrar al click fuera)
  function onLightboxClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setLightboxImage(null);
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              aria-pressed={selectedCategory === category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setLightboxImage(image.src)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxImage(image.src);
                }
              }}
              aria-label={`Abrir imagen: ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority={index === 0} // Prioridad solo la primera imagen para mejor performance
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <div className="p-4 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm text-background/80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={onLightboxClick}
            role="dialog"
            aria-modal="true"
            aria-label="Imagen ampliada"
            tabIndex={-1}
          >
            <button
              className="absolute top-4 right-4 text-background hover:text-accent transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Cerrar imagen ampliada"
              type="button"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
              <Image
                src={lightboxImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
