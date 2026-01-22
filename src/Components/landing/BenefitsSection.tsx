import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Brain, DollarSign, MapPin } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [
        {
            icon: Zap,
            title: 'Respuesta 80% más rápida',
            desc: 'Con ubicación GPS precisa tu red de confianza te encuentra al instante',
            color: '#DC2626',
        },
        {
            icon: Shield,
            title: 'Activación 100% discreta',
            desc: 'Un botón físico que no te expone más. Sin tocar el celular.',
            color: '#C9A962',
        },
        {
            icon: Brain,
            title: 'Tranquilidad total',
            desc: 'Sabés que alguien siempre puede ayudarte en cualquier momento',
            color: '#22C55E',
        },
        {
            icon: MapPin,
            title: 'Zero distracciones',
            desc: 'Se integra perfectamente a tu rutina de trabajo diaria',
            color: '#3B82F6',
        },
        {
            icon: DollarSign,
            title: 'Precio imbatible',
            desc: 'Solo $5 USD/mes por una capa extra de seguridad que puede salvarte la vida',
            color: '#C9A962',
        },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A962]/30 to-transparent" />

            {/* Floating Orbs */}
            <div className="absolute top-1/3 right-0 w-72 h-72 bg-[#C9A962]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#DC2626]/10 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#C9A962] uppercase tracking-widest text-sm mb-4 block">Beneficios de TUSE</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Alerta de Emergencia GPS: Beneficios que vas a sentir<br />
                        <span className="bg-gradient-to-r from-[#C9A962] to-[#E8C868] bg-clip-text text-transparent">desde el primer día</span>
                    </h2>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className={`relative group ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                style={{ backgroundColor: `${benefit.color}20` }}
                            />
                            <div className="relative h-full bg-[#1F1F1F] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 group-hover:-translate-y-1">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${benefit.color}15` }}
                                >
                                    <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-white/50 leading-relaxed">{benefit.desc}</p>

                                {/* Decorative Line */}
                                <div
                                    className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(90deg, transparent, ${benefit.color}50, transparent)` }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Message */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-[#1F1F1F] to-[#2A2A2A] border border-[#C9A962]/20 rounded-2xl px-8 py-6">
                        <p className="text-lg md:text-xl text-white">
                            Por menos de lo que gastás en un almuerzo,
                            <span className="text-[#C9A962] font-bold"> protegés lo que más importa: tu vida.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}