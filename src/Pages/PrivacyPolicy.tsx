import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../lib/utils';
import SEOHead from '../Components/SEOHead';

export default function PrivacyPolicy() {
    const sections = [
        {
            icon: FileText,
            title: '1. Información que Recopilamos',
            content: [
                {
                    subtitle: '1.1 Información Personal',
                    text: 'Recopilamos información personal que nos proporcionas voluntariamente al registrarte en TUSE, incluyendo: nombre completo, dirección de correo electrónico, número de teléfono, y datos de tus contactos de emergencia.'
                },
                {
                    subtitle: '1.2 Información de Ubicación',
                    text: 'TUSE recopila y procesa datos de ubicación GPS en tiempo real ÚNICAMENTE cuando activás el botón de emergencia. No rastreamos ni almacenamos tu ubicación de forma continua. La información de ubicación se comparte exclusivamente con los contactos de emergencia que hayas configurado.'
                },
                {
                    subtitle: '1.3 Información del Dispositivo',
                    text: 'Recopilamos información sobre tu dispositivo móvil, incluyendo: modelo del dispositivo, sistema operativo, identificador único del dispositivo, dirección IP, y datos de conexión Bluetooth con el botón TUSE.'
                },
                {
                    subtitle: '1.4 Información de Uso',
                    text: 'Recopilamos datos sobre cómo utilizas la aplicación TUSE, incluyendo: historial de alertas enviadas, fecha y hora de activaciones, cancelaciones de alertas, y configuraciones de la aplicación.'
                }
            ]
        },
        {
            icon: Lock,
            title: '2. Cómo Utilizamos tu Información',
            content: [
                {
                    subtitle: '2.1 Prestación del Servicio',
                    text: 'Utilizamos tu información para: enviar alertas de emergencia a tus contactos de confianza, proporcionar tu ubicación GPS exacta en situaciones de emergencia, gestionar tu cuenta y suscripción, y mejorar la funcionalidad del botón y la aplicación.'
                },
                {
                    subtitle: '2.2 Comunicaciones',
                    text: 'Podemos enviarte comunicaciones relacionadas con el servicio, incluyendo: notificaciones de batería baja del dispositivo, actualizaciones de software, confirmaciones de pago, y alertas de seguridad importantes. Nunca enviamos spam ni vendemos tu información a terceros para marketing.'
                },
                {
                    subtitle: '2.3 Seguridad y Prevención de Fraude',
                    text: 'Utilizamos tu información para detectar, prevenir y responder a fraudes, abusos, y actividades ilegales en nuestra plataforma.'
                }
            ]
        },
        {
            icon: Eye,
            title: '3. Compartir tu Información',
            content: [
                {
                    subtitle: '3.1 Contactos de Emergencia',
                    text: 'Tu ubicación GPS y mensaje de emergencia se comparten ÚNICAMENTE con los contactos que hayas designado como contactos de emergencia, y SOLO cuando actives el botón de emergencia.'
                },
                {
                    subtitle: '3.2 Proveedores de Servicios',
                    text: 'Compartimos información con proveedores de servicios de confianza que nos ayudan a operar TUSE, incluyendo: procesadores de pago (para gestionar tu suscripción), servicios de hosting y almacenamiento en la nube, y servicios de mensajería SMS y notificaciones push.'
                },
                {
                    subtitle: '3.3 Cumplimiento Legal',
                    text: 'Podemos divulgar tu información si es requerido por ley, orden judicial, o para proteger nuestros derechos legales, prevenir daños físicos, o investigar posibles violaciones de nuestros términos de servicio.'
                },
                {
                    subtitle: '3.4 NO Vendemos tu Información',
                    text: 'NUNCA vendemos, alquilamos, ni comercializamos tu información personal a terceros para sus propósitos de marketing.'
                }
            ]
        },
        {
            icon: Shield,
            title: '4. Seguridad de los Datos',
            content: [
                {
                    subtitle: '4.1 Medidas de Seguridad',
                    text: 'Implementamos medidas de seguridad técnicas y organizativas para proteger tu información, incluyendo: encriptación de extremo a extremo para datos sensibles, servidores seguros con certificados SSL/TLS, autenticación de dos factores, y auditorías de seguridad regulares.'
                },
                {
                    subtitle: '4.2 Retención de Datos',
                    text: 'Conservamos tu información personal mientras mantengas una cuenta activa con TUSE. Los datos de ubicación de emergencias se almacenan por un período de 90 días para tu referencia y luego se eliminan automáticamente. Podés solicitar la eliminación de tu cuenta y datos en cualquier momento.'
                }
            ]
        },
        {
            icon: FileText,
            title: '5. Tus Derechos',
            content: [
                {
                    subtitle: '5.1 Acceso y Corrección',
                    text: 'Tenés derecho a acceder, corregir, o actualizar tu información personal en cualquier momento desde la configuración de tu cuenta.'
                },
                {
                    subtitle: '5.2 Eliminación de Datos',
                    text: 'Podés solicitar la eliminación de tu cuenta y todos tus datos personales contactándonos. Procesaremos tu solicitud dentro de 30 días hábiles.'
                },
                {
                    subtitle: '5.3 Portabilidad de Datos',
                    text: 'Tenés derecho a recibir una copia de tus datos personales en un formato estructurado y de uso común.'
                },
                {
                    subtitle: '5.4 Retiro de Consentimiento',
                    text: 'Podés retirar tu consentimiento para el procesamiento de tus datos en cualquier momento, aunque esto puede limitar o impedir el uso del servicio TUSE.'
                },
                {
                    subtitle: '5.5 Derechos bajo Ley Argentina',
                    text: 'Conforme a la Ley 25.326 de Protección de Datos Personales de Argentina, tenés derecho al acceso, rectificación, actualización y supresión de tus datos personales. Para ejercer estos derechos, contactanos a través de los medios indicados en esta política.'
                }
            ]
        },
        {
            icon: Mail,
            title: '6. Cookies y Tecnologías Similares',
            content: [
                {
                    subtitle: '6.1 Uso de Cookies',
                    text: 'Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestra aplicación web y móvil. Las cookies nos ayudan a mantener tu sesión activa y recordar tus preferencias.'
                },
                {
                    subtitle: '6.2 Control de Cookies',
                    text: 'Podés configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad de algunos aspectos del servicio.'
                }
            ]
        },
        {
            icon: Shield,
            title: '7. Privacidad de Menores',
            content: [
                {
                    subtitle: '7.1 Edad Mínima',
                    text: 'TUSE está diseñado para usuarios mayores de 18 años. No recopilamos intencionalmente información de menores de 18 años sin el consentimiento de sus padres o tutores legales.'
                }
            ]
        },
        {
            icon: FileText,
            title: '8. Cambios a esta Política',
            content: [
                {
                    subtitle: '8.1 Actualizaciones',
                    text: 'Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas o por razones legales. Te notificaremos sobre cambios significativos por correo electrónico o mediante una notificación en la aplicación.'
                },
                {
                    subtitle: '8.2 Fecha de Última Actualización',
                    text: 'Esta política fue actualizada por última vez el 22 de enero de 2026.'
                }
            ]
        }
    ];

    return (
        <>
            <SEOHead
                title="Política de Privacidad - TUSE | Seguridad y Protección de Datos"
                description="Política de Privacidad de TUSE. Conocé cómo protegemos y utilizamos tu información personal y datos de ubicación GPS. Cumplimiento con Ley 25.326 Argentina."
                keywords="política de privacidad, protección de datos, TUSE, seguridad información, ley 25.326, privacidad GPS, datos personales Argentina"
            />

            <div className="min-h-screen bg-[#0A0A0A]">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697152bc5c1c0ebf7ca2255d/4dc616b1f_Gemini_Generated_Image_vlgaluvlgaluvlga.png"
                                alt="TUSE"
                                className="h-8"
                            />
                        </Link>
                        <Link
                            to={createPageUrl('Home')}
                            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm">Volver al inicio</span>
                        </Link>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="pt-32 pb-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F1F1F] border border-[#C9A962]/30 mb-6">
                            <Shield className="w-4 h-4 text-[#C9A962]" />
                            <span className="text-sm text-white/80">Tu privacidad es nuestra prioridad</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Política de <span className="bg-gradient-to-r from-[#C9A962] to-[#E8C868] bg-clip-text text-transparent">Privacidad</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            En TUSE nos tomamos muy en serio la protección de tu información personal y tu privacidad. Esta política explica cómo recopilamos, utilizamos, y protegemos tus datos.
                        </p>
                        <p className="text-sm text-white/40 mt-4">
                            Última actualización: 22 de enero de 2026
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="pb-24 px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="bg-[#1F1F1F] border border-white/5 rounded-3xl p-8 md:p-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center shrink-0">
                                        <section.icon className="w-6 h-6 text-[#C9A962]" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h2>
                                </div>

                                <div className="space-y-6">
                                    {section.content.map((item, idx) => (
                                        <div key={idx} className="border-l-2 border-[#C9A962]/20 pl-6">
                                            <h3 className="text-lg font-semibold text-white mb-2">{item.subtitle}</h3>
                                            <p className="text-white/60 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Contact Section */}
                        <div className="bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] border border-[#C9A962]/20 rounded-3xl p-8 md:p-10">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-[#C9A962]/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-[#C9A962]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">9. Contacto</h2>
                                    <p className="text-white/60 leading-relaxed mb-4">
                                        Si tenés preguntas, inquietudes, o solicitudes relacionadas con esta Política de Privacidad o el tratamiento de tus datos personales, podés contactarnos a través de:
                                    </p>
                                    <div className="space-y-2 text-white/80">
                                        <p><strong className="text-[#C9A962]">Email:</strong> privacy@tuse.com.ar</p>
                                        <p><strong className="text-[#C9A962]">WhatsApp:</strong> +54 9 11 1234-5678</p>
                                        <p><strong className="text-[#C9A962]">Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 ART</p>
                                    </div>
                                    <p className="text-white/60 leading-relaxed mt-4">
                                        Para ejercer tus derechos bajo la Ley 25.326 de Protección de Datos Personales, podés enviar tu solicitud por escrito a la dirección de correo electrónico indicada. Responderemos a tu solicitud dentro de los 10 días hábiles establecidos por la normativa vigente.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Legal Notice */}
                        <div className="text-center py-8 border-t border-white/5">
                            <p className="text-sm text-white/40 mb-4">
                                TUSE cumple con la Ley 25.326 de Protección de Datos Personales de Argentina y las regulaciones de privacidad aplicables.
                            </p>
                            <Link
                                to={createPageUrl('Home')}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#DC2626]/30 transition-all duration-300"
                            >
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}