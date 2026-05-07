"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  BarChart3, 
  FileCheck, 
  Users, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import LeadModal from '@/components/sections/LeadModal';

export default function Parceiros() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tag, setTag] = useState("[Lead: Parceiros_Geral]");

  const handleOpenModal = (source: string) => {
    setTag(source);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-white">
      {/* Hero - Focado no Contador */}
      <section className="relative py-20 lg:py-32 bg-slate-900 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">Programa de Parceria 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Sua contabilidade <br /> <span className="text-blue-500">em tempo real.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-xl">
                Elimine o envio manual de arquivos. Tenha acesso direto aos documentos fiscais de todos os seus clientes em um único portal exclusivo para contadores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => handleOpenModal("[Lead: Parceiros_Hero_CTA]")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 text-base"
                >
                  Seja um parceiro agora
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  onClick={() => handleOpenModal("[Lead: Parceiros_Hero_Saber_Mais]")}
                  className="border-slate-700 text-white hover:bg-slate-800 h-14 px-8 text-base"
                >
                  Ver benefícios
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:block"
            >
               <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                            <BarChart3 size={20} />
                        </div>
                        <p className="font-bold text-white">Portal do Contador</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-widest border border-emerald-500/20">
                        Ativo
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-12 bg-slate-900/50 rounded-lg border border-slate-700 flex items-center px-4 justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-slate-700 rounded-full" />
                                <div className="w-24 h-2 bg-slate-700 rounded-full" />
                            </div>
                            <div className="w-16 h-2 bg-blue-500/30 rounded-full" />
                        </div>
                    ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vantagens Reais */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">O que você ganha sendo parceiro?</h2>
            <p className="text-slate-600">Tecnologia que trabalha para o seu escritório, não o contrário.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Zero Burocracia", desc: "Acesso automático aos XMLs e PDFs de todos os clientes." },
              { icon: Users, title: "Gestão Unificada", desc: "Um único painel para gerenciar múltiplas empresas." },
              { icon: FileCheck, title: "Conformidade", desc: "Sincronização direta com a SEFAZ em tempo real." },
              { icon: Globe, title: "Acesso Remoto", desc: "Tudo na nuvem, acessível de qualquer lugar e dispositivo." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona o Fluxo */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <img src="/workflow-contadores.png" alt="Fluxo de trabalho" className="w-full h-auto drop-shadow-2xl" />
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Integração perfeita com seu escritório</h2>
                    
                    <div className="space-y-6">
                        {[
                            { step: "01", t: "Cadastro Gratuito", d: "Escritórios de contabilidade não pagam para usar o portal." },
                            { step: "02", t: "Vincule Clientes", d: "Adicione seus clientes que já usam Agilify ou indique novos." },
                            { step: "03", t: "Baixe em Lote", d: "Exporte todos os arquivos do mês com apenas um clique." }
                        ].map((s, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="text-2xl font-black text-blue-100 leading-none">{s.step}</span>
                                <div>
                                    <h4 className="font-bold text-slate-900">{s.t}</h4>
                                    <p className="text-sm text-slate-500 mt-1">{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-16 relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Seja um dos escritórios homologados Agilify
                </h2>
                <p className="text-blue-100 mb-10 text-lg">
                    Dê aos seus clientes a melhor experiência de emissão e simplifique seu fechamento mensal.
                </p>
                <Button 
                    size="lg" 
                    onClick={() => handleOpenModal("[Lead: Parceiros_CTA_Final]")}
                    className="bg-white text-blue-600 hover:bg-blue-50 font-bold h-14 px-10 text-base shadow-xl"
                >
                    Quero ser parceiro
                </Button>
                <p className="mt-6 text-blue-200 text-xs flex items-center justify-center gap-2">
                    <ShieldCheck size={14} /> Cadastro sujeito a análise técnica.
                </p>
             </div>
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          </div>
        </div>
      </section>

      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        sourceTag={tag} 
      />
    </main>
  );
}