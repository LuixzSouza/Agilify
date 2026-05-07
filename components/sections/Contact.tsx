"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MessageCircle, Mail, Clock, Send, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// ==========================================
// 1. DADOS DE CONTATO E RASTREAMENTO
// ==========================================
const NUMERO_CLIENTE = "553599218509";
// Link Nível 1: Para quem clicar direto no botão de WhatsApp sem preencher o formulário
const MSG_DIRETA = encodeURIComponent("Olá! Vim pelo site da AGILIFY e gostaria de falar com um consultor. [Lead: Botão Direto]");
const LINK_WHATSAPP_DIRETO = `https://wa.me/${NUMERO_CLIENTE}?text=${MSG_DIRETA}`;

// ==========================================
// 2. SCHEMA DO FORMULÁRIO
// ==========================================
const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'WhatsApp inválido'),
  message: z.string().min(10, 'Mensagem muito curta'),
});

type FormData = z.infer<typeof formSchema>;

// ==========================================
// 3. COMPONENTE PRINCIPAL
// ==========================================
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  try {
    // PASSO A: SALVAR/ENVIAR O LEAD (SEU CONTROLE)
    const response = await fetch('/api/lead', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data) 
    });

    if (!response.ok) throw new Error('Erro ao salvar lead');

    // PASSO B: REDIRECIONAR PARA O WHATSAPP DO CLIENTE
    const textoWhatsApp = `Olá! Me chamo ${data.name}. Vi o site de vocês e gostaria de entender melhor como funciona a emissão automática de notas de vocês.\n\n[Lead: Site]`;
    const linkDinamico = `https://wa.me/${NUMERO_CLIENTE}?text=${encodeURIComponent(textoWhatsApp)}`;
    
    window.open(linkDinamico, '_blank');
    
    setIsSuccess(true);
  } catch (error) {
    console.error("Erro no envio:", error);
    alert("Ocorreu um erro. Por favor, tente novamente.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="py-20 md:py-24 bg-slate-900 text-slate-50" id="contato" aria-labelledby="contact-title">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Lado Institucional / Informações */}
          <div className="space-y-8">
            <div>
              <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Pronto para simplificar sua rotina fiscal?
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Fale com nosso time de especialistas. Auxiliamos na configuração do certificado digital, no cadastro da empresa e na emissão das primeiras notas.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href={LINK_WHATSAPP_DIRETO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer hover:bg-slate-800/50 p-2 -ml-2 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/30 transition-colors">
                  <MessageCircle size={20} className="text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                    WhatsApp Comercial <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-slate-400 text-sm mt-0.5">+55 (35) 9921-8509</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 p-2 -ml-2">
                <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">E-mail de Suporte</p>
                  <p className="text-slate-400 text-sm mt-0.5">contato@agilify.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-2 -ml-2">
                <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-amber-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-white">Horário de Atendimento</p>
                  <p className="text-slate-400 text-sm mt-0.5">Segunda a Sexta, 8h às 18h (Resposta em até 1h)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-sm text-slate-400 font-medium">
              <ShieldCheck size={16} className="text-emerald-500" aria-hidden="true" />
              Seus dados estão seguros. Não enviamos spam.
            </div>
          </div>

          {/* Lado do Formulário (O "Pedágio") */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 text-slate-900">
            <h3 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">Fale com um consultor</h3>
            
            {isSuccess ? (
              <div className="bg-emerald-50 text-emerald-800 p-8 rounded-lg text-center border border-emerald-200" role="alert">
                <ShieldCheck size={36} className="mx-auto mb-4 text-emerald-600" aria-hidden="true" />
                <h4 className="font-bold text-lg mb-2">Redirecionando...</h4>
                <p className="text-sm">Se o seu WhatsApp não abriu automaticamente, <a href={LINK_WHATSAPP_DIRETO} target="_blank" rel="noopener noreferrer" className="underline font-bold text-emerald-700">clique aqui</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-1.5 block">Nome Completo</label>
                  <Input 
                    id="name" 
                    {...register('name')} 
                    placeholder="Digite seu nome" 
                    className={`bg-slate-50 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'border-slate-200 focus-visible:ring-blue-500'}`} 
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && <span className="text-red-600 text-xs mt-1.5 block font-medium" role="alert">{errors.name.message}</span>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-1.5 block">E-mail Profissional</label>
                    <Input 
                      id="email" 
                      type="email" 
                      {...register('email')} 
                      placeholder="voce@empresa.com.br" 
                      className={`bg-slate-50 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'border-slate-200 focus-visible:ring-blue-500'}`} 
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <span className="text-red-600 text-xs mt-1.5 block font-medium" role="alert">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="text-sm font-semibold text-slate-700 mb-1.5 block">WhatsApp</label>
                    <Input 
                      id="whatsapp" 
                      type="tel" 
                      {...register('whatsapp')} 
                      placeholder="(00) 00000-0000" 
                      className={`bg-slate-50 ${errors.whatsapp ? 'border-red-500 focus-visible:ring-red-500' : 'border-slate-200 focus-visible:ring-blue-500'}`} 
                      aria-invalid={errors.whatsapp ? "true" : "false"}
                    />
                    {errors.whatsapp && <span className="text-red-600 text-xs mt-1.5 block font-medium" role="alert">{errors.whatsapp.message}</span>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-1.5 block">Como podemos ajudar?</label>
                  <Textarea 
                    id="message" 
                    {...register('message')} 
                    placeholder="Explique brevemente sua necessidade ou dúvida..." 
                    className={`min-h-[100px] resize-none bg-slate-50 ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : 'border-slate-200 focus-visible:ring-blue-500'}`} 
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && <span className="text-red-600 text-xs mt-1.5 block font-medium" role="alert">{errors.message.message}</span>}
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 text-base transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 outline-none mb-2"
                  >
                    {isSubmitting ? 'Conectando ao WhatsApp...' : <><Send size={18} aria-hidden="true" /> Solicitar Contato</>}
                  </Button>
                  <p className="text-center text-xs text-slate-500 font-medium">
                    *Você será redirecionado para o nosso WhatsApp para falar com a equipe.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}