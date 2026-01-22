import React, { useEffect, useState } from 'react';
import "@radix-ui/themes/styles.css";
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, MapPin, Clock, Zap, Phone, Bell, Users, CheckCircle, Star, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import HeroSection from '@/Components/landing/HeroSection';
import ProblemSection from '@/Components/landing/ProblemSection';
import BenefitsSection from '@/Components/landing/BenefitsSection';
import HowItWorksSection from '@/Components/landing/HowItWorksSection';
import TestimonialsSection from '@/Components/landing/TestimonialsSection';
import FAQSection from '@/Components/landing/FAQSection';
import PricingSection from '@/Components/landing/PricingSection';
import FooterSection from '@/Components/landing/FooterSection';
import WhatsAppButton from '@/Components/landing/WhatsAppButton';
import SEOHead from '@/Components/SEOHead';


export default function Home() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
            {/* SEO Head Component */}
            <SEOHead
                title="TUSE - Botón de Emergencia para Choferes y Repartidores | Seguridad Laboral $5/mes"
                description="Protección inteligente para choferes de Uber, DiDi, Cabify y repartidores de PedidosYa, Rappi. Botón de pánico con GPS y alerta instantánea. Solo $5 USD/mes. Trabaja seguro 24/7."
                keywords="botón de emergencia, seguridad para choferes, seguridad delivery, uber seguridad, didi protección, cabify chofer, pedidosya repartidor, rappi seguridad, botón de pánico, alerta GPS, seguridad laboral, trabajadores itinerantes, protección personal Argentina, dispositivo seguridad personal, alerta emergencia GPS"
            />

            {/* Floating WhatsApp Button */}
            <WhatsAppButton />

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <img
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697152bc5c1c0ebf7ca2255d/4dc616b1f_Gemini_Generated_Image_vlgaluvlgaluvlga.png"
                        alt="TUSE"
                        className="h-10 md:h-12"
                    />
                    <a
                        href="https://wa.me/5491112345678?text=Hola!%20Quiero%20más%20información%20sobre%20TUSE"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="bg-gradient-to-r from-[#C9A962] to-[#E8C868] text-black font-bold hover:shadow-lg hover:shadow-[#C9A962]/20 transition-all duration-300">
                            Contratar Ahora
                        </Button>
                    </a>
                </div>
            </motion.nav>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ChevronDown className="w-5 h-5 text-[#C9A962]" />
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <HeroSection />
            <ProblemSection />
            <BenefitsSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <FAQSection />
            <PricingSection />
            <FooterSection />
        </div>
    );
}