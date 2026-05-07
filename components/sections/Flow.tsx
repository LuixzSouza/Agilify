"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Store, ShieldCheck, Database, Building2, Clock } from 'lucide-react';

const flowSteps = [
  { icon: Store, title: "Empresa emite nota", desc: "A nota é gerada no PDV ou Painel da AGILIFY.", time: "~3s" },
  { icon: ShieldCheck, title: "Sistema valida na SEFAZ", desc: "Assinatura digital e autorização governamental automática.", time: "~5s" },
  { icon: Database, title: "XML organizado e arquivado", desc: "O arquivo é salvo em nuvem segura com backup 24/7.", time: "~30s" },
  { icon: Building2, title: "Contador recebe acesso", desc: "Disponível no Portal do Contador e sistemas contábeis.", time: "≤15min" }
];

export default function Flow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // prefersReducedMotion retorna boolean | null. Se for true, pausamos o auto-play.
    // Usar isso aqui não causa erro de Hydration pois afeta apenas o comportamento, não o HTML.
    if (prefersReducedMotion === true) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % flowSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            O caminho do seu XML, 100% automático.
          </h2>
          <p className="text-lg text-slate-600">
            Esqueça o e-mail no fim do mês. Veja o que acontece nos bastidores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-4xl mx-auto">
          
          {/* Menu Lateral dos Passos */}
          <div className="flex flex-col gap-3">
            {flowSteps.map((step, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;
              const Icon = step.icon;

              return (
                <div 
                  key={i} 
                  role="button"
                  tabIndex={0}
                  aria-selected={isActive}
                  onKeyDown={(e) => e.key === 'Enter' && handleStepClick(i)}
                  onClick={() => handleStepClick(i)}
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive 
                      ? "bg-white border-slate-300 shadow-sm" 
                      : "bg-transparent border-transparent opacity-70 hover:opacity-100 hover:bg-slate-100/60"
                  }`}
                >
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors border ${
                    isActive 
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm" 
                      : isPast 
                        ? "bg-slate-200 text-slate-500 border-slate-200" 
                        : "bg-white text-slate-400 border-slate-200"
                  }`}>
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  
                  <div className="flex-1 pt-0.5">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h4 className={`text-base ${isActive ? "font-semibold text-slate-900" : "font-medium text-slate-600"}`}>
                        {step.title}
                      </h4>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                        isActive ? "bg-slate-100 text-slate-600 font-medium" : "text-slate-400"
                      }`}>
                        {step.time}
                      </span>
                    </div>
                    
                    {isActive && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-slate-500 mt-1.5 leading-relaxed"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Área Visual do Estado */}
          <div className="bg-white rounded-xl border border-slate-200 h-64 md:h-full min-h-[340px] shadow-sm flex items-center justify-center p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center max-w-[280px]"
              >
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                  {React.createElement(flowSteps[activeIndex].icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {flowSteps[activeIndex].title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {flowSteps[activeIndex].desc}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                  <Clock size={12} className="text-slate-400" /> 
                  Conclusão: <span className="text-slate-700">{flowSteps[activeIndex].time}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Bar com motion-reduce:hidden do Tailwind */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-slate-50 w-full motion-reduce:hidden">
              <motion.div 
                key={`progress-${activeIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-blue-500/40"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}