"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Target, Zap, CheckCircle2, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LeadModal from '@/components/sections/LeadModal';

export default function SobreNos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tag, setTag] = useState("[Lead: Sobre_Nos]");

  const handleOpenModal = (source: string) => {
    setTag(source);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-white">
      {/* Hero da Página Sobre */}
      <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Nossa missão é <span className="text-blue-600">descomplicar</span> <br className="hidden md:block" /> o Brasil que empreende.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A AGILIFY nasceu da necessidade de transformar a emissão de notas fiscais de um &quot;problema mensal&quot; em um processo invisível e automático.
            </p>
          </motion.div>
        </div>
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>
      </section>

      {/* História / Propósito */}
      <section className="py-20 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Por que existimos?</h2>
              <p className="text-slate-600 leading-relaxed">
                Sabemos que o empresário brasileiro gasta, em média, 1.500 horas por ano apenas com burocracia tributária. Isso é tempo que deveria ser gasto inovando, vendendo e crescendo.
              </p>
              <p className="text-slate-600 leading-relaxed">
                A <strong>AGILIFY</strong> foi desenvolvida para ser a ponte tecnológica entre a empresa e o contador. Não somos apenas um software de apertar botões; somos uma camada de inteligência que garante que cada XML esteja no lugar certo, na hora certa, com segurança total.
              </p>
              
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="text-blue-600" size={18} /> +1 Milhão de Notas Emitidas
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="text-blue-600" size={18} /> Suporte 100% Humano
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl flex items-center justify-center">
                <span className="text-slate-400 font-medium italic">[ Foto da Equipe ou Escritório ]</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                 <p className="text-2xl font-bold text-blue-600">99.9%</p>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Uptime do Sistema</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Pilares */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Pilares</h2>
            <p className="text-slate-400">O que nos guia todos os dias no desenvolvimento da AGILIFY.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança Inegociável</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Dados fiscais são sensíveis. Utilizamos criptografia de ponta e servidores de alta disponibilidade para garantir que sua empresa nunca pare.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Simplicidade Extrema</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Se o software for difícil de usar, ele falhou. Nossa interface é desenhada para que qualquer pessoa emita uma nota em menos de 3 cliques.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Parceria Real</h3>
              <p className="text-slate-600 text-white/80 text-sm leading-relaxed">
                Não somos um &quot;robô de suporte&quot;. Temos especialistas prontos para te ajudar na configuração do certificado e nas regras tributárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center">
        <div className="max-w-[1240px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Vamos construir essa história juntos?
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Experimente a liberdade de focar no que realmente importa: o seu negócio. Deixe as notas fiscais com a gente.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => handleOpenModal("[Lead: Sobre_CTA_Final]")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10 text-base"
            >
              Começar teste grátis
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => handleOpenModal("[Lead: Sobre_Falar_Especialista]")}
              className="border-slate-300 text-slate-700 h-14 px-10 text-base"
            >
              Falar com um especialista
            </Button>
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