# 🚀 AGILIFY - Plataforma de Emissão Fiscal

Landing Page e Funil de Captura (SaaS) desenvolvidos para a **AGILIFY**, focados em alta conversão para o modelo de negócios de Custo Por Lead (CPL).

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído com as melhores e mais modernas ferramentas do ecossistema React:

*   **Framework:** [Next.js 14/15](https://nextjs.org/) (App Router)
*   **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes:** [shadcn/ui](https://ui.shadcn.com/) (Radix Primitives)
*   **Animações:** [Framer Motion](https://www.framer.com/motion/)
*   **Gerenciamento de Formulários:** React Hook Form + Zod
*   **Integração de E-mails:** [Resend](https://resend.com/)
*   **Ícones:** Lucide React

---

## 🎯 A Estratégia de Captura (O Modelo CPL)

A arquitetura do projeto foi desenhada para que **nenhum clique seja perdido**. Todo botão de ação ("Testar Grátis", "Ver Demo", "Assinar Plano") aciona o sistema centralizado de captura.

### Como funciona o fluxo de Leads (`LeadModal.tsx`):
1. O usuário clica em um botão pela página.
2. O **Lead Modal** é aberto.
3. O usuário preenche Nome, E-mail e WhatsApp.
4. **Passo A:** A API interna (`/api/lead`) dispara um e-mail silencioso via **Resend** para o proprietário do site (Comprovante do Lead).
5. **Passo B:** O usuário é redirecionado para o WhatsApp do atendimento da Agilify com uma mensagem pré-formatada contendo a **`sourceTag`** (Ex: `[Lead: Hero_Principal]`).

---