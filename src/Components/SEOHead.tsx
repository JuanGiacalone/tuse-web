import React, { useEffect } from 'react';

/**
 * SEO Head Component
 * Configures meta tags, structured data, and other SEO elements
 */
export default function SEOHead({
    title = "TUSE - Botón de Emergencia para Choferes y Repartidores | Seguridad Laboral",
    description = "Protección inteligente para choferes de Uber, DiDi, Cabify y repartidores. Botón de pánico con GPS y alerta instantánea. Solo $5 USD/mes.",
    keywords = "botón de emergencia, seguridad choferes, seguridad delivery, uber seguridad, botón pánico GPS, alerta emergencia, protección trabajadores",
    ogImage = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697152bc5c1c0ebf7ca2255d/4dc616b1f_Gemini_Generated_Image_vlgaluvlgaluvlga.png"
}) {

    useEffect(() => {
        // Set document title
        document.title = title;

        // Helper function to set or update meta tags
        const setMetaTag = (selector: string, attribute: string, attributeValue: string, content: string) => {
            let tag = document.querySelector(selector);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute(attribute, attributeValue);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        // Basic Meta Tags
        setMetaTag('meta[name="description"]', 'name', 'description', description);
        setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
        setMetaTag('meta[name="author"]', 'name', 'author', 'TUSE Seguridad');
        setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');
        setMetaTag('meta[name="language"]', 'name', 'language', 'Spanish');
        setMetaTag('meta[name="revisit-after"]', 'name', 'revisit-after', '7 days');

        // Open Graph Tags
        setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
        setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
        setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
        setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
        setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'es_AR');

        // Twitter Card Tags
        setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
        setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
        setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
        setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

        // Structured Data for Organization
        const organizationData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TUSE",
            "description": "Seguridad Inteligente para Trabajadores en la Vía Pública",
            "url": window.location.origin,
            "logo": ogImage,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-911-1234-5678",
                "contactType": "Customer Service",
                "availableLanguage": ["Spanish"]
            }
        };

        // Structured Data for Product
        const productData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "TUSE Botón de Seguridad Inteligente",
            "description": "Botón de emergencia con GPS para choferes y repartidores. Alerta instantánea a contactos de confianza.",
            "brand": {
                "@type": "Brand",
                "name": "TUSE"
            },
            "offers": {
                "@type": "Offer",
                "price": "5.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "url": window.location.origin,
                "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "2",
                "bestRating": "5",
                "worstRating": "1"
            }
        };

        // FAQ Structured Data
        const faqData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "¿Cuánto cuesta TUSE?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "TUSE cuesta solo $5 USD al mes en nuestra oferta de lanzamiento. Incluye el botón inteligente, app ilimitada, alertas sin límite y soporte prioritario 24/7."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿Cómo funciona el botón de emergencia TUSE?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "El botón TUSE se conecta a tu smartphone vía Bluetooth. Cuando lo presionás, envía automáticamente una alerta de emergencia a tus contactos de confianza con tu ubicación GPS exacta en tiempo real, sin necesidad de desbloquear el celular."
                    }
                },
                {
                    "@type": "Question",
                    "name": "¿TUSE funciona para choferes de Uber, DiDi y Cabify?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Sí, TUSE está diseñado específicamente para choferes de plataformas como Uber, DiDi, Cabify y también para repartidores de PedidosYa, Rappi y cualquier trabajador itinerante."
                    }
                }
            ]
        };

        // Combine all structured data
        const combinedStructuredData = {
            "@context": "https://schema.org",
            "@graph": [organizationData, productData, faqData]
        };

        // Add or update structured data script
        let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
        if (!structuredDataScript) {
            structuredDataScript = document.createElement('script');
            structuredDataScript.type = 'application/ld+json';
            document.head.appendChild(structuredDataScript);
        }
        structuredDataScript.textContent = JSON.stringify(combinedStructuredData);

        // Canonical URL
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.href = window.location.origin + window.location.pathname;

    }, [title, description, keywords, ogImage]);

    return null;
}