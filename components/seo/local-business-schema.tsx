interface LocalBusinessSchemaProps {
  name: string;
  type: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  telephone: string;
  openingHours: string;
  services: string[];
}

export function LocalBusinessSchema({
  name,
  type,
  address,
  geo,
  telephone,
  openingHours,
  services,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description:
      "Hogar geriátrico especializado en cuidado de adultos mayores en Medellín",
    url: "https://jovenesdelayer.com",
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...geo,
    },
    openingHours,
    priceRange: "$$$",
    areaServed: {
      "@type": "State",
      name: "Antioquia",
      containsPlace: {
        "@type": "City",
        name: "Medellín",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Geriátricos",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    medicalSpecialty: "Geriatrics",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "42",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.facebook.com/jovenesdelayer",
      "https://www.instagram.com/jovenesdelayer",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="local-business-schema"
    />
  );
}
