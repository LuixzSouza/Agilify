"use client";
import { motion } from 'framer-motion';
import { UserPlus, Building2, Users, Receipt, Headset } from 'lucide-react';

const steps = [
  {
    num: "1",
    icon: UserPlus,
    title: "Crie sua conta",
    desc: "Você começa em menos de 2 minutos, tudo 100% online."
  },
  {
    num: "2",
    icon: Building2,
    title: "Adicione sua empresa",
    desc: "Nosso suporte ajuda com certificado digital e configuração."
  },
  {
    num: "3",
    icon: Users,
    title: "Convide o contador",
    desc: "Ele recebe acesso automaticamente pelo Portal exclusivo."
  },
  {
    num: "4",
    icon: Receipt,
    title: "Pronto, pode emitir",
    desc: "A nota autoriza na SEFAZ e já sincroniza com a contabilidade."
  }
];

export default function HowItWorks() {
  return (
    <section 
      className="py-24 bg-gradient-to-b from-white to-slate-50" 
      aria-labelledby="how-it-works-title" 
      id="como-funciona"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 block">
            Implantação Descomplicada
          </span>
          <h2 id="how-it-works-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Em 5 minutos você está emitindo nota.
          </h2>
        </div>

        {/* Container Principal do Fluxo */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Linha conectora Desktop (Horizontal) */}
          <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 opacity-50 z-0"></div>

          {/* Linha conectora Mobile (Vertical) */}
          <div className="block md:hidden absolute top-8 bottom-8 left-[27px] w-[2px] bg-gradient-to-b from-blue-100 via-blue-400 to-blue-100 opacity-50 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex md:flex-col items-start md:items-center text-left md:text-center group"
                >
                  {/* Número Flutuante */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white font-black text-xl flex items-center justify-center mb-0 md:mb-6 shadow-lg shadow-blue-500/20 border-4 border-white relative z-10 group-hover:scale-105 transition-transform duration-300">
                    {step.num}
                  </div>

                  {/* Card de Conteúdo */}
                  <div className="ml-6 md:ml-0 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm w-full hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 md:mx-auto">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Banner de Segurança Humana (Trust Factor) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <Headset size={24} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="text-emerald-900 font-bold text-base mb-1">Não quer fazer a configuração sozinho?</h4>
            <p className="text-emerald-700 text-sm leading-relaxed">
              Fique tranquilo. Nosso time de especialistas atende via WhatsApp e ajuda você na configuração fiscal e na primeira nota emitida.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}