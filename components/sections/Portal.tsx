"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle, Download, FileJson, Building2, 
  ShieldCheck, Filter, AlertCircle, XCircle, Wifi
} from 'lucide-react';

// ==========================================
// 1. DADOS MEMOIZADOS (Fora do componente)
// ==========================================
const mockClients = ["João Contábil ME", "Padaria Pão de Mel", "Comercial Silva"];

const mockPortalData = [
  { id: 'n1', date: '16/04/2026', num: '001041', status: 'OK', Icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', client: 'CONSUMIDOR FINAL', val: '23,10' },
  { id: 'n2', date: '16/04/2026', num: '001042', status: 'OK', Icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', client: 'CONSUMIDOR FINAL', val: '154,00' },
  { id: 'n3', date: '16/04/2026', num: '001043', status: 'PENDENTE', Icon: AlertCircle, color: 'text-amber-600', bg: 'bg-amber-50', client: 'CARLOS SILVA', val: '89,90' },
  { id: 'n4', date: '16/04/2026', num: '001044', status: 'OK', Icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', client: 'CONSUMIDOR FINAL', val: '12,50' },
  { id: 'n5', date: '16/04/2026', num: '001045', status: 'REJEITADA', Icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50', client: 'MARCOS ANTONIO', val: '450,00' },
];

export default function Portal() {
  const [clientIndex, setClientIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Rotação de Cliente (Simulando dropdown)
  useEffect(() => {
    const interval = setInterval(() => {
      setClientIndex((prev) => (prev + 1) % mockClients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Rotação da Tabela com Proteção de Performance (VisibilityState)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleVisibilityChange = () => {
      if (document.hidden) setIsPaused(true);
      else setIsPaused(false);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockPortalData.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPaused, prefersReducedMotion]);

  const handleRowClick = useCallback((idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
  }, []);

  return (
    <section className="py-24 bg-slate-900" id="portal">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Textos Sóbrios */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3 block">
                Portal Integrado
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                A visão do seu contador.
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Acesso direto e organizado a todas as notas dos clientes. Sincronizado, categorizado e pronto para o fechamento.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Acesso consolidado", desc: "Toda NFC-e e NF-e listada sem necessidade de envio manual." },
                { title: "Gestão multi-empresa", desc: "Alterne entre clientes rapidamente na mesma interface." },
                { title: "Exportação em lote", desc: "Layouts homologados para Alterdata e Domínio Sistemas." },
                { title: "Status em tempo real", desc: "Visibilidade imediata de notas pendentes ou rejeitadas." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-blue-500/20 text-blue-400 rounded-lg p-1.5 h-fit border border-blue-500/30">
                    <CheckCircle size={16} strokeWidth={2.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100">{feature.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Mockup do Portal (Design ERP Sólido) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="font-sans text-[11px] bg-slate-50 border border-slate-300 rounded-xl shadow-xl overflow-hidden w-full select-none flex flex-col h-[460px] relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Window Title Bar */}
            <div className="bg-slate-800 text-slate-200 px-4 py-2 flex justify-between items-center border-b border-slate-900">
              <span className="font-semibold tracking-wide">AGILIFY — Workspace Contábil</span>
              <div className="flex gap-3 text-slate-400 cursor-default">
                <span>−</span><span>□</span><span>×</span>
              </div>
            </div>

            {/* Application Toolbar */}
            <div className="flex gap-4 px-4 py-2 bg-white border-b border-slate-200 items-center cursor-default">
              <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors">
                <Building2 size={16} strokeWidth={1.5}/>
                <span className="font-medium text-[9px] uppercase">Empresas</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-700 bg-blue-50 border border-blue-100 p-1.5 rounded shadow-sm">
                <FileJson size={16} strokeWidth={2}/>
                <span className="font-bold text-[9px] uppercase">Painel NFC-e</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors">
                <FileJson size={16} strokeWidth={1.5}/>
                <span className="font-medium text-[9px] uppercase">Painel NF-e</span>
              </div>
              <div className="w-px h-8 bg-slate-200 mx-1"></div>
              <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors">
                <Download size={16} strokeWidth={1.5}/>
                <span className="font-medium text-[9px] uppercase">Exportar</span>
              </div>
            </div>

            {/* Filters & Status (High Density) */}
            <div className="bg-white px-4 py-2 border-b border-slate-200 flex justify-between items-center shadow-sm z-10 relative">
              <div className="flex items-center gap-3">
                <select 
                  className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-800 font-semibold outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500" 
                  value={mockClients[clientIndex]}
                  onChange={() => {}}
                  aria-label="Selecionar cliente"
                >
                  {mockClients.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <div className="h-4 w-px bg-slate-300"></div>
                <span className="text-slate-500 font-medium">Período: 04/2026</span>
                <button 
                  className="bg-white border border-slate-200 p-1 rounded text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Filtros avançados"
                >
                  <Filter size={14}/>
                </button>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[10px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Sincronizado
                </div>
                <span className="text-slate-400 text-[9px]">Última vez: 14:32</span>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-3 divide-x divide-slate-200 border-b border-slate-200 bg-slate-50/50">
              <div className="px-4 py-1.5 flex flex-col"><span className="text-slate-500 text-[9px] uppercase tracking-wider font-semibold">Emitidas (Mês)</span><span className="font-bold text-slate-800 text-xs font-mono">342</span></div>
              <div className="px-4 py-1.5 flex flex-col"><span className="text-slate-500 text-[9px] uppercase tracking-wider font-semibold">Pendências</span><span className="font-bold text-amber-600 text-xs font-mono">1</span></div>
              <div className="px-4 py-1.5 flex flex-col"><span className="text-slate-500 text-[9px] uppercase tracking-wider font-semibold">Volume (R$)</span><span className="font-bold text-slate-800 text-xs font-mono">18.450,00</span></div>
            </div>

            {/* Data Table */}
            <div className="flex-1 bg-white overflow-hidden flex flex-col">
              {/* Table Header */}
              <div className="grid grid-cols-[70px_60px_100px_flex-1_70px_60px] gap-2 px-4 py-1.5 bg-slate-100 border-b border-slate-200 font-bold text-slate-500 uppercase text-[9px]">
                <span>Data</span><span>Nº</span><span>Status Sefaz</span><span>Destinatário</span><span className="text-right">Valor</span><span className="text-center">XML</span>
              </div>
              
              {/* Table Body */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {mockPortalData.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div 
                      key={item.id} 
                      role="button"
                      tabIndex={0}
                      aria-selected={isActive}
                      onKeyDown={(e) => e.key === 'Enter' && handleRowClick(idx)}
                      onClick={() => handleRowClick(idx)}
                      className={`grid grid-cols-[70px_60px_100px_flex-1_70px_60px] gap-2 px-4 py-1.5 border-b border-slate-100 items-center cursor-pointer transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 relative ${
                        isActive ? 'bg-blue-50/80 text-blue-900' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {/* Active Row Indicator (Sólido, sem glow) */}
                      {isActive && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-600"></div>}
                      
                      <span className="font-mono">{item.date}</span>
                      <span className="font-mono font-medium">{item.num}</span>
                      
                      {/* Status Textual + Icon */}
                      <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide w-fit ${item.color} ${item.bg}`}>
                        <item.Icon size={10} strokeWidth={2.5} /> {item.status}
                      </span>
                      
                      <span className={`truncate ${isActive ? 'font-semibold' : ''}`}>{item.client}</span>
                      <span className="text-right font-mono">{item.val}</span>
                      
                      <div className="flex justify-center">
                        <button 
                          className="text-blue-600 font-semibold hover:underline outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
                          aria-label={`Baixar XML da nota ${item.num}`}
                        >
                          BAIXAR
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-slate-100 px-4 py-2.5 border-t border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-slate-500 font-medium">5 registros exibidos</span>
                <div className="h-3 w-px bg-slate-300"></div>
                <span className="text-slate-500 flex items-center gap-1"><Wifi size={10}/> Ambiente de Produção</span>
              </div>
              <div className="flex gap-2">
                <button className="bg-white border border-slate-300 px-3 py-1.5 rounded shadow-sm text-slate-700 font-semibold hover:bg-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 outline-none">
                  Lote Mensal (ZIP)
                </button>
                <button className="bg-blue-600 text-white border border-blue-700 px-3 py-1.5 rounded shadow-sm font-semibold hover:bg-blue-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 outline-none">
                  Exportar Sistema
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}