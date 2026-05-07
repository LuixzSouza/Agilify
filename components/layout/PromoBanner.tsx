"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <div 
      className="w-full bg-slate-900 border-b border-slate-800 py-2.5 px-4 text-center text-sm text-slate-300 flex flex-wrap items-center justify-center gap-2 md:gap-3 relative z-40 transition-colors hover:bg-slate-800/80 group"
      role="status" 
      aria-live="polite"
    >
      {/* Link invisível que torna a barra inteira clicável */}
      <Link href="#planos" className="absolute inset-0 z-10" aria-label="Aproveitar oferta de lançamento nos planos" />
      
      {/* Indicador de Status (Online/Ativo) */}
      <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-reduce:hidden"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      
      {/* Copy Focado em Valor */}
      <span className="font-semibold text-slate-100">Oferta de lançamento:</span>
      
      <span>
        Plano Profissional por <strong className="text-white font-bold tracking-tight">R$ 199/mês</strong> 
        <span className="line-through text-slate-500 font-medium text-xs ml-1.5" aria-label="Preço original: 249 reais">(de R$ 249)</span>
      </span>
      
      {/* Separador e Benefício Extra (Oculto no Mobile para não quebrar linhas) */}
      <span className="hidden md:inline text-slate-600 px-1" aria-hidden="true">•</span>
      
      <span className="hidden md:inline font-medium">
        Suporte humano + Portal do Contador
      </span>

      {/* Micro-interação no Hover */}
      <ArrowRight 
        size={14} 
        className="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all ml-1 shrink-0" 
        aria-hidden="true" 
      />
    </div>
  );
}