import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, MapPin } from 'lucide-react';
import { Button } from '@/Components/ui/button';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A962]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1F1F] border border-[#C9A962]/30 mb-8"
                >
                    <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
                    <span className="text-sm text-white/80">Seguridad Inteligente para Trabajadores</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
                >
                    <span className="text-white">Botón de Emergencia para Choferes y Repartidores - Protegé tu vida con</span>
                    <br />
                    <span className="bg-gradient-to-r from-[#C9A962] via-[#E8C868] to-[#C9A962] bg-clip-text text-transparent">
                        un solo botón
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8"
                >
                    Alerta inmediata. Respuesta rápida. Tranquilidad real.
                </motion.p>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {[
                        { icon: Zap, text: 'Activación instantánea' },
                        { icon: MapPin, text: 'GPS preciso' },
                        { icon: Shield, text: 'Protección 24/7' },
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1F1F]/80 border border-white/10">
                            <feature.icon className="w-4 h-4 text-[#C9A962]" />
                            <span className="text-sm text-white/80">{feature.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Price Highlight */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="inline-block mb-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626] to-[#C9A962] rounded-2xl blur-xl opacity-30" />
                        <div className="relative bg-[#1F1F1F] border border-[#C9A962]/30 rounded-2xl px-8 py-6">
                            <p className="text-white/60 text-sm mb-1">Por solo</p>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-5xl md:text-6xl font-black text-[#C9A962]">$5</span>
                                <span className="text-white/60">USD/mes</span>
                            </div>
                            <p className="text-xs text-white/40 mt-2">Menos que un café por día</p>
                        </div>
                    </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href={`https://wa.me/+5492236694722?text=Quiero%20registrarme%20en%20TUSE%20por%20$5/mes`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-bold px-8 py-6 text-lg rounded-xl hover:shadow-lg hover:shadow-[#DC2626]/30 transition-all duration-300 w-full sm:w-auto">
                            Quiero mi TUSE por $5/mes
                        </Button>
                    </a>
                    <a
                        href={`https://wa.me/+5492236694722?text=Quiero%20saber%20más%20sobre%20TUSE`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] border-2 border-[#C9A962]/40 text-white hover:bg-[#2A2A2A] hover:border-[#C9A962] font-semibold px-8 py-6 text-lg rounded-xl w-full sm:w-auto transition-all duration-300">
                            Ver cómo funciona
                        </Button>
                    </a>
                </motion.div>

                {/* Trust Badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-8 text-sm text-white/40"
                >
                    🔒 Oferta de lanzamiento por tiempo limitado
                </motion.p>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </section>
    );
}