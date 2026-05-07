"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, ShieldCheck, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';

// Schema de validação
const formSchema = z.object({
  name: z.string().min(2, 'Como podemos te chamar?'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'Informe um WhatsApp válido'),
  honeypot: z.string().optional(), // Campo anti-spam
});

type FormData = z.infer<typeof formSchema>;

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceTag: string; 
}

export default function LeadModal({ isOpen, onClose, sourceTag }: LeadModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    // Bloqueia bots que preencherem o campo invisível
    if (data.honeypot) return;

    setIsSubmitting(true);
    try {
      // 1. Envia para sua API (Registro de comissão)
      await fetch('/api/lead', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...data, 
          message: `Interesse identificado via: ${sourceTag.replace('[Lead: ', '').replace(']', '')}` 
        }) 
      });

      // 2. Prepara o WhatsApp com mensagem humanizada
      const numero = "553599218509";
      const saudacao = data.name.split(' ')[0];
      const texto = `Olá! Me chamo *${data.name}*.\n\nVi a AGILIFY através do site e gostaria de falar com um especialista sobre como começar.\n\n_Ref: ${sourceTag}_`;
      const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

      // 3. Redireciona e limpa
      window.open(link, '_blank');
      onClose();
      reset();
    } catch (error) {
      console.error(error);
      alert("Houve um erro na conexão. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px] min-w-96 rounded-2xl bg-white border-slate-200 shadow-xl overflow-y-auto max-h-[95vh] p-0">
        
        {/* Banner de Tempo de Resposta */}
        <div className="bg-blue-600 py-2 px-4 text-center">
           <p className="text-[11px] font-bold text-white uppercase tracking-widest">
             Resposta em menos de 1 hora útil
           </p>
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader className="text-center sm:text-left mb-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
              <MessageCircle size={24} />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">
              Comece a emitir notas hoje mesmo
            </DialogTitle>
            <DialogDescription className="text-slate-500 pt-2">
              Nossa equipe ajuda você na configuração, certificado digital e nas primeiras emissões.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Campo Honeypot (Invisível) */}
            <input type="text" {...register('honeypot')} className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="space-y-1">
              <label htmlFor="modal-name" className="text-sm font-bold text-slate-700">Seu Nome</label>
              <Input 
                id="modal-name"
                {...register('name')} 
                placeholder="Ex: João Silva" 
                className={`bg-white border-slate-200 h-11 focus-visible:ring-blue-500 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`} 
              />
              {errors.name && <p className="text-red-500 text-xs font-medium" role="alert">{errors.name.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="modal-whatsapp" className="text-sm font-bold text-slate-700">WhatsApp</label>
                <Input 
                  id="modal-whatsapp"
                  type="tel"
                  {...register('whatsapp')} 
                  placeholder="(00) 00000-0000" 
                  className={`bg-white border-slate-200 h-11 focus-visible:ring-blue-500 ${errors.whatsapp ? 'border-red-500 focus-visible:ring-red-500' : ''}`} 
                />
                {errors.whatsapp && <p className="text-red-500 text-xs font-medium" role="alert">{errors.whatsapp.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-email" className="text-sm font-bold text-slate-700">E-mail</label>
                <Input 
                  id="modal-email"
                  type="email" 
                  {...register('email')} 
                  placeholder="joao@empresa.com" 
                  className={`bg-white border-slate-200 h-11 focus-visible:ring-blue-500 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`} 
                />
                {errors.email && <p className="text-red-500 text-xs font-medium" role="alert">{errors.email.message}</p>}
              </div>
            </div>

            {/* Checklist de Barreiras Mentais */}
            <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 size={14} className="text-emerald-500" /> Configuração guiada passo a passo
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 size={14} className="text-emerald-500" /> Ajuda no Certificado Digital (A1)
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <CheckCircle2 size={14} className="text-emerald-500" /> Sem compromisso ou cartão de crédito
              </div>
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 text-base shadow-sm transition-all active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <><Loader2 className="animate-spin" size={20} /> Conectando especialista...</>
                ) : (
                  <><MessageCircle size={20} /> Receber atendimento no WhatsApp</>
                )}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-2">
              <ShieldCheck size={12} className="text-emerald-500" /> Ambiente Seguro & Privado
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}