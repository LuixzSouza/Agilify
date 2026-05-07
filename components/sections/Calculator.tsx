"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Calculator as CalcIcon } from 'lucide-react';

export default function Calculator() {
  // Valores default alinhados com a realidade de PMEs
  const [invoices, setInvoices] = useState<number | string>(300);
  const [minutes, setMinutes] = useState<number | string>(3);
  const [rate, setRate] = useState<number | string>(35);

  // Conversão segura para cálculo
  const numInvoices = Number(invoices) || 0;
  const numMinutes = Number(minutes) || 0;
  const numRate = Number(rate) || 0;

  const savedHours = (numInvoices * numMinutes) / 60;
  const savings = (savedHours * numRate).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section className="py-24 bg-white border-t border-slate-200/50" id="calculadora">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            <CalcIcon size={12} className="text-blue-600" />
            Simulador de Custos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Descubra o custo oculto da emissão manual.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entenda quanto tempo e dinheiro sua empresa pode economizar automatizando a rotina fiscal e o envio para a contabilidade.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_420px] gap-6 lg:gap-0 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
        >
          
          {/* Lado Esquerdo: Inputs / Controles */}
          <div className="p-6 md:p-10 flex flex-col gap-8 lg:border-r border-slate-200">
            <div className="space-y-8">
              
              {/* Controle 1 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="calc-invoices" className="font-semibold text-slate-800 text-sm md:text-base">
                    Notas emitidas por mês
                  </label>
                  <div className="relative">
                    <input 
                      id="calc-invoices"
                      type="number" 
                      value={invoices} 
                      onChange={(e) => setInvoices(e.target.value)} 
                      className="w-24 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold text-right outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <input 
                  type="range" min="50" max="3000" step="50" 
                  value={numInvoices} 
                  onChange={(e) => setInvoices(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                  aria-hidden="true"
                />
              </div>

              {/* Controle 2 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="calc-minutes" className="font-semibold text-slate-800 text-sm md:text-base">
                    Minutos gastos por nota (envio/busca)
                  </label>
                  <div className="relative">
                    <input 
                      id="calc-minutes"
                      type="number" 
                      value={minutes} 
                      onChange={(e) => setMinutes(e.target.value)} 
                      className="w-20 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold text-right outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium pointer-events-none hidden">min</span>
                  </div>
                </div>
                <input 
                  type="range" min="1" max="15" step="1" 
                  value={numMinutes} 
                  onChange={(e) => setMinutes(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                  aria-hidden="true"
                />
              </div>

              {/* Controle 3 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="calc-rate" className="font-semibold text-slate-800 text-sm md:text-base">
                    Custo médio da hora trabalhada (R$)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">R$</span>
                    <input 
                      id="calc-rate"
                      type="number" 
                      value={rate} 
                      onChange={(e) => setRate(e.target.value)} 
                      className="w-28 pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-semibold text-right outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <input 
                  type="range" min="15" max="150" step="5" 
                  value={numRate} 
                  onChange={(e) => setRate(Number(e.target.value))} 
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" 
                  aria-hidden="true"
                />
              </div>

            </div>
          </div>

          {/* Lado Direito: Resultado Empresarial */}
          <div className="bg-slate-900 p-6 md:p-10 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Decoração super sutil no fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-slate-400 font-semibold uppercase tracking-wider text-xs block mb-4">
                  Estimativa de Economia Mensal
                </span>
                
                {/* Área Viva para Leitores de Tela */}
                <div aria-live="polite" aria-atomic="true">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl text-slate-300 font-medium">R$</span>
                    <span className="text-4xl md:text-[42px] font-black tracking-tight text-white transition-all duration-200">
                      {savings}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-emerald-400 font-semibold text-lg transition-all duration-200">
                      {savedHours.toFixed(1).replace('.0', '')} horas recuperadas
                    </span>
                  </div>
                </div>

                <div className="text-slate-500 text-xs font-mono bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 inline-block">
                  Cálculo base: ({numInvoices} notas × {numMinutes} min) ÷ 60 = Horas<br/>
                  Horas × R$ {numRate}/h = Total
                </div>
              </div>

              <div className="mt-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-medium border border-white/15 w-fit mb-6 text-slate-300">
                  <Zap size={12} className="text-amber-400 fill-amber-400" /> Auto-sync agiliza todo o processo
                </div>

                <a href="#planos" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors group w-fit">
                  Veja os planos e comece a economizar 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}