import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Trabajaba con miedo de noche. Ahora con TUSE siento que tengo un ángel de la guarda. Vale cada peso.",
            name: "Marcelo",
            role: "Chofer Uber, CABA",
            rating: 5,
        },
        {
            quote: "El botón me salvó en una situación complicada. Por $5 al mes, es la mejor inversión que hice.",
            name: "Sofía",
            role: "Repartidora Rappi, Córdoba",
            rating: 5,
        },
    ];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#0A0A0A]" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A962]/5 rounded-full blur-[150px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#C9A962] uppercase tracking-widest text-sm mb-4 block">Testimonios de usuarios</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        Opiniones Reales: Lo que dicen choferes y repartidores que ya usan TUSE
                    </h2>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {testimonials.map((testimonial, i) => (
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
                                {/* Quote Icon */}
                                <Quote className="w-10 h-10 text-[#C9A962]/20 mb-6" />

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <Star key={j} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-lg text-white/80 mb-6 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#C9A962] to-[#E8C868] rounded-full flex items-center justify-center">
                                        <span className="text-black font-bold text-lg">{testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold">{testimonial.name}</p>
                                        <p className="text-white/50 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Warning Message */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block bg-[#DC2626]/10 border border-[#DC2626]/30 rounded-2xl px-8 py-6">
                        <p className="text-lg md:text-xl text-white">
                            No dejes que el próximo testimonio sea el tuyo diciendo
                            <span className="text-[#DC2626] font-bold"> "ojalá lo hubiera tenido"</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}