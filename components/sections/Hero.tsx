"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, Monitor, CheckCircle, XCircle, 
  Search, Calendar, ChevronDown, AlertCircle, 
  ShieldCheck, HelpCircle, MessageCircle, Star, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// ==========================================
// 1. DADOS E TIPOS (HeroVisual)
// ==========================================
type InvoiceStatus = 'confirmada' | 'pendente' | 'desconhecida';

interface Invoice {
  id: string;
  date: string;
  num: string;
  key: string;
  cnpj: string;
  name: string;
  total: number;
  status: InvoiceStatus;
}

const mockInvoices: Invoice[] = [
  { id: 'nf-1148', date: '16/04/2026', num: '001148', key: '31260457603822000184550010000011481001148101', cnpj: '57.603.822/0001-84', name: 'COMERCIAL TRIGO MINAS LTDA', total: 1360.23, status: 'confirmada' },
  { id: 'nf-1149', date: '16/04/2026', num: '001149', key: '31260457603823000199550010000011491001149102', cnpj: '12.345.678/0001-99', name: 'DISTRIBUIDORA VALE LTDA', total: 65.00, status: 'pendente' },
  { id: 'nf-1221', date: '16/04/2026', num: '001221', key: '31260457603824000188550010000012211001221103', cnpj: '98.765.432/0001-88', name: 'SUPERMERCADO CENTRAL', total: 110.97, status: 'confirmada' },
  { id: 'nf-1519', date: '16/04/2026', num: '001519', key: '31260457603825000177550010000015191001519104', cnpj: '45.678.912/0001-77', name: 'DIST DE BEB CAMBUI LTDA', total: 19.24, status: 'desconhecida' },
];

const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
const truncateStr = (str: string, max: number) => str.length > max ? `${str.substring(0, max)}...` : str;

// ==========================================
// 2. COMPONENTE PRINCIPAL: Hero
// ==========================================
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white">
      
      {/* Background Visuals (Grid + Radial Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_550px] xl:grid-cols-[1fr_650px] gap-12 lg:gap-8 items-center">
          
          {/* COLUNA DE TEXTO */}
          <motion.div initial={{ opacity: 1, y: 0 }} className="flex flex-col items-start gap-6 relative">
            
            {/* Glassmorphism Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-200 text-blue-700 text-sm font-semibold shadow-sm">
              <Zap size={14} className="text-blue-600 fill-blue-600" />
              Novo · Portal do Contador nativo
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 leading-[1.05] tracking-tight max-w-[600px]">
              Pare de perder 2 horas por dia <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 italic px-1">enviando XML</span> pro contador.
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-[540px]">
              Emita NFC-e e NF-e e deixe o resto com a gente. Suas notas sincronizam direto com a contabilidade em 15 minutos. <strong className="text-slate-900 font-semibold">Sem planilhas, sem retrabalho.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col w-full sm:w-auto gap-3 mt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-base shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
                  Começar 14 dias grátis
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-emerald-500 text-emerald-700 bg-emerald-50/50 hover:bg-emerald-100 gap-2 transition-all">
                  <MessageCircle size={20} className="text-emerald-600" />
                  Chamar no WhatsApp
                </Button>
              </div>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 ml-1">
                <ShieldCheck size={14} className="text-emerald-500" /> Não exigimos cartão de crédito no teste.
              </span>
            </div>

            {/* Social Proof */}
            <div className="mt-6 flex items-center gap-4 pt-6 border-t border-slate-200/60 w-full max-w-[500px]">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden flex items-center justify-center shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={14} className="fill-amber-400" /><Star size={14} className="fill-amber-400" /><Star size={14} className="fill-amber-400" /><Star size={14} className="fill-amber-400" /><Star size={14} className="fill-amber-400" />
                </div>
                <span className="text-sm font-bold text-slate-800">4.9/5 <span className="font-normal text-slate-500">por +1.200 empresas</span></span>
              </div>
            </div>
          </motion.div>

          {/* COLUNA VISUAL (Mockup) */}
          <motion.div initial={{ opacity: 1 }} className="relative lg:ml-auto w-full flex justify-center mt-12 lg:mt-0">
            {/* Glow cinematográfico atrás do mockup */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[24px] blur-2xl opacity-20 hidden md:block"></div>
            
            <HeroVisual />

            {/* Floating Notification Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-8 bg-white border border-slate-200 p-3 rounded-xl shadow-xl flex items-center gap-3 z-20 hidden md:flex"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Lote Sincronizado</p>
                <p className="text-xs text-slate-500">O contador recebeu 45 notas.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. SUB-COMPONENTE: HeroVisual (Avançado)
// ==========================================
function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const activeInvoice = mockInvoices[activeIndex];
  const totalGeral = useMemo(() => mockInvoices.reduce((acc, curr) => acc + curr.total, 0), []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % mockInvoices.length), 3000);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const handleRowClick = useCallback((idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
  }, []);

  return (
    <div 
      className="font-mono text-[11px] bg-white border border-slate-300 rounded-xl shadow-2xl overflow-hidden w-full max-w-[700px] select-none flex flex-col h-[440px] ring-1 ring-slate-900/5 transition-all relative z-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-slate-800 text-slate-200 px-3 py-1.5 flex justify-between items-center border-b border-slate-900 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-blue-500 rounded-sm flex items-center justify-center shadow-inner"><FileText size={8} className="text-white" /></div>
          <span className="font-bold text-xs tracking-wide">AGILIFY — Loja Paraíso</span>
        </div>
        <div className="flex gap-4 text-slate-400"><span>−</span><span>□</span><span className="text-red-400">×</span></div>
      </div>

      <div className="bg-slate-50 border-b border-slate-200">
        <div className="flex gap-4 px-3 py-1.5 text-slate-500 text-[10px] uppercase font-bold tracking-wider">
          <span className="hover:text-slate-900">Sistema</span><span className="hover:text-slate-900">Estoque</span><span className="text-blue-600 border-b border-blue-600 pb-0.5">Fiscal</span>
        </div>
        <div className="flex gap-6 px-4 py-2 items-center">
          <div className="flex flex-col items-center gap-1 opacity-70"><div className="w-7 h-7 bg-orange-500 rounded flex items-center justify-center text-white"><Monitor size={14}/></div><span className="text-slate-600 font-bold text-[9px]">PDV</span></div>
          <div className="flex flex-col items-center gap-1 bg-blue-100 p-1.5 rounded border border-blue-200"><div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white"><FileText size={14}/></div><span className="text-blue-700 font-bold text-[9px]">NF-e</span></div>
          <div className="flex flex-col items-center gap-1 opacity-70"><div className="w-7 h-7 bg-emerald-500 rounded flex items-center justify-center text-white"><CheckCircle size={14}/></div><span className="text-slate-600 font-bold text-[9px]">PAGAR</span></div>
        </div>
      </div>

      <div className="bg-white px-3 py-2 border-b border-slate-200 flex justify-between items-center gap-2 shadow-sm z-10 relative">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded text-slate-600"><Calendar size={12} className="text-slate-400" /><span>10/04</span><span className="text-slate-300">até</span><span>16/04</span></div>
          <button className="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-bold flex items-center gap-1">Filtrar <ChevronDown size={12} /></button>
        </div>
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded w-[160px] hidden sm:flex"><Search size={12} className="text-slate-400" /><span className="text-slate-400">Buscar...</span></div>
      </div>
      
      <div className="flex-1 bg-white flex flex-col relative">
        <div className="min-w-[650px] grid grid-cols-[30px_70px_50px_minmax(100px,1fr)_100px_minmax(120px,1.5fr)_70px] gap-2 px-3 py-2 bg-slate-100 border-b border-slate-200 font-bold text-slate-500 uppercase text-[9px] sticky top-0">
          <span className="text-center">St</span><span>Data</span><span>Nº</span><span>Chave</span><span>CNPJ</span><span>Fornecedor</span><span className="text-right">Valor</span>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-auto custom-scrollbar">
          <div className="min-w-[650px]">
            {mockInvoices.map((row, idx) => (
              <TableRow key={row.id} row={row} isActive={idx === activeIndex} onClick={() => handleRowClick(idx)} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-100 border-t border-slate-300">
        <div className="px-3 py-2 flex justify-between items-center">
          <div className="flex gap-2">
            <button className="bg-white border border-slate-300 px-3 py-1.5 rounded shadow-sm text-slate-700 font-bold">F2 Detalhes</button>
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded shadow-sm font-bold flex items-center gap-1.5"><CheckCircle size={12}/> F4 Confirmar</button>
          </div>
          <div className="text-right hidden sm:block">
            <div className="font-bold text-slate-800 text-[10px]">NF SELECIONADA: <span className="text-blue-700">{formatCurrency(activeInvoice?.total || 0)}</span></div>
            <div className="text-slate-500 text-[9px] mt-0.5">TOTAL: {formatCurrency(totalGeral)}</div>
          </div>
        </div>
        <div className="bg-blue-700 text-white px-3 py-1 flex justify-between text-[9px] font-bold tracking-wide">
          <div className="flex gap-4"><span>RETAGUARDA</span><span className="text-blue-300">|</span><span>ADMIN</span></div>
          <div className="flex items-center gap-2"><span className="flex h-2 w-2 relative"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-emerald-500"></span></span> ONLINE</div>
        </div>
      </div>
    </div>
  );
}

const STATUS_MAP = { 'confirmada': { icon: ShieldCheck, color: 'text-emerald-500' }, 'pendente': { icon: AlertCircle, color: 'text-amber-500' }, 'desconhecida': { icon: HelpCircle, color: 'text-rose-500' } };

const TableRow = React.memo(({ row, isActive, onClick }: { row: Invoice, isActive: boolean, onClick: () => void }) => {
  const { icon: StatusIcon, color: statusColor } = STATUS_MAP[row.status];
  return (
    <div onClick={onClick} className={`min-w-[650px] grid grid-cols-[30px_70px_50px_minmax(100px,1fr)_100px_minmax(120px,1.5fr)_70px] gap-2 px-3 py-2 border-b border-slate-100 cursor-pointer items-center transition-all even:bg-slate-50/50 hover:bg-slate-50 relative ${isActive ? 'bg-blue-50/80' : 'text-slate-600'}`}>
      {isActive && <motion.div layoutId="activeRowBorder" className="absolute left-0 w-1 h-full bg-blue-500 rounded-r shadow-[0_0_8px_rgba(59,130,246,0.5)]" />}
      <div className="flex justify-center"><StatusIcon size={14} className={statusColor} /></div>
      <span className={isActive ? 'text-blue-900 font-medium' : ''}>{row.date}</span>
      <span className={isActive ? 'text-blue-900 font-medium' : ''}>{row.num}</span>
      <span className="text-slate-500">{truncateStr(row.key, 16)}</span>
      <span className={isActive ? 'text-blue-900' : ''}>{row.cnpj}</span>
      <span className={`truncate ${isActive ? 'text-blue-900 font-bold' : ''}`}>{row.name}</span>
      <span className={`text-right ${isActive ? 'text-blue-700 font-bold' : ''}`}>{formatCurrency(row.total)}</span>
    </div>
  );
}, (prev, next) => prev.isActive === next.isActive && prev.row.id === next.row.id);
TableRow.displayName = 'TableRow';