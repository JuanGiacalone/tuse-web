import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Bell, Headphones, ArrowRight } from 'lucide-react';
import { Button } from '@/Components/ui/button';

export default function PricingSection() {
    const features = [
        { icon: Zap, text: 'Botón inteligente incluido' },
        { icon: Shield, text: 'App ilimitada' },
        { icon: Bell, text: 'Alertas sin límite' },
        { icon: Headphones, text: 'Soporte prioritario' },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1F1F1F]/50 to-[#0A0A0A]" />

            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#DC2626]/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#DC2626]/5 rounded-full blur-[200px]" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-[#DC2626]/20 text-[#DC2626] px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                        🔥 OFERTA DE LANZAMIENTO LIMITADA
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Precio TUSE Argentina: ¡Actuá ahora y protegé tu vida por $5/mes!
                    </h2>
                    <p className="text-white/60 text-lg">Sistema de seguridad laboral accesible - La protección no espera</p>
                </motion.div>

                {/* Pricing Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626] via-[#C9A962] to-[#DC2626] rounded-3xl blur-xl opacity-20" />

                    <div className="relative bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                        {/* Corner Badge */}
                        <div className="absolute top-6 right-6 bg-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full">
                            MÁS POPULAR
                        </div>

                        {/* Price */}
                        <div className="text-center mb-10">
                            <p className="text-white/50 text-lg mb-2">Por solo</p>
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-6xl md:text-8xl font-black bg-gradient-to-r from-[#C9A962] to-[#E8C868] bg-clip-text text-transparent">
                                    $5
                                </span>
                                <div className="text-left">
                                    <span className="text-white/60 text-xl">USD</span>
                                    <br />
                                    <span className="text-white/40">/mes</span>
                                </div>
                            </div>
                            <p className="text-white/40 text-sm">Los primeros usuarios se benefician del valor más bajo para siempre</p>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-3 bg-[#0A0A0A]/50 rounded-xl p-4"
                                >
                                    <div className="w-10 h-10 bg-[#C9A962]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <feature.icon className="w-5 h-5 text-[#C9A962]" />
                                    </div>
                                    <span className="text-white/80 text-sm font-medium">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/5491112345678?text=Quiero%20registrarme%20en%20TUSE%20por%20$5/mes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button size="lg" className="w-full bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-bold py-7 text-lg rounded-xl hover:shadow-lg hover:shadow-[#DC2626]/30 transition-all duration-300 group">
                                    Quiero mi TUSE por $5/mes – Registro inmediato
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                            <a
                                href="https://wa.me/5491112345678?text=Quiero%20ver%20cómo%20funciona%20TUSE%20en%2060%20segundos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button size="lg" className="w-full bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] border-2 border-[#C9A962]/40 text-white hover:border-[#C9A962] font-semibold py-7 text-lg rounded-xl transition-all duration-300">
                                    Ver cómo funciona en 60 segundos
                                </Button>
                            </a>
                        </div>

                        {/* Warning */}
                        <p className="text-center text-white/40 text-sm mt-6">
                            ⚡ El precio subirá pronto. Asegurá tu lugar ahora.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}