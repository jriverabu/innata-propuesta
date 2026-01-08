import React, { useState } from 'react';
import { 
  Video, 
  Image as ImageIcon, 
  Target, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Search,
  Settings,
  MessageSquare,
  Instagram,
  Smartphone,
  Eye,
  Award,
  Zap,
  Users,
  Compass,
  Repeat
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('mes1');

  const reelsDetail = [
    { title: "3 Reels: Autoridad Médica", desc: "Explicación técnica de procedimientos (Bioestimuladores vs Hilos). Enfoque en ciencia y seguridad para el paciente sofisticado de Bogotá." },
    { title: "3 Reels: Journey del Paciente", desc: "Recorrido sensorial por la clínica en Bogotá. Desde la bienvenida VIP hasta el confort y los resultados inmediatos." },
    { title: "2 Reels: Estética Lifestyle", desc: "Videos cinematográficos de texturas, luz y resultados naturales. El 'Glow' de Innata para los barrios de Usaquén y Chicó." },
    { title: "2 Reels: Resolución de Barreras", desc: "Respuestas directas a miedos: ¿Duele?, ¿Cuánto dura?, ¿Resultados naturales? Eliminando objeciones para el cierre de cita." }
  ];

  const designsDetail = [
    { type: "Infografía Clínica", focus: "Educación", detail: "Explicación visual de capas de la piel y beneficios celulares de los tratamientos." },
    { type: "Prueba Social Gráfica", focus: "Confianza", detail: "Testimonios destacados y frases de satisfacción con diseño premium alineado a Innata." },
    { type: "Comparativa de Resultados", focus: "Evidencia", detail: "Análisis visual de armonización facial con métricas de mejora estética sutil." },
    { type: "Venta Táctica / Promo", focus: "Conversión", detail: "Anuncio de tratamiento del mes con llamado a la acción persuasivo y directo a WhatsApp." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white pb-24 md:pb-0">
      
      {/* Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center bg-black px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200" 
            alt="Fondo estética de lujo" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-black/60"></div>
        
        <div className="relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#C5A059]/50 px-5 py-2 rounded-full text-[#C5A059] text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-8 bg-black/20 backdrop-blur-sm">
            <Award size={14} /> Estrategia de Crecimiento 2026
          </div>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
            INNATA
          </h1>
          <p className="text-[#C5A059] text-lg md:text-3xl font-light tracking-wide mb-10 max-w-xl mx-auto italic leading-relaxed">
            "Donde la ciencia médica se encuentra con el arte de la estética."
          </p>
          <div className="flex flex-col items-center gap-3 text-white/40 text-[9px] md:text-[10px] tracking-[0.3em] uppercase">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#C5A059]" />
              Bogotá: Usaquén · Chicó · Rosales
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Estratégico */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-4">El Valor del Ecosistema</h2>
            <h3 className="text-3xl md:text-4xl font-serif leading-tight mb-6">Su Perfil como Consultorio Digital</h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Sin sitio web, su perfil de Instagram se convierte en su <strong>principal canal de ventas y validación</strong>. Nuestra labor es asegurar que cada interacción respire la misma exclusividad y seguridad que una cita presencial.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-[#F9F7F2] rounded-3xl">
                <Instagram className="text-[#C5A059] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">Optimización de Vitrina</h4>
                  <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">Diseño de biografía estratégica y portadas de historias destacadas que retienen al usuario de alto valor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#F9F7F2] rounded-3xl">
                <MessageSquare className="text-[#C5A059] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1">Conversión Directa</h4>
                  <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">Embudos de pauta configurados para abrir el chat de WhatsApp con mensajes de pre-valoración ya redactados.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-[4/5] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Médico especialista" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] border border-gray-100">
              <p className="text-[9px] text-[#C5A059] font-bold uppercase mb-1">Dato Clave</p>
              <p className="text-xs font-serif text-gray-700 italic leading-snug">"Un paciente estético necesita 7 impactos visuales para confiar su rostro a una marca."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitectura de Contenido */}
      <section className="py-24 bg-[#F9F7F2] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Layers className="text-[#C5A059] mx-auto mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Arquitectura de Contenido</h2>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest">Plan de activos digitales mensual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-8">
              <h3 className="text-xl font-serif border-b border-[#C5A059]/30 pb-4 flex justify-between items-center">
                10 Reels Estratégicos <Video size={20} className="text-[#C5A059]" />
              </h3>
              <div className="space-y-5">
                {reelsDetail.map((reel, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 transition-all hover:translate-x-1">
                    <h4 className="font-bold text-sm text-[#C5A059] mb-3 flex items-center gap-2">
                      <CheckCircle2 size={14} /> {reel.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{reel.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-serif border-b border-[#C5A059]/30 pb-4 flex justify-between items-center">
                4 Diseños Premium <ImageIcon size={20} className="text-[#C5A059]" />
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {designsDetail.map((design, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6 group hover:border-[#C5A059]/30 transition-all">
                    <div className="w-12 h-12 bg-[#F9F7F2] rounded-2xl flex items-center justify-center text-[#C5A059] font-bold text-lg group-hover:bg-[#C5A059] group-hover:text-white transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{design.type}</h4>
                      <p className="text-[10px] text-gray-400 leading-tight">{design.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA META ADS - EXPLICACIÓN DETALLADA */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] font-bold mb-4">Ingeniería de Publicidad Médica</h2>
            <h3 className="text-4xl font-serif mb-6 leading-tight italic">¿Cómo transformamos clics en citas?</h3>
            <p className="text-zinc-400 text-sm max-w-2xl mx-auto leading-relaxed">
              No se trata de pagar por "likes", se trata de guiar al paciente en Bogotá a través de un proceso de confianza científica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pilar 1: Prospección */}
            <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 relative group hover:border-[#C5A059]/50 transition-all">
              <div className="w-14 h-14 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6">
                <Users size={28} />
              </div>
              <h4 className="text-lg font-serif mb-4 tracking-wide text-[#C5A059]">1. Atracción (Prospección)</h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                <strong>¿Qué es?:</strong> Encontrar pacientes nuevos que no conocen Innata. 
                <br/><br/>
                <strong>¿Cómo se hace?:</strong> Mostramos sus Reels de autoridad a personas en Bogotá que buscan belleza, lujo y dermatología, pero que aún no han encontrado su clínica ideal. Es "sembrar" la marca en mentes nuevas.
              </p>
              <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold border-t border-zinc-800 pt-4">Foco: Personas Nuevas</div>
            </div>

            {/* Pilar 2: Retargeting */}
            <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 relative group hover:border-[#C5A059]/50 transition-all">
              <div className="w-14 h-14 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6">
                <Repeat size={28} />
              </div>
              <h4 className="text-lg font-serif mb-4 tracking-wide text-[#C5A059]">2. Recordación (Retargeting)</h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                <strong>¿Qué es?:</strong> Convencer a los indecisos. 
                <br/><br/>
                <strong>¿Cómo se hace?:</strong> Si alguien vio un Reel pero no agendó, le volvemos a aparecer con un testimonio o una duda resuelta. Es el "seguimiento" automático que asegura que no nos olviden antes de tomar la decisión final.
              </p>
              <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold border-t border-zinc-800 pt-4">Foco: Interesados Indecisos</div>
            </div>

            {/* Pilar 3: Posicionamiento Local */}
            <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-zinc-800 relative group hover:border-[#C5A059]/50 transition-all">
              <div className="w-14 h-14 bg-[#C5A059]/10 rounded-2xl flex items-center justify-center text-[#C5A059] mb-6">
                <Compass size={28} />
              </div>
              <h4 className="text-lg font-serif mb-4 tracking-wide text-[#C5A059]">3. Dominio Local (Bogotá)</h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                <strong>¿Qué es?:</strong> Ser la opción #1 en su zona. 
                <br/><br/>
                <strong>¿Cómo se hace?:</strong> Concentramos la fuerza en Usaquén, Chicó y Rosales. Hacemos que para cualquier persona que viva o trabaje cerca de la clínica, Innata sea la referencia inmediata de estética de lujo.
              </p>
              <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold border-t border-zinc-800 pt-4">Foco: Territorio Clave</div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-[3.5rem] shadow-2xl">
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-10 text-[#C5A059] text-center">Distribución Estratégica de Inversión ($600.000)</h4>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-8">
                <div className="relative">
                  <div className="flex justify-between text-[10px] mb-3 uppercase font-bold tracking-widest text-zinc-400">
                    <span>Inversión en Nuevos Rostros</span>
                    <span className="text-[#C5A059]">70%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C5A059] w-[70%] rounded-full shadow-[0_0_10px_#C5A059]"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex justify-between text-[10px] mb-3 uppercase font-bold tracking-widest text-zinc-400">
                    <span>Inversión en Cierre de Citas</span>
                    <span className="text-[#C5A059]">30%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C5A059] w-[30%] rounded-full shadow-[0_0_10px_#C5A059]"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-zinc-800/30 p-8 rounded-3xl border border-zinc-800/50">
                <h5 className="font-serif text-[#C5A059] mb-4 italic text-lg">Nota de Especialista:</h5>
                <p className="text-[11px] text-zinc-400 leading-relaxed italic">
                  "El 70% de su presupuesto sale a buscar pacientes que no la conocen, mientras que el 30% restante se encarga de 'perseguir' a quienes ya mostraron interés para que terminen escribiéndole al WhatsApp. Este equilibrio es el que garantiza un flujo constante de agendamientos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-4">Inversión Final</h2>
          <div className="flex justify-center bg-gray-100 p-1.5 rounded-2xl inline-flex text-[10px] font-bold uppercase tracking-widest mx-auto shadow-inner">
            <button onClick={() => setActiveTab('mes1')} className={`px-6 md:px-8 py-3 rounded-xl transition-all ${activeTab === 'mes1' ? 'bg-white shadow-sm text-slate-900 font-bold' : 'text-gray-400'}`}>Mes 1: Lanzamiento</button>
            <button onClick={() => setActiveTab('mes2')} className={`px-6 md:px-8 py-3 rounded-xl transition-all ${activeTab === 'mes2' ? 'bg-white shadow-sm text-slate-900 font-bold' : 'text-gray-400'}`}>Mes 2+: Optimización</button>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="p-8 md:p-16">
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-gray-50 pb-6">
                <div>
                  <h4 className="text-xl font-serif">Creación de Contenido</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">10 Reels + 4 Estáticos + Estrategia</p>
                </div>
                <div className="text-2xl font-light text-gray-300">$1.200.000</div>
              </div>
              
              <div className="flex justify-between items-end border-b border-gray-50 pb-6">
                <div>
                  <h4 className="text-xl font-serif">Gestión Meta Ads</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                    {activeTab === 'mes1' ? 'Setup Técnico + Estrategia Local' : 'Análisis de Datos + Cierre de Embudos'}
                  </p>
                </div>
                <div className="text-2xl font-light text-gray-300">
                  {activeTab === 'mes1' ? '$600.000' : '$1.000.000'}
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="bg-[#1A1A1A] text-white px-10 py-8 rounded-[35px] w-full md:w-auto shadow-2xl">
                  <p className="text-[10px] text-[#C5A059] uppercase font-bold mb-1 tracking-[0.2em]">Inversión Total Servicios</p>
                  <h3 className="text-4xl md:text-5xl font-serif">
                    {activeTab === 'mes1' ? '$1.800.000' : '$2.200.000'}
                  </h3>
                  <p className="text-[9px] text-zinc-500 mt-3 italic leading-tight">
                    *Excluye inversión en pauta ($600.000 sugerido).
                  </p>
                </div>
                <div className="max-w-[200px] text-center md:text-left">
                  <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-[#C5A059]/20 pl-4">
                    El incremento en la gestión a partir del segundo mes se debe al uso de **Inteligencia de Datos** para crear públicos similares a sus mejores clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Final */}
      <footer className="py-20 px-6 border-t border-gray-100 text-center bg-white">
        <div className="max-w-xl mx-auto">
          <Zap className="text-[#C5A059] mx-auto mb-8 animate-pulse" size={40} />
          <h2 className="text-3xl font-serif mb-8 leading-tight">¿Comenzamos la evolución de Innata?</h2>
          <div className="grid grid-cols-2 gap-4 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-10">
            <div className="flex items-center justify-center gap-2 border border-gray-50 py-3 rounded-2xl">
              <ShieldCheck size={14} className="text-[#C5A059]" /> 100% Confidencial
            </div>
            <div className="flex items-center justify-center gap-2 border border-gray-50 py-3 rounded-2xl">
              <Eye size={14} className="text-[#C5A059]" /> Reportes Mensuales
            </div>
          </div>
          <p className="text-[10px] text-gray-300 italic">Propuesta válida por 15 días calendario.</p>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 p-5 md:hidden z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex flex-col">
            <span className="text-[8px] uppercase tracking-widest text-[#C5A059] font-bold">Total Mes 1</span>
            <span className="text-xl font-serif font-bold text-[#1A1A1A]">$1.800.000</span>
          </div>
          <button className="bg-[#1A1A1A] text-[#C5A059] px-8 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-2xl active:scale-95 transition-transform">
            Aceptar <ArrowRight size={14} />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default App;
