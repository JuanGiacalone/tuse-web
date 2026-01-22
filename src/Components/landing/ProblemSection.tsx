import React from 'react';
import { motion } from 'framer-motion';
import { Car, Bike, Moon, Users, AlertTriangle, Clock } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        { icon: Users, text: 'Trabajás solo' },
        { icon: Car, text: 'Te movés por toda la ciudad' },
        { icon: Moon, text: 'Muchas veces de noche' },
        { icon: AlertTriangle, text: 'Contactás desconocidos todos los días' },
    ];

    const targets = [
        { icon: Car, title: 'Choferes de plataformas', desc: 'Uber, DiDi, Cabify' },
        { icon: Bike, title: 'Repartidores de delivery', desc: 'PedidosYa, Rappi' },
        { icon: Users, title: 'Trabajadores itinerantes', desc: 'Expuestos a riesgos diarios' },
    ];

    return (
        <section className="relative py-24 md:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1F1F1F]/50 to-[#0A0A0A]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        <span className="text-white">Seguridad para Trabajadores en la Vía Pública: En las calles, </span>
                        <span className="text-[#DC2626]">cada segundo cuenta</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-3xl mx-auto">
                        Miles de choferes de Uber, DiDi y Cabify, y repartidores de PedidosYa y Rappi trabajan solos, de noche y en zonas desconocidas. Un incidente puede pasar en cualquier momento.
                    </p>
                </motion.div>

                {/* Problems Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                >
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-[#1F1F1F] border border-white/5 rounded-2xl p-6 text-center hover:border-[#DC2626]/30 transition-colors duration-300">
                                <problem.icon className="w-8 h-8 text-[#DC2626] mx-auto mb-4" />
                                <p className="text-white/80 font-medium">{problem.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Warning Message */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-block bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-2xl px-8 py-6">
                        <p className="text-xl md:text-2xl font-bold text-white">
                            No esperes a que te toque a vos.
                        </p>
                    </div>
                </motion.div>

                {/* TUSE Created For */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-[#C9A962] uppercase tracking-widest text-sm mb-4">TUSE fue creado pensando en vos</p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Botón de Pánico para Delivery y Conductores: ¿Por qué miles de trabajadores ya confían en TUSE?</h3>
                </motion.div>

                {/* Target Audience */}
                <div className="grid md:grid-cols-3 gap-6">
                    {targets.map((target, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#C9A962]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] border border-white/5 rounded-3xl p-8 hover:border-[#C9A962]/30 transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#C9A962]/20 to-[#C9A962]/5 rounded-2xl flex items-center justify-center mb-6">
                                    <target.icon className="w-8 h-8 text-[#C9A962]" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{target.title}</h4>
                                <p className="text-white/50">{target.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}