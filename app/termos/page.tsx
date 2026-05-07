"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldAlert, Scale, Lock, Globe, HelpCircle } from 'lucide-react';

export default function TermosDeUso() {
  const dataAtualizacao = "07 de Maio de 2026";

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header da Página */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-12">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 text-blue-600 mb-4">
              <FileText size={24} />
              <span className="font-bold uppercase tracking-widest text-xs">Documento Legal</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Termos de Uso
            </h1>
            <p className="text-slate-500 text-sm">
              Última atualização: <strong>{dataAtualizacao}</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo dos Termos */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          
          <div className="prose prose-slate max-w-none space-y-10">
            
            {/* Seção 1 */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <Globe size={20} className="text-blue-600" /> 1. Aceitação dos Termos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ao acessar e utilizar a plataforma <strong>AGILIFY Tecnologia</strong>, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Este software é oferecido na modalidade SaaS (Software as a Service) para auxílio na emissão de documentos fiscais e gestão empresarial.
              </p>
            </div>

            {/* Seção 2 */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <ShieldAlert size={20} className="text-blue-600" /> 2. Natureza do Serviço
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A AGILIFY fornece uma ferramenta tecnológica para emissão de notas fiscais (NF-e, NFS-e, NFC-e). 
                <strong className="text-slate-900"> Importante:</strong> A plataforma não substitui a necessidade de um contador habilitado. O correto enquadramento tributário, alíquotas e obrigações acessórias são de inteira responsabilidade do usuário e seu respectivo consultor contábil.
              </p>
            </div>

            {/* Seção 3 */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <Lock size={20} className="text-blue-600" /> 3. Cadastro e Segurança
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Para utilizar o sistema, o usuário deve fornecer informações precisas e manter seu Certificado Digital (A1) válido e configurado. A guarda da senha de acesso é de responsabilidade exclusiva do usuário. Em caso de uso indevido da conta por terceiros, a AGILIFY deve ser notificada imediatamente.
              </p>
            </div>

            {/* Seção 4 */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <Scale size={20} className="text-blue-600" /> 4. Pagamentos e Cancelamento
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Teste Grátis:</strong> Oferecemos 14 dias de degustação sem necessidade de cartão de crédito.</li>
                <li><strong>Assinatura:</strong> Os planos são recorrentes (mensais ou anuais) e pré-pagos.</li>
                <li><strong>Cancelamento:</strong> Pode ser feito a qualquer momento pelo painel, interrompendo a renovação para o próximo ciclo. Não há reembolso de períodos já utilizados.</li>
              </ul>
            </div>

            {/* Seção 5 */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <HelpCircle size={20} className="text-blue-600" /> 5. Limitação de Responsabilidade
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm italic border-l-4 border-slate-200 pl-4">
                A AGILIFY não se responsabiliza por: (i) Instabilidades nos servidores da SEFAZ ou prefeituras; (ii) Preenchimento incorreto de dados fiscais pelo usuário; (iii) Multas aplicadas por órgãos fiscalizadores devido ao uso inadequado da ferramenta.
              </p>
            </div>

            {/* Seção 6 */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">6. LGPD e Privacidade</h2>
              <p className="text-slate-600 leading-relaxed">
                O tratamento de dados pessoais e fiscais realizados pela plataforma segue rigorosamente a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Para mais detalhes, acesse nossa Política de Privacidade.
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm">
              Dúvidas sobre estes termos? Envie um e-mail para <br />
              <a href="mailto:contato@agilify.com.br" className="text-blue-600 font-bold hover:underline">juridico@agilify.com.br</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}