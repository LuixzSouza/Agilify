"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, Monitor, CheckCircle, XCircle, 
  Search, Calendar, ChevronDown, AlertCircle, 
  ShieldCheck, HelpCircle 
} from 'lucide-react';

// ==========================================
// 1. ARQUITETURA & TIPAGEM (Adeus, `any`)
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
  { id: 'nf-1059', date: '07/04/2026', num: '001059', key: '31260457603826000184550010000010591001059105', cnpj: '57.603.822/0001-84', name: 'COMERCIAL TRIGO MINAS LTDA', total: 168.02, status: 'confirmada' },
];

const formatCurrency = (value: number) => 
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

const truncateStr = (str: string, max: number) => 
  str.length > max ? `${str.substring(0, max)}...` : str;

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
export default function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const activeInvoice = mockInvoices[activeIndex];
  const totalGeral = useMemo(() => mockInvoices.reduce((acc, curr) => acc + curr.total, 0), []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockInvoices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  // Função memoizada para não causar re-render nas linhas
  const handleRowClick = useCallback((idx: number) => {
    setActiveIndex(idx);
    setIsPaused(true);
  }, []);

  return (
    <div 
      className="font-mono text-[11px] bg-white border border-slate-300 rounded-xl shadow-2xl overflow-hidden w-full max-w-[700px] select-none flex flex-col h-[460px] ring-1 ring-slate-900/5 transition-all relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="application"
      aria-label="Sistema AGILIFY"
    >
      {/* Noise Effect Sutil (Textura de monitor antigo/ERP) */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50"></div>

      <SystemHeader />
      <SystemToolbar />
      <SystemFilterBar />
      
      <div className="flex-1 bg-white flex flex-col relative">
        <TableHeader />
        <div className="flex-1 overflow-y-auto overflow-x-auto custom-scrollbar" role="grid" aria-readonly="true">
          <div className="min-w-[700px]">
            {mockInvoices.map((row, idx) => (
              <TableRow 
                key={row.id} 
                row={row} 
                isActive={idx === activeIndex} 
                onClick={() => handleRowClick(idx)} 
              />
            ))}
          </div>
        </div>
      </div>

      <SystemFooter activeInvoice={activeInvoice} totalGeral={totalGeral} />
    </div>
  );
}

// ==========================================
// 3. SUBCOMPONENTES DE UI
// ==========================================

function SystemHeader() {
  return (
    <div className="bg-slate-800 text-slate-200 px-3 py-1.5 flex justify-between items-center border-b border-slate-900 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-3.5 h-3.5 bg-blue-500 rounded-sm flex items-center justify-center shadow-inner">
          <FileText size={8} className="text-white" />
        </div>
        <span className="font-bold text-xs tracking-wide">AGILIFY — Loja Paraíso da Empada</span>
      </div>
      <div className="flex gap-4 text-slate-400">
        <span className="cursor-pointer hover:text-white">−</span>
        <span className="cursor-pointer hover:text-white">□</span>
        <span className="cursor-pointer hover:text-red-400">×</span>
      </div>
    </div>
  );
}

function SystemToolbar() {
  return (
    <div className="bg-slate-50 border-b border-slate-200">
      <div className="flex gap-4 px-3 py-1.5 text-slate-500 text-[10px] uppercase font-bold tracking-wider">
        <span className="hover:text-slate-900 cursor-pointer">Sistema</span>
        <span className="hover:text-slate-900 cursor-pointer">Estoque</span>
        <span className="text-blue-600 border-b border-blue-600 pb-0.5">Fiscal</span>
      </div>
      <div className="flex gap-6 px-4 py-2 items-center">
        <ToolbarIcon icon={Monitor} label="PDV" color="bg-orange-500" />
        <div className="flex flex-col items-center gap-1 cursor-pointer bg-blue-100 p-1.5 rounded border border-blue-200 shadow-inner">
          <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white shadow-sm"><FileText size={14}/></div>
          <span className="text-blue-700 font-bold text-[9px] uppercase">NF-e</span>
        </div>
        <ToolbarIcon icon={CheckCircle} label="Pagar" color="bg-emerald-500" />
      </div>
    </div>
  );
}

function ToolbarIcon({ icon: Icon, label, color }: { icon: React.ElementType, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
      <div className={`w-7 h-7 ${color} rounded flex items-center justify-center text-white shadow-sm`}><Icon size={14}/></div>
      <span className="text-slate-600 font-bold text-[9px] uppercase">{label}</span>
    </div>
  );
}

function SystemFilterBar() {
  return (
    <div className="bg-white px-3 py-2 border-b border-slate-200 flex flex-wrap justify-between items-center gap-2 shadow-sm z-10 relative">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded text-slate-600 shadow-inner">
          <Calendar size={12} className="text-slate-400" />
          <span>10/04/26</span><span className="text-slate-300">até</span><span>16/04/26</span>
        </div>
        <button className="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-slate-700 font-bold hover:bg-slate-200 flex items-center gap-1 shadow-sm">
          Filtrar <ChevronDown size={12} />
        </button>
      </div>
      <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-1 rounded w-[200px] shadow-inner">
        <Search size={12} className="text-slate-400" />
        <input type="text" placeholder="Buscar..." className="bg-transparent outline-none w-full text-slate-700 placeholder:text-slate-400" disabled />
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="min-w-[700px] grid grid-cols-[30px_75px_55px_minmax(120px,1.5fr)_100px_minmax(150px,2fr)_80px] gap-2 px-3 py-2 bg-slate-100 border-b border-slate-200 font-bold text-slate-500 uppercase text-[9px] sticky top-0 shadow-sm" role="row">
      <span role="columnheader" className="text-center">St</span>
      <span role="columnheader">Data</span>
      <span role="columnheader">Nº</span>
      <span role="columnheader">Chave (Parcial)</span>
      <span role="columnheader">CNPJ</span>
      <span role="columnheader">Fornecedor</span>
      <span role="columnheader" className="text-right">Valor (R$)</span>
    </div>
  );
}

// ==========================================
// 4. PERFORMANCE (React.memo + Status Map)
// ==========================================
const STATUS_MAP = {
  'confirmada': { icon: ShieldCheck, color: 'text-emerald-500' },
  'pendente': { icon: AlertCircle, color: 'text-amber-500' },
  'desconhecida': { icon: HelpCircle, color: 'text-rose-500' }
};

const TableRow = React.memo(({ row, isActive, onClick }: { row: Invoice, isActive: boolean, onClick: () => void }) => {
  const { icon: StatusIcon, color: statusColor } = STATUS_MAP[row.status];

  return (
    <div 
      role="row"
      aria-selected={isActive}
      onClick={onClick}
      className={`min-w-[700px] grid grid-cols-[30px_75px_55px_minmax(120px,1.5fr)_100px_minmax(150px,2fr)_80px] gap-2 px-3 py-2 border-b border-slate-100 cursor-pointer items-center transition-all outline-none even:bg-slate-50/50 hover:bg-slate-50 ${
        isActive ? 'bg-blue-50/80 shadow-[inset_0_0_8px_rgba(59,130,246,0.1)]' : 'text-slate-600'
      }`}
    >
      {isActive && <motion.div layoutId="activeRowBorder" className="absolute left-0 w-1 h-full bg-blue-500 rounded-r shadow-[0_0_8px_rgba(59,130,246,0.5)]" />}
      
      <div role="gridcell" className="flex justify-center"><StatusIcon size={14} className={statusColor} /></div>
      <span role="gridcell" className={isActive ? 'text-blue-900 font-medium' : ''}>{row.date}</span>
      <span role="gridcell" className={isActive ? 'text-blue-900 font-medium' : ''}>{row.num}</span>
      <span role="gridcell" className="text-slate-500">{truncateStr(row.key, 24)}</span>
      <span role="gridcell" className={isActive ? 'text-blue-900' : ''}>{row.cnpj}</span>
      <span role="gridcell" className={`truncate ${isActive ? 'text-blue-900 font-bold' : ''}`}>{row.name}</span>
      <span role="gridcell" className={`text-right ${isActive ? 'text-blue-700 font-bold' : ''}`}>{formatCurrency(row.total)}</span>
    </div>
  );
}, (prev, next) => prev.isActive === next.isActive && prev.row.id === next.row.id);
TableRow.displayName = 'TableRow';

function SystemFooter({ activeInvoice, totalGeral }: { activeInvoice: Invoice, totalGeral: number }) {
  return (
    <div className="bg-slate-100 border-t border-slate-300">
      <div className="px-3 py-2 flex justify-between items-center">
        <div className="flex gap-2">
          <button className="bg-white border border-slate-300 px-3 py-1.5 rounded shadow-sm text-slate-700 font-bold hover:bg-slate-50">F2 Consulta</button>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded shadow-sm font-bold flex items-center gap-1.5"><CheckCircle size={12}/> F4 Confirmar</button>
        </div>
        <div className="text-right">
          <div className="font-bold text-slate-800 text-[10px]">NF SELECIONADA: <span className="text-blue-700">{formatCurrency(activeInvoice?.total || 0)}</span></div>
          <div className="text-slate-500 text-[9px] mt-0.5">TOTAL PERÍODO: {formatCurrency(totalGeral)}</div>
        </div>
      </div>
      <div className="bg-blue-700 text-white px-3 py-1 flex justify-between text-[9px] font-bold tracking-wide shadow-inner">
        <div className="flex gap-4"><span>SISTEMA RETAGUARDA</span><span className="text-blue-300">|</span><span>USUÁRIO: ADMINISTRADOR</span></div>
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-emerald-500"></span></span>
          ONLINE · V 2.1.4
        </div>
      </div>
    </div>
  );
}