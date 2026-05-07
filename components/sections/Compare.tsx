"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, MinusCircle, Mail, FileStack, Keyboard, TableProperties, Headset, MonitorSmartphone } from 'lucide-react';

const comparisons = [
  { 
    icon: Mail, 
    bad: "Cliente envia XML por e-mail toda semana", 
    good: "Notas vão direto pro contador, em 15 minutos" 
  },
  { 
    icon: FileStack, 
    bad: "Envio manual de XML para a contabilidade", 
    good: "Contador acessa quando quiser, pelo portal dele" 
  },
  { 
    icon: Keyboard, 
    bad: "Digitação manual de notas de entrada no sistema", 
    good: "Importação automática apenas com a chave de acesso" 
  },
  { 
    icon: TableProperties, 
    bad: "Uso de planilhas de Excel paralelas para controle", 
    good: "Tudo organizado no painel, com filtros e buscas" 
  },
  { 
    icon: Headset, 
    bad: "Suporte demorado via chamados e tickets", 
    good: "Suporte humano rápido e direto no WhatsApp" 
  },
  { 
    icon: MonitorSmartphone, 
    bad: "Instalação por CD e atualização manual do sistema", 
    good: "100% online, roda no navegador e sempre atualizado" 
  },
];

export default function Compare() {
  return (
    <section className="py-24 bg-white" id="diferenca">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            A diferença no dia a dia.
          </h2>
          <p className="text-lg text-slate-600">
            Veja o que muda na rotina da empresa e da contabilidade ao adotar a AGILIFY.
          </p>
        </div>

        {/* Tabela de Comparação (Responsiva) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
        >
          {/* Header Desktop (Oculto no Mobile) */}
          <div className="hidden md:grid grid-cols-2 divide-x divide-slate-200 border-b border-slate-200">
            <div className="bg-slate-50 text-slate-600 py-5 px-6 flex items-center justify-center gap-2">
              <MinusCircle size={20} className="text-slate-400" aria-hidden="true" /> 
              <h3 className="font-semibold text-base">Processo Tradicional</h3>
            </div>
            <div className="bg-emerald-50/50 text-emerald-800 py-5 px-6 flex items-center justify-center gap-2">
              <CheckCircle2 size={20} className="text-emerald-600" aria-hidden="true" /> 
              <h3 className="font-semibold text-base">Com AGILIFY</h3>
            </div>
          </div>

          {/* Linhas da Comparação */}
          <div className="divide-y divide-slate-200">
            {comparisons.map((row, i) => {
              const Icon = row.icon;
              return (
                <div 
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 hover:bg-slate-50/50 transition-colors"
                >
                  {/* Coluna: Processo Antigo */}
                  <div className="p-6 flex items-start gap-3.5 text-slate-600">
                    <div className="mt-0.5 opacity-40 shrink-0">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <div>
                      {/* Label Mobile visível apenas em telas pequenas */}
                      <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Processo Tradicional
                      </span>
                      <span className="text-sm md:text-base leading-relaxed">
                        {row.bad}
                      </span>
                    </div>
                  </div>

                  {/* Coluna: Nova Solução */}
                  <div className="p-6 flex items-start gap-3.5 text-slate-900 bg-emerald-50/30">
                    <div className="mt-0.5 text-emerald-500 shrink-0">
                      <CheckCircle2 size={18} aria-hidden="true" />
                    </div>
                    <div>
                      {/* Label Mobile visível apenas em telas pequenas */}
                      <span className="md:hidden text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1.5">
                        Com AGILIFY
                      </span>
                      <span className="text-sm md:text-base font-medium leading-relaxed">
                        {row.good}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}