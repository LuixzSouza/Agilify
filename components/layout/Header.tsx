"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LeadModal from '../sections/LeadModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estados para o Modal de Captura
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tag, setTag] = useState("[Lead: Header]");

  const handleOpenModal = (source: string) => {
    setTag(source);
    setIsModalOpen(true);
    setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        role="banner"
        className={`sticky top-0 z-50 w-full transition-shadow duration-300 bg-white/95 backdrop-blur-sm border-b border-slate-200 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 py-3 flex items-center justify-between">
            
          {/* Logo */}
          <Link href="/" className="outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md">
            <img src="/logo.png" alt="Logo Agilify" className="w-40 md:w-52 h-auto object-contain" />
          </Link>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <Link href="#como-funciona" className="hover:text-blue-600 transition-colors">Como funciona</Link>
            <Link href="#portal" className="hover:text-blue-600 transition-colors">Portal do Contador</Link>
            <Link href="#planos" className="hover:text-blue-600 transition-colors">Planos</Link>
            <Link href="#faq" className="hover:text-blue-600 transition-colors">Dúvidas</Link>
            <Link href="#contato" className="hover:text-blue-600 transition-colors">Contato</Link>
          </nav>

          {/* Ações Desktop */}
          <div className="flex items-center gap-3 md:gap-4">
            <Button 
              variant="outline" 
              className="hidden sm:flex border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold h-10 px-5"
              // Aqui você pode decidir se 'Entrar' vai para o sistema ou abre modal
              // Se for capturar lead de quem tenta entrar:
              onClick={() => handleOpenModal("[Lead: Header_Entrar]")}
            >
              Entrar
            </Button>
            
            <Button 
              onClick={() => handleOpenModal("[Lead: Header_CTA_Principal]")}
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-bold h-10 px-5 transition-colors"
            >
              Teste 14 dias grátis
            </Button>
            
            {/* Toggle Menu Mobile */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-slate-600"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-6 px-6 flex flex-col gap-5 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
              <Link href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)}>Como funciona</Link>
              <Link href="#portal" onClick={() => setIsMobileMenuOpen(false)}>Portal do Contador</Link>
              <Link href="#planos" onClick={() => setIsMobileMenuOpen(false)}>Planos</Link>
              <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)}>Dúvidas</Link>
              <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
            </nav>
            
            <div className="h-px bg-slate-100 w-full"></div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={() => handleOpenModal("[Lead: Header_Mobile_Entrar]")} 
                variant="outline" 
                className="w-full justify-center border-slate-300 text-slate-700 h-11 font-semibold"
              >
                Entrar no Sistema
              </Button>
              <Button 
                onClick={() => handleOpenModal("[Lead: Header_Mobile_CTA]")} 
                className="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white h-11 font-bold shadow-sm"
              >
                Teste 14 dias grátis
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Modal de Captura (Injetado no final do fragmento) */}
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        sourceTag={tag} 
      />
    </>
  );
}