"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MousePointerClick, 
  Download, 
  FolderTree, 
  Clock, 
  Users, 
  ArrowRightLeft,
  ShieldCheck
} from 'lucide-react';

// ==========================================
// 1. PERFORMANCE: Variáveis de animação extraídas
// ==========================================
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
export default function Audience() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/50" id="para-quem">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Empresário e contador trabalhando no mesmo sistema.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Enquanto a empresa emite notas, o contador recebe tudo automaticamente. Sem cobranças, sem perda de arquivos.
          </p>
          
          {/* Micro Prova Social */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
            <ShieldCheck size={14} aria-hidden="true" />
            Usado por mercados, lojas, padarias e contabilidades
          </div>
        </div>

        {/* Tabs de Segmentação */}
        <Tabs defaultValue="empresa" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList 
              className="h-14 w-full max-w-md grid grid-cols-2 bg-white border border-slate-200 p-1 rounded-xl shadow-sm"
              aria-label="Selecione seu perfil de uso"
            >
              <TabsTrigger 
                value="empresa" 
                className="text-base font-semibold data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-lg transition-colors"
              >
                Para Empresa
              </TabsTrigger>
              <TabsTrigger 
                value="contador" 
                className="text-base font-semibold data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-lg transition-colors"
              >
                Para Contador
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Conteúdo: EMPRESA */}
          <TabsContent value="empresa" className="mt-0 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card 
                icon={<MousePointerClick size={24} aria-hidden="true" />} 
                title="Emita em 3 cliques" 
                desc="Gere NFC-e e NF-e direto do navegador com validação fiscal automática. Simples como deve ser." 
              />
              <Card 
                icon={<Download size={24} aria-hidden="true" />} 
                title="Pare de enviar XML manualmente" 
                desc="O sistema sincroniza suas notas automaticamente com a contabilidade. Fim da cobrança no fim do mês." 
              />
              <Card 
                icon={<FolderTree size={24} aria-hidden="true" />} 
                title="Tudo organizado" 
                desc="Histórico, status da SEFAZ, XML e DANFE sempre disponíveis em um painel rápido e fácil de buscar." 
              />
            </motion.div>
          </TabsContent>

          {/* Conteúdo: CONTADOR */}
          <TabsContent value="contador" className="mt-0 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl">
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid md:grid-cols-3 gap-6 md:gap-8">
              <Card 
                icon={<Clock size={24} aria-hidden="true" />} 
                title="Receba tudo automaticamente" 
                desc="Acesse as notas fiscais dos seus clientes no exato momento em que são emitidas, em tempo real." 
              />
              <Card 
                icon={<Users size={24} aria-hidden="true" />} 
                title="Vários clientes, uma tela" 
                desc="Alterne entre empresas com um clique. Tudo categorizado, filtrado e pronto para o fechamento." 
              />
              <Card 
                icon={<ArrowRightLeft size={24} aria-hidden="true" />} 
                title="Envie direto pro sistema contábil" 
                desc="Exporte em lote com compatibilidade nativa para sistemas como Alterdata e Domínio." 
              />
            </motion.div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}

// ==========================================
// 3. SUBCOMPONENTE DE CARD REFINADO
// ==========================================
interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function Card({ icon, title, desc }: CardProps) {
  return (
    <motion.div 
      variants={cardVariants} 
      className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-sm ring-1 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{desc}</p>
    </motion.div>
  );
}