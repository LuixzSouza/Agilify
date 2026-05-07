"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Lock, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-14 pb-6" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Pre-Footer CTA */}
        <div className="border-b border-slate-200 pb-10 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">Pronto para simplificar sua rotina fiscal?</h3>
            <p className="text-slate-600">Junte-se a empresas e contadores de todo o Brasil.</p>
          </div>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-12 shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          >
            Teste 14 dias grátis
          </Button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 mb-12">
          
          {/* Brand & Security (Ocupa 2 colunas em telas grandes) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 w-fit outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
              <img src={`/logo.png`} alt="Logo AGILIFY" className="w-52 h-auto object-contain" />
            </Link>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mt-2">
              Sistema emissor prático e seguro. Construído para garantir conformidade fiscal e facilitar a rotina da sua empresa e do seu contador.
            </p>

            {/* Micro-Trust Badges */}
            <div className="flex flex-col gap-2 mt-2">
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <ShieldCheck size={14} className="text-emerald-500" aria-hidden="true" /> Homologado e compatível com SEFAZ
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Lock size={14} className="text-emerald-500" aria-hidden="true" /> Backup automático em nuvem segura
              </span>
            </div>
          </div>

          {/* Produto */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Produto</h4>
            <nav className="flex flex-col gap-3" aria-label="Navegação do produto">
              <Link href="#como-funciona" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Como funciona</Link>
              <Link href="#portal" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Portal do Contador</Link>
              <Link href="#integracoes" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Integrações</Link>
              <Link href="#planos" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Planos e Preços</Link>
            </nav>
          </div>

          {/* Empresa & Contato Rápido */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Empresa</h4>
            <nav className="flex flex-col gap-3 mb-2" aria-label="Navegação institucional">
              <Link href="/sobre" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Sobre nós</Link>
              <Link href="/parceiros" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Programa Contadores</Link>
            </nav>
            
            <h4 className="font-bold text-slate-900 mt-2">Suporte</h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+553599218509" className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-fit">
                <MessageCircle size={14} className="text-slate-400" /> (35) 9921-8509
              </a>
              <a href="mailto:contato@agilify.com.br" className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 w-fit">
                <Mail size={14} className="text-slate-400" /> contato@agilify.com.br
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Legal</h4>
            <nav className="flex flex-col gap-3" aria-label="Navegação legal">
              <Link href="/termos" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Termos de Uso</Link>
              <Link href="/privacidade" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Política de Privacidade</Link>
              <Link href="/lgpd" className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors duration-200 w-fit">Conformidade LGPD</Link>
            </nav>
          </div>
        </div>

        {/* Copyright e Assinatura */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium text-slate-500">
          
          <p>© {new Date().getFullYear()} AGILIFY Tecnologia. Todos os direitos reservados.</p>

          {/* Lado Direito: Créditos + Bandeira */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            
            {/* Assinatura Luiz Souza */}
            <Link 
              href="https://www.luixzsouza.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span className="text-slate-400 font-normal">Desenvolvimento e Design:</span>
              <motion.span 
                initial="initial"
                className="relative font-mono font-bold bg-slate-100 text-slate-700 px-2 py-1 rounded border border-slate-200 flex items-center gap-1 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#eff6ff", // blue-50
                  borderColor: "#3b82f6",     // blue-500
                  color: "#2563eb",           // blue-600
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Efeito de brilho (shimmer) que passa pelo nome no hover */}
                <motion.div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full"
                  variants={{
                    initial: { x: '-100%' },
                    hover: { x: ['100%', '-100%'] }
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                
                &lt;Luiz Souza /&gt;
              </motion.span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}