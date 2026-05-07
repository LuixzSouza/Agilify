"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, XCircle, Unlock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ==========================================
// 1. DADOS DOS PLANOS (Copy Corporativo)
// ==========================================
const plans = [
  {
    name: "Essencial",
    desc: "Para quem está começando e emite pouco.",
    priceMonthly: "199",
    priceYearly: "159",
    billingText: "por mês",
    features: [
      "Até 300 notas (NFC-e / NF-e)",
      "1 CNPJ + 2 usuários",
      "Consulta de notas de entrada",
      "Envio automático ao contador",
      "Suporte por chat e e-mail"
    ],
    cta: "Começar agora",
    highlight: false,
    forAccountants: false
  },
  {
    name: "Profissional",
    desc: "Recomendado para lojistas e mercados.",
    priceMonthly: "249",
    priceYearly: "199",
    billingText: "por mês",
    features: [
      "Emissão ilimitada de notas",
      "Até 3 CNPJs + 5 usuários",
      "Integração Alterdata + Domínio",
      "Portal do Contador nativo",
      "Suporte prioritário via WhatsApp",
      "Ajuda humana na implantação"
    ],
    cta: "Começar 14 dias grátis",
    highlight: true,
    forAccountants: false
  },
  {
    name: "Contador",
    desc: "Para escritórios contábeis parceiros.",
    priceMonthly: "Gratuito",
    priceYearly: "Gratuito",
    billingText: "para escritórios",
    features: [
      "Acesso a múltiplos clientes",
      "Portal Contábil completo",
      "Download de XML em lote (ZIP)",
      "Exportação para sistemas contábeis",
      "Painel de status em tempo real",
      "Canal direto com o suporte"
    ],
    cta: "Solicitar parceria",
    highlight: false,
    forAccountants: true
  }
];

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/50" id="planos">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Planos que cabem no seu negócio.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Usado por mercados, padarias, distribuidoras e escritórios contábeis em todo o Brasil. Sem taxas escondidas.
          </p>
          
          {/* Toggle Mensal/Anual (Acessível) */}
          <div 
            className="inline-flex items-center bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm"
            role="group"
            aria-label="Selecionar ciclo de faturamento"
          >
            <button 
              onClick={() => setIsAnnual(false)} 
              aria-pressed={!isAnnual}
              className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 outline-none ${
                !isAnnual ? "bg-slate-800 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Pagamento Mensal
            </button>
            <button 
              onClick={() => setIsAnnual(true)} 
              aria-pressed={isAnnual}
              className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 outline-none ${
                isAnnual ? "bg-blue-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              Pagamento Anual <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${isAnnual ? "bg-white/20" : "bg-emerald-100 text-emerald-700"}`}>2 meses grátis</span>
            </button>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`relative bg-white rounded-xl flex flex-col h-full transition-shadow duration-200 ${
                plan.highlight 
                  ? "border-2 border-blue-600 shadow-lg" 
                  : "border border-slate-200 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Badge Topo */}
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                  Mais Recomendado
                </div>
              )}

              {/* Cabeçalho do Card */}
              <div className={`p-6 md:p-8 rounded-t-xl border-b ${plan.highlight ? 'bg-blue-50/50 border-blue-100' : 'border-slate-100'}`}>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
                
                <div className="mt-6 flex items-baseline gap-1.5 h-12">
                  {!plan.forAccountants && <span className="text-slate-500 text-base font-semibold">R$</span>}
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className={`font-black tracking-tight ${plan.forAccountants ? 'text-3xl text-emerald-600' : 'text-4xl text-slate-900'}`}
                    >
                      {isAnnual ? plan.priceYearly : plan.priceMonthly}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-slate-500 text-sm font-medium ml-1">{plan.billingText}</span>
                </div>
              </div>

              {/* Corpo e Lista */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.highlight ? "default" : "outline"}
                  size="lg"
                  className={`w-full h-12 text-base font-bold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 ${
                    plan.highlight 
                      ? "bg-blue-600 hover:bg-blue-700 shadow-sm" 
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Garantias Finais (Quebra de Objeção) */}
        <div className="mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-slate-600 text-sm font-medium pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <Unlock size={18} className="text-slate-400" /> Sem contrato de fidelidade
          </div>
          <div className="flex items-center gap-2">
            <XCircle size={18} className="text-slate-400" /> Sem taxa de instalação
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-slate-400" /> Cancelamento direto pelo painel
          </div>
        </div>

      </div>
    </section>
  );
}