"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

export default function PoliticaPrivacidade() {
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
              <ShieldCheck size={24} />
              <span className="font-bold uppercase tracking-widest text-xs">Privacidade e Segurança</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Política de Privacidade
            </h1>
            <p className="text-slate-500 text-sm">
              Em conformidade com a LGPD. Última atualização: <strong>{dataAtualizacao}</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo da Política */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6 bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
          
          <div className="prose prose-slate max-w-none space-y-12">
            
            {/* Introdução */}
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                A <strong>AGILIFY Tecnologia</strong> valoriza a sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais e os dados fiscais da sua empresa ao utilizar nossa plataforma.
              </p>
            </div>

            {/* Coleta de Dados */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <Database size={20} className="text-blue-600" /> 1. Dados que Coletamos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Para o funcionamento do emissor, coletamos:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li><strong>Dados Cadastrais:</strong> Nome, CPF/CNPJ, e-mail, telefone e endereço comercial.</li>
                <li><strong>Dados Fiscais:</strong> Informações de produtos, serviços, alíquotas e dados de clientes/fornecedores para a emissão de notas.</li>
                <li><strong>Certificado Digital:</strong> O Certificado A1 é armazenado em ambiente criptografado apenas para a assinatura das notas junto aos órgãos competentes.</li>
              </ul>
            </div>

            {/* Finalidade */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <UserCheck size={20} className="text-blue-600" /> 2. Finalidade do Uso
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Seus dados são utilizados estritamente para:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Viabilizar a emissão e transmissão de notas fiscais eletrônicas.</li>
                <li>Processar pagamentos de assinaturas.</li>
                <li>Enviar notificações de suporte e atualizações críticas do sistema.</li>
                <li>Cumprir obrigações legais e fiscais perante a Receita Federal e Secretarias da Fazenda.</li>
              </ul>
            </div>

            {/* Compartilhamento */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <Eye size={20} className="text-blue-600" /> 3. Compartilhamento de Dados
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A AGILIFY <strong>não comercializa</strong> seus dados. O compartilhamento ocorre apenas com:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li><strong>Órgãos Públicos:</strong> Receita Federal e Prefeituras para autorização das notas.</li>
                <li><strong>Seu Contador:</strong> Caso você autorize através do Portal do Contador.</li>
                <li><strong>Parceiros de Infraestrutura:</strong> Serviços de nuvem (AWS/Google Cloud) e processadores de pagamento (Stripe/Pagar.me), todos sob rigorosos contratos de confidencialidade.</li>
              </ul>
            </div>

            {/* Segurança */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900">
                <Lock size={20} className="text-blue-600" /> 4. Segurança da Informação
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Adotamos medidas técnicas e administrativas para proteger seus dados, incluindo:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>Criptografia SSL/TLS em todas as comunicações.</li>
                <li>Armazenamento de senhas via hash criptográfico.</li>
                <li>Monitoramento contínuo contra acessos não autorizados.</li>
              </ul>
            </div>

            {/* Direitos do Usuário */}
            <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-2">Seus Direitos (LGPD)</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Você tem o direito de acessar, corrigir, portar ou solicitar a exclusão de seus dados pessoais a qualquer momento através do nosso painel de controle ou via e-mail de suporte.
              </p>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
              <Mail size={16} /> 
              Dúvidas sobre privacidade? <br />
              <a href="mailto:privacidade@agilify.com.br" className="text-blue-600 font-bold hover:underline">privacidade@agilify.com.br</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}