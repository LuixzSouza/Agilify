"use client";
import { motion } from 'framer-motion';
import { Blocks, Database, Globe, ShoppingCart, FileSpreadsheet, Code2 } from 'lucide-react';

// ==========================================
// 1. DADOS REFINADOS (Copy Corporativo)
// ==========================================
const integrations = [
  { 
    name: "Alterdata", 
    type: "Homologado", 
    icon: Database, 
    desc: "Exporte arquivos contábeis e fiscais prontos para importação direta.",
    highlight: true
  },
  { 
    name: "Domínio Sistemas", 
    type: "Homologado", 
    icon: FileSpreadsheet, 
    desc: "Layout validado para sincronização de XMLs sem necessidade de ajustes.",
    highlight: true
  },
  { 
    name: "SEFAZ Brasil", 
    type: "Homologado", 
    icon: Globe, 
    desc: "Comunicação online com todos os estados para autorização imediata.",
    highlight: true
  },
  { 
    name: "Sistemas Próprios", 
    type: "Beta", 
    icon: Code2, 
    desc: "Permite conectar ERPs e aplicações externas diretamente ao motor fiscal.",
    highlight: false
  },
  { 
    name: "NFS-e (Serviços)", 
    type: "Planejado", 
    icon: Blocks, 
    desc: "Expansão para emissão de notas de serviço em mais de 1000 prefeituras.",
    highlight: false
  },
  { 
    name: "E-commerce", 
    type: "Planejado", 
    icon: ShoppingCart, 
    desc: "Integração futura com plataformas como Nuvemshop, Shopify e Tray.",
    highlight: false
  }
];

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50" aria-labelledby="integrations-title" id="integracoes">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 id="integrations-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Compatível com seu fluxo atual.
          </h2>
          <p className="text-lg text-slate-600">
            Integração homologada com os sistemas mais usados pela contabilidade.
          </p>
        </div>

        {/* Grid Semântico */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white p-5 rounded-lg border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex flex-col h-full cursor-default transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50/70 relative overflow-hidden"
            >
              {/* Indicador de Módulo Principal (Topo) */}
              {item.highlight && (
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" aria-hidden="true" />
              )}

              {/* Cabeçalho do Card */}
              <div className="flex justify-between items-start mb-5 mt-1">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-md flex items-center justify-center text-blue-600 shadow-sm">
                  <item.icon size={20} aria-hidden="true" />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                  item.type === 'Homologado' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100/50' :
                  item.type === 'Beta' ? 'bg-amber-50 text-amber-700 border border-amber-100/50' :
                  'bg-slate-100 text-slate-600 border border-slate-200/50'
                }`}>
                  {item.type}
                </span>
              </div>
              
              {/* Corpo de Texto */}
              <div className="flex flex-col flex-1 justify-start">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
}