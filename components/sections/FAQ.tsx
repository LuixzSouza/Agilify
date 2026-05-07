"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ==========================================
// 1. DADOS (Copy focado em quebra de objeções e ordem de ansiedade)
// ==========================================
const faqs = [
  { 
    q: "Preciso instalar alguma coisa no computador?", 
    a: "Não. A AGILIFY roda 100% no navegador. Você pode acessar de qualquer computador com internet, sem precisar baixar instaladores pesados." 
  },
  { 
    q: "Preciso de certificado digital?", 
    a: "Sim. Para emitir notas fiscais (NFC-e e NF-e) é necessário um certificado digital válido. Se você ainda não tem ou não sabe configurar, nosso suporte ajuda você." 
  },
  { 
    q: "Preciso entender de informática para usar?", 
    a: "Não. O sistema foi desenhado para ser extremamente simples. Se você sabe usar o WhatsApp ou o navegador, conseguirá emitir suas notas." 
  },
  { 
    q: "Vocês ajudam na implantação inicial?", 
    a: "Sim! Nossa equipe auxilia na configuração do certificado digital, no cadastro da sua empresa e na emissão das suas primeiras notas, sem custo adicional." 
  },
  { 
    q: "Tem teste grátis?", 
    a: "Sim, oferecemos 14 dias completos para você testar a emissão e o painel, sem precisar cadastrar cartão de crédito." 
  },
  { 
    q: "Funciona em mobile (celular)?", 
    a: "Sim, o painel funciona no celular e no tablet. É muito útil para consultas rápidas ou para emissões ágeis em vendas de balcão." 
  },
  { 
    q: "Como o meu contador recebe os arquivos?", 
    a: "Toda nota fiscal emitida pela sua empresa é sincronizada com o Portal do Contador automaticamente. Ele acessa com o login dele e baixa quando quiser, sem precisar cobrar você." 
  },
  { 
    q: "Quais sistemas contábeis suportam a exportação?", 
    a: "Temos integração homologada para exportação em lote diretamente para Alterdata e Domínio Sistemas." 
  },
  { 
    q: "E se eu passar do limite de notas do plano Essencial?", 
    a: "Nós avisamos você antes do limite estourar. Suas emissões não são bloqueadas na hora, e você pode fazer o upgrade de plano com apenas 1 clique no painel." 
  },
  { 
    q: "Como funciona o cancelamento?", 
    a: "Pode ser feito direto pelo painel financeiro, sem burocracia, taxas ocultas ou multas de fidelidade. Seus arquivos XML permanecem armazenados com segurança para consulta futura." 
  }
];

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
export default function FAQ() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/50" id="faq" aria-labelledby="faq-title">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Perguntas comuns antes de começar.
          </h2>
          <p className="text-lg text-slate-600">
            Sem burocracia, sem instalação e sem complicação.
          </p>
        </div>

        {/* Lista de FAQs (Acordeões Isolados) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="bg-white border border-slate-200 rounded-lg shadow-sm px-5 data-[state=open]:border-blue-200 data-[state=open]:ring-1 data-[state=open]:ring-blue-100 transition-all outline-none"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-slate-800 hover:no-underline py-3.5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-sm">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA de Fechamento */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 text-center bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col items-center gap-4"
        >
          <h3 className="text-lg font-bold text-slate-900">
            Sua dúvida não está aqui?
          </h3>
          <p className="text-slate-600 text-sm max-w-md mb-2">
            Nossa equipe de especialistas está pronta para analisar o seu cenário e mostrar como a AGILIFY vai resolver a sua rotina fiscal.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-6 text-base border-emerald-500 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-500 outline-none"
          >
            <MessageCircle size={20} className="text-emerald-600" />
            Falar com especialista no WhatsApp
          </Button>
        </motion.div>

      </div>
    </section>
  );
}