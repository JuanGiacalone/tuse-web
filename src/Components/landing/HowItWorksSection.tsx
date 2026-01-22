import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smartphone, AlertCircle, Bell, Users } from 'lucide-react';

export default function HowItWorksSection() {
    const steps = [
        {
            number: '01',
            icon: Settings,
            title: 'Configurás una sola vez',
            desc: 'Vinculás el botón a la app y elegís tus contactos de emergencia.',
        },
        {
            number: '02',
            icon: Smartphone,
            title: 'Lo llevás siempre encima',
            desc: 'Discreto, ligero, siempre listo para cuando lo necesites.',
        },
        {
            number: '03',
            icon: AlertCircle,
            title: 'Sentís riesgo → presionás',
            desc: 'No hablás, no escribís, no mirás el celular. Solo un clic.',
        },
        {
            number: '04',
            icon: Bell,
            title: 'Alerta instantánea',
            desc: 'Tus contactos reciben: nombre, hora, ubicación exacta y mensaje de emergencia.',
        },
        {
            number: '05',
            icon: Users,
            title: 'Respuesta inmediata',
            desc: 'Tu red actúa antes de que la situación empeore.',
        },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1F1F1F]/30 to-[#0A0A0A]" />

            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-[#C9A962] uppercase tracking-widest text-sm mb-4 block">Cómo funciona TUSE</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Botón Inteligente de Seguridad: Simple, rápido y efectivo
                    </h2>
                    <p className="text-white/50 text-lg">Sistema de alerta de emergencia tan simple que funciona incluso bajo estrés</p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A962]/50 via-[#C9A962]/20 to-transparent hidden lg:block" />

                    <div className="space-y-8 lg:space-y-0">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className={`relative flex items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                                    <div className={`bg-[#1F1F1F] border border-white/5 rounded-3xl p-8 hover:border-[#C9A962]/30 transition-all duration-300 ${i % 2 === 0 ? 'lg:ml-auto' : ''} max-w-lg`}>
                                        <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                            <div className="w-12 h-12 bg-[#C9A962]/10 rounded-xl flex items-center justify-center">
                                                <step.icon className="w-6 h-6 text-[#C9A962]" />
                                            </div>
                                            <span className="text-4xl font-black text-[#C9A962]/20">{step.number}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-white/50">{step.desc}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="hidden lg:flex w-16 justify-center relative z-10">
                                    <div className="w-4 h-4 bg-[#C9A962] rounded-full shadow-lg shadow-[#C9A962]/50" />
                                </div>

                                {/* Empty Space */}
                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-[#C9A962]/10 border border-[#C9A962]/30 rounded-full px-6 py-3">
                        <span className="w-2 h-2 bg-[#C9A962] rounded-full animate-pulse" />
                        <span className="text-[#C9A962] font-medium">Sin llamadas. Sin mensajes. Solo un clic.</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}