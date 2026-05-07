"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Search, 
  FileLock2, 
  EyeOff,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import LeadModal from '@/components/sections/LeadModal';

export default function LGPDPagina() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tag, setTag] = useState("[Lead: LGPD_Pagina]");

  const handleOpenModal = (source: string) => {
    setTag(source);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest">
                Privacidade por Design
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
              Conformidade <span className="text-blue-600">LGPD</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tratamos os dados da sua empresa e dos seus clientes com o mais alto nível de rigor técnico e jurídico, seguindo a Lei Geral de Proteção de Dados (Lei 13.709/2018).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Os 4 Pilares da Agilify */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Lock, 
                title: "Criptografia", 
                desc: "Dados fiscais e Certificados Digitais A1 são protegidos por criptografia de nível bancário em repouso e em trânsito." 
              },
              { 
                icon: UserCheck, 
                title: "Direito do Titular", 
                desc: "Ferramentas nativas para que você possa consultar, exportar ou excluir dados pessoais sob sua custódia." 
              },
              { 
                icon: EyeOff, 
                title: "Acesso Restrito", 
                desc: "Políticas de privilégio mínimo: apenas pessoas autorizadas têm acesso aos dados estritamente necessários." 
              },
              { 
                icon: FileLock2, 
                title: "Retenção Segura", 
                desc: "Os documentos fiscais são armazenados pelo prazo legal de 5 anos com backups redundantes e seguros." 
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist de Segurança Técnica */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Infraestrutura Blindada</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                A AGILIFY utiliza os mesmos datacenters de grandes instituições financeiras globais, garantindo que a emissão da sua nota nunca seja interrompida por falhas de segurança.
              </p>
              
              <div className="space-y-4">
                {[
                  "Datacenters ISO 27001 e SOC2 Type II",
                  "Monitoramento contra invasões 24h/7",
                  "Mascaramento de dados sensíveis em logs",
                  "Backups automáticos em múltiplas regiões",
                  "Protocolos HTTPS/TLS 1.3 em toda a plataforma"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                 <ShieldCheck size={100} className="text-blue-500/10" />
               </div>
               <h4 className="text-xl font-bold mb-4">Relatório de Impacto (RIPD)</h4>
               <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                 Mantemos registros de todas as operações de tratamento de dados, facilitando auditorias e garantindo transparência total com o Fisco e com seus clientes.
               </p>
               <Button 
                variant="outline" 
                className="border-slate-600 text-white hover:bg-slate-700"
                onClick={() => handleOpenModal("[Lead: LGPD_Solicitar_Relatorio]")}
               >
                 Solicitar detalhes técnicos
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA de Segurança */}
      <section className="py-24 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Sua tranquilidade é nossa prioridade
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            Dúvidas sobre como tratamos os dados na AGILIFY? Nossa equipe técnica e jurídica está à disposição para esclarecimentos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => handleOpenModal("[Lead: LGPD_CTA_Final]")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-10"
            >
              Falar com um especialista
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-10 border-slate-300 text-slate-700"
              onClick={() => handleOpenModal("[Lead: LGPD_Duvida_Tecnica]")}
            >
              Ver FAQ de Segurança
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