import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "¿Cómo funciona exactamente el botón TUSE?",
            answer: "El botón TUSE se conecta a tu smartphone vía Bluetooth. Cuando lo presionás, envía automáticamente una alerta de emergencia a tus contactos de confianza con tu ubicación GPS exacta en tiempo real, sin necesidad de desbloquear el celular ni abrir la app. Es completamente discreto y funciona con un solo clic."
        },
        {
            question: "¿Necesito tener internet o señal de celular para que funcione?",
            answer: "Sí, necesitás tener conexión a internet (datos móviles o WiFi) y Bluetooth activado para que el botón se comunique con tu celular y envíe las alertas. El botón usa la conexión de tu smartphone para transmitir la ubicación GPS y las notificaciones a tus contactos."
        },
        {
            question: "¿Cuántos contactos de emergencia puedo configurar?",
            answer: "Podés configurar hasta 5 contactos de emergencia que recibirán tus alertas de forma simultánea. Estos contactos recibirán un SMS y una notificación en la app (si la tienen instalada) con tu ubicación exacta y el mensaje de emergencia."
        },
        {
            question: "¿Qué incluye la suscripción de $5 al mes?",
            answer: "La suscripción incluye: el botón físico inteligente (sin costo adicional en el primer mes), la app móvil completa, alertas ilimitadas sin restricciones, actualizaciones automáticas del software, soporte técnico prioritario 24/7, y almacenamiento de historial de alertas."
        },
        {
            question: "¿Es seguro? ¿Quién tiene acceso a mi ubicación?",
            answer: "Tu privacidad es nuestra prioridad. Solo los contactos que vos configurés recibirán tus alertas y ubicación, y únicamente cuando activés el botón de emergencia. No compartimos, vendemos ni almacenamos tu información de ubicación. Toda la información está encriptada de extremo a extremo."
        },
        {
            question: "¿Funciona en toda Argentina o solo en ciertas ciudades?",
            answer: "TUSE funciona en todo el territorio argentino y en cualquier país donde tengas cobertura de datos móviles. No dependemos de infraestructura local, sino de tu conexión de celular, por lo que funciona en ciudades, rutas y zonas rurales con señal."
        },
        {
            question: "¿Qué pasa si presiono el botón por error?",
            answer: "Podés cancelar una alerta falsa directamente desde la app dentro de los primeros 30 segundos. Tus contactos recibirán una notificación de que la alerta fue cancelada. También podés configurar un tiempo de confirmación (3-5 segundos) antes de enviar la alerta para evitar activaciones accidentales."
        },
        {
            question: "¿El botón tiene batería? ¿Cada cuánto hay que cargarlo?",
            answer: "Sí, el botón tiene una batería recargable que dura aproximadamente 6-8 meses con uso normal. Te avisamos en la app cuando la batería está baja. Se recarga con un cable USB-C incluido en menos de 2 horas."
        },
        {
            question: "¿Puedo usar TUSE si trabajo para varias plataformas?",
            answer: "¡Por supuesto! TUSE funciona para cualquier tipo de trabajo, seas chofer de Uber, DiDi, Cabify, repartidor de PedidosYa, Rappi, Glovo, o cualquier otra actividad. El botón es universal y no depende de la plataforma para la que trabajes."
        },
        {
            question: "¿Cómo me llega el botón después de contratar?",
            answer: "Una vez que completás el registro y el pago, enviamos el botón TUSE a tu domicilio en 2-5 días hábiles por correo. El envío está incluido en tu primera suscripción. Recibirás instrucciones simples para vincularlo con la app en menos de 5 minutos."
        },
        {
            question: "¿Puedo cancelar mi suscripción en cualquier momento?",
            answer: "Sí, podés cancelar tu suscripción cuando quieras sin penalidades ni costos adicionales. El servicio seguirá activo hasta el final de tu período de facturación actual. No hay contratos de permanencia ni letras chicas."
        },
        {
            question: "¿Qué celulares son compatibles con TUSE?",
            answer: "TUSE es compatible con iPhone (iOS 13 o superior) y Android (versión 8.0 o superior). Básicamente, si tu celular tiene Bluetooth 4.0 o superior y puede instalar apps, funcionará perfectamente con TUSE."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Decorative Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C9A962]/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#DC2626]/5 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1F1F] border border-[#C9A962]/30 mb-6">
                        <HelpCircle className="w-4 h-4 text-[#C9A962]" />
                        <span className="text-sm text-white/80">Preguntas Frecuentes sobre TUSE</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        FAQ Botón de Emergencia: ¿Tenés dudas?
                        <br />
                        <span className="bg-gradient-to-r from-[#C9A962] to-[#E8C868] bg-clip-text text-transparent">
                            Acá te las resolvemos
                        </span>
                    </h2>
                    <p className="text-white/60 text-lg">
                        Todo lo que necesitás saber sobre el sistema de seguridad inteligente TUSE
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * index }}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left bg-[#1F1F1F] border border-white/5 rounded-2xl p-6 hover:border-[#C9A962]/30 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#C9A962] transition-colors">
                                            {faq.question}
                                        </h3>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <p className="text-white/60 leading-relaxed mt-3 pt-3 border-t border-white/5">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="shrink-0"
                                    >
                                        <ChevronDown
                                            className={`w-6 h-6 transition-colors ${openIndex === index ? 'text-[#C9A962]' : 'text-white/40'
                                                }`}
                                        />
                                    </motion.div>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/60 mb-4">¿No encontraste la respuesta que buscabas?</p>
                    <a
                        href="https://wa.me/5491112345678?text=Hola!%20Tengo%20una%20pregunta%20sobre%20TUSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-full text-[#25D366] font-semibold hover:bg-[#25D366]/20 transition-colors duration-300"
                    >
                        <WhatsAppIcon />
                        Escribinos por WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}