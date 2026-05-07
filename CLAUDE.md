# Prompt para construção do projeto **AGILIFY** em Next.js

Cole o bloco abaixo no Claude Code, Cursor, v0 ou qualquer agente de codificação. Ele descreve TUDO que construímos no protótipo HTML — arquitetura, design system, conteúdo, seções, comportamentos e integrações — para você reproduzir o site fiel em Next.js 14+ (App Router) com TypeScript e Tailwind.

---

## 🎯 PROMPT PARA O AGENTE DE CÓDIGO

> Você é um desenvolvedor sênior. Construa o **site institucional + landing de conversão** da **AGILIFY** em **Next.js 14+ (App Router) com TypeScript, Tailwind CSS, Framer Motion e next-intl**. O site é a principal porta de captação de clientes (PMEs brasileiras e contadores), por isso o foco é **conversão + clareza para usuários leigos**, com estética de **SaaS brasileiro corporativo, prático, azul-corporativo + branco** (NÃO use estética "fintech premium escura" — o público é dono de padaria, mercearia, lojista, contador de bairro).
>
> O sistema AGILIFY é um **emissor de NFC-e e NF-e** com diferencial principal: **Portal do Contador** que entrega XMLs em até 15 minutos, com integração nativa a **Alterdata** e **Domínio Sistemas**.

---

### 1. Stack obrigatória

- **Next.js 14+** com App Router e Server Components onde fizer sentido
- **TypeScript** estrito (`strict: true`)
- **Tailwind CSS** + `tailwind-merge` + `clsx`
- **next-intl** (PT-BR padrão, EN como secundário) — toggle PT/EN no header
- **Framer Motion** para animações sutis (fade-up nas seções com `whileInView`)
- **lucide-react** para ícones genéricos; SVG inline para os ícones coloridos da toolbar do mock
- **shadcn/ui** como base de componentes (Button, Tabs, Accordion, Slider, Input, Textarea, Dialog)
- **react-hook-form** + **zod** para o formulário de contato
- **next/font** com **Inter** (corpo) e **Roboto** (mocks de sistema desktop)
- **SEO**: `metadata` por rota, `sitemap.ts`, `robots.ts`, Open Graph com cor `#1976d2`
- **Hospedagem**: Vercel (variáveis em `.env.local`)

### 2. Estrutura de pastas

```
app/
  [locale]/
    layout.tsx              // Header + Footer + PromoBanner
    page.tsx                // Landing (todas as seções abaixo)
    privacidade/page.tsx
    termos/page.tsx
  api/
    lead/route.ts           // POST do formulário (envia para email/CRM)
    whatsapp/route.ts       // gera link wa.me com mensagem pré-preenchida
  globals.css
components/
  layout/
    Header.tsx
    Footer.tsx
    PromoBanner.tsx
  sections/
    Hero.tsx
    HeroVisual.tsx          // mock de janela do sistema desktop
    StatsStrip.tsx
    HowItWorks.tsx
    Audience.tsx            // tabs Empresa / Contador
    Flow.tsx                // 4 etapas auto-animadas
    Compare.tsx             // antes vs depois
    Calculator.tsx          // sliders de economia
    Portal.tsx              // mock do Portal do Contador
    Integrations.tsx
    Testimonials.tsx
    Pricing.tsx
    FAQ.tsx
    Contact.tsx
  ui/                        // shadcn
  icons/
    ToolbarIcons.tsx        // ícones coloridos do mock (Pessoas, Produtos, NF-e...)
    LogoMark.tsx
lib/
  i18n/
    pt.ts
    en.ts
    config.ts
  utils.ts
  analytics.ts              // GA4 + Meta Pixel
content/
  pricing.ts
  testimonials.ts
  faq.ts
public/
  og.png
  favicon.ico
```

### 3. Design tokens (Tailwind config)

```ts
colors: {
  brand: {
    blue: '#1976d2',
    blueDark: '#155fa8',
    blueSoft: '#e3f2fd',
    blueLine: '#bbdefb',
  },
  green: { DEFAULT: '#2e7d32', soft: '#e8f5e9' },
  orange: { DEFAULT: '#f57c00', soft: '#fff3e0' },
  red: '#c62828',
  ink: { DEFAULT: '#1a2330', dim: '#5b6776', faint: '#8895a4' },
  surface: { DEFAULT: '#ffffff', alt: '#f6f8fb', soft: '#eef2f7', stripe: '#fafbfc' },
  border: { DEFAULT: '#dde3ea', soft: '#e9eef3' },
},
borderRadius: { md: '6px', lg: '10px' },
boxShadow: {
  sm: '0 1px 2px rgba(20,40,80,0.06), 0 1px 1px rgba(20,40,80,0.04)',
  md: '0 4px 12px rgba(20,40,80,0.08), 0 2px 4px rgba(20,40,80,0.04)',
  lg: '0 24px 48px -16px rgba(20,40,80,0.18), 0 8px 16px rgba(20,40,80,0.08)',
},
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-roboto)', 'monospace'],
},
```

Container: `max-w-[1240px]` com padding lateral `clamp(20px, 4vw, 48px)`. Espaçamento vertical entre seções: `100px` (compact `72px`, spacious `140px`).

### 4. Conteúdo das seções (PT-BR — replicar em EN)

#### 4.1 PromoBanner (topo, fixo no topo do header)
Faixa azul-escuro com gradiente animado (shimmer 6s) + bolinha verde pulsando:
> "🎉 PROMO DE LANÇAMENTO — Plano Profissional por R$ 199/mês (de R$ 249) · Apenas 50 vagas restantes"

#### 4.2 Header
Logo "AGILIFY" (mark = quadrado azul `#1976d2` com letra A estilizada — path `M10 22 L16 9 L22 22 M12.5 17.5 L19.5 17.5` em branco, stroke-width 2.4) + nav links (Como funciona, Portal do Contador, Integrações, Planos, Dúvidas) + toggle PT/EN + "Entrar" (texto) + CTA "Começar grátis" (botão azul).

#### 4.3 Hero
- Tag pill "Novo · Portal do Contador disponível"
- **Headline (variant A)**: "Pare de perder 2 horas por dia ***enviando XML*** pro seu contador." (palavras em itálico recebem highlight amarelo translúcido `rgba(25,118,210,0.15)` 60% até embaixo)
- **Headline alternativa (variant B)**: "O sistema fiscal ***que conversa com*** o seu contador."
- **Lede**: "Emita NFC-e e NF-e, e suas notas chegam sozinhas no contador em 15 minutos. Integração direta com Alterdata e Domínio. Sem planilha, sem e-mail, sem retrabalho."
- CTAs: **"Testar grátis por 14 dias"** (azul, com sombra azul forte) + **"Falar no WhatsApp"** (verde WhatsApp `#25d366`, ícone do app)
- Pill de urgência logo abaixo: bolinha vermelha pulsante + "Promoção ativa: R$ 199/mês · apenas 50 vagas" (fundo `#fef2f2`, borda `#fecaca`)
- Linha de confiança (4 itens com check verde): "14 dias grátis · Sem cartão de crédito · Suporte humano · 100% online"
- À direita: **HeroVisual** (ver 4.4)
- Logo abaixo, **trust strip**: "Integrado com" + Alterdata · Domínio Sistemas · SEFAZ · PIX · Boleto · E-commerce

#### 4.4 HeroVisual (CRÍTICO — diferencial visual)
Mock de **janela do sistema desktop AGILIFY** modelado a partir do software brasileiro real (Linx/SmartPOS-style). Componentes:
- **Title bar** clara com 3 controles (− □ ×) e título "AGILIFY — Loja Paraíso da Empada"
- **Menu bar** texto: Sistema · Administrativo · Estoque · Financeiro · Boleto · Movimento · Relatório · Fiscal · Apps · Ajuda
- **Toolbar de ícones coloridos** (32×32 SVG, estilo "Office 2007"): Pessoas (laranja), Produtos (marrom), **NF-e** (azul, ativo com background `--blue-soft`), Caixa (azul claro), Pagar (verde), Contador (amarelo), NFC-e (azul), PDV
- **Tabs** com botão fechar: "Notas de Fornecedor ×" / "Compras ×" (ativa)
- **Filter bar**: campos "Período de [01/04/2026] até [16/04/2026]", botão "Filtrar Período", busca "Localizar"
- **Sub-tabs**: Pendentes (ativa) · Gerou Compras · Aceitas · Desconhecidas · Todas
- **Tabela** com colunas: >>Data, Emissão, Número, Chave (44 dígitos truncados), CNPJ, Nome, Total. Linhas de exemplo:
  - 16/04/2026 · 001148 · 31260457603822... · 57603822000184 · COMERCIAL TRIGO MINAS LTDA · 1.360,23
  - 16/04/2026 · 001149 · ... · 65,00
  - 16/04/2026 · 001221 · ... · 110,97
  - 16/04/2026 · 001519 · DIST DE BEB CAMBUI LTDA · 19,24
  - 07/04/2026 · 001059 · COMERCIAL TRIGO MINAS LTDA · 168,02
- Linha selecionada cicla automaticamente a cada 2.2s (useEffect + setInterval)
- **Bottom bar**: botões F2 Consulta · F4 Confirmar (verde) · F5 Desconhecer (vermelho ×) · Visualizar NFe + à direita "VALOR DE NF-E: R$ 4.159,70 · TOTAL: 8 notas"
- **Status bar**: "Sistema Retaguarda · Usuário: ADMINISTRADOR · Versão 2.1.4 · Online"

Fonte: **Roboto** dentro do mock para parecer "sistema de gestão" de verdade. Tabela com `font-feature-settings: "tnum"` e zebra-stripe.

#### 4.5 StatsStrip (faixa cinza claro)
4 colunas centralizadas, número grande azul-escuro 38px + label 13px:
- **+1.200** notas emitidas/dia pelos clientes
- **15min** para chegar no contador
- **98%** de clientes satisfeitos
- **24/7** sistema online, sem queda

#### 4.6 HowItWorks
Eyebrow "Como funciona" + título "Em 5 minutos você está emitindo nota."
Grid de 4 cards conectados por seta circular branca entre eles:
1. **Crie sua conta** — Cadastro rápido pelo site. Você recebe acesso na hora.
2. **Cadastre sua empresa** — CNPJ, certificado digital A1 e dados fiscais. Nosso time ajuda.
3. **Vincule seu contador** — Convide seu contador para o Portal — ele aceita por e-mail.
4. **Emita sua primeira nota** — NFC-e, NF-e ou pelo PDV. Em segundos, autorizada na SEFAZ.

#### 4.7 Audience (Tabs Empresa / Contador)
**Para Empresa** (3 cards com ícone):
- Emita em 3 cliques — Emita NFC-e e NF-e direto do navegador, com validação fiscal automática.
- Consulta de notas de entrada — Importe automaticamente as notas que sua empresa recebeu. Sem digitar.
- Tudo organizado — Histórico, status SEFAZ, XML e DANFE sempre disponíveis num painel rápido.

**Para Contador** (3 cards):
- Acesso em tempo real — Veja toda nota fiscal dos seus clientes no momento em que é emitida.
- Vários clientes, uma tela — Alterne entre empresas com um clique. Tudo categorizado, filtrado, pronto para baixar.
- Integração nativa — Exportação direta para Alterdata e Domínio Sistemas. Corte retrabalho no fechamento.

#### 4.8 Flow (4 etapas auto-animadas, fundo cinza claro)
Card ativo cicla a cada 2s. Cada etapa tem número, título, descrição, badge de tempo:
1. Empresa emite nota — ~3s
2. Sistema valida na SEFAZ — ~5s
3. XML é organizado e arquivado — ~30s
4. Contador recebe automaticamente — ≤15min

#### 4.9 Compare (Antes vs Depois)
Tabela com 2 colunas, cabeçalho vermelho-suave (× "Sem AGILIFY") e verde-suave (✓ "Com AGILIFY"). Linhas:
| Sem AGILIFY (riscado, cinza) | Com AGILIFY |
|---|---|
| Cliente envia XML por e-mail toda semana | Notas vão direto pro contador, em 15min |
| Contador cobrando o XML 4x por dia | Contador acessa quando quiser, sozinho |
| Digitação manual de notas de entrada | Importação automática só com a chave |
| Planilha de Excel pra controlar | Tudo organizado, com filtro e busca |
| Suporte que demora dias | WhatsApp humano em até 1h |
| Instalação, CD, atualização manual | 100% online, sempre atualizado |

#### 4.10 Calculator (calculadora de economia)
Grid 1fr | 380px. À esquerda card branco com 3 sliders:
- Notas emitidas por mês (50 a 2000, step 50, default 200)
- Minutos gastos por nota (1 a 15, default 4)
- Custo médio da hora trabalhada (R$ 20 a R$ 200, default R$ 50)

À direita card com gradiente azul-escuro (`#0f3a6e → #1976d2`), texto branco:
- Label: "Você economiza por mês"
- Amount: `R$ {savings}` em 56px bold (cálculo: `(invoices * minutes / 60) * rate`)
- Sub: "X horas recuperadas" (verde `#4ade80`) + pill "envio automático em 15min" (com ícone raio)

#### 4.11 Portal (mock do Portal do Contador)
Mesma estética da janela do HeroVisual, mas conteúdo do contador:
- Title: "AGILIFY — Portal do Contador | João Contábil ME"
- Toolbar: Clientes, NFC-e (ativo), NF-e, Alterdata, Relatórios, Exportar
- Tabs com nomes de empresas-cliente (cicla)
- Filter bar com select de cliente + período + indicador verde "Sincronizado em tempo real"
- Strip de stats: notas do mês, pendentes, valor total
- Tabela de notas com badge de status (verde "OK" / laranja "Pendente") + link XML
- Bottom bar: "Baixar XML · Exportar Alterdata · Aprovar Lote (verde)"

À esquerda do mock: descrição com 4 features (check verde):
- Acesso direto ao XML — Toda NFC-e e NF-e dos seus clientes em até 15 min.
- Multi-cliente real — Gerencie dezenas de empresas no mesmo painel.
- Exportação Alterdata + Domínio — Layouts nativos. Zero retrabalho no fechamento.
- Permissão controlada — Cada cliente decide o que o contador enxerga.

#### 4.12 Integrations
6 cards (Alterdata · Domínio Sistemas · SEFAZ Brasil · API REST · NFS-e (em breve) · E-commerce). Badge "Nativo" / "Beta" / "Em breve".

#### 4.13 Testimonials
3 cards com aspas grandes decorativas:
- "Antes da AGILIFY eu gastava 2h por dia separando XML. Hoje a contabilidade recebe sozinha." — Renata M., Padaria, Belo Horizonte – MG
- "O Portal do Contador mudou meu escritório. Tenho 18 clientes na AGILIFY e nunca mais pedi XML." — João B., Contador, São Paulo – SP
- "Migrei de outro sistema porque o suporte aqui responde no WhatsApp. Faz toda diferença." — Carlos S., Mercearia, Goiânia – GO

(Substituir por depoimentos reais quando disponíveis)

#### 4.14 Pricing
Toggle Mensal / Anual (anual com pill "−20%"). 3 planos:

**Essencial** — R$ 199/mês (anual R$ 159) — "Para quem está começando"
- Até 300 NFC-e/mês · 1 CNPJ + 2 usuários · Consulta de notas de entrada · Envio automático ao contador · Suporte por chat e e-mail
- CTA: "Começar agora" (ghost)

**Profissional** ⭐ MAIS ESCOLHIDO — R$ 249/mês (anual R$ 199) — "Mais escolhido por lojistas"
- NFC-e e NF-e ilimitadas · Até 3 CNPJs + 5 usuários · Envio automático ao contador (15min) · Integração Alterdata + Domínio · Portal do Contador incluso · Suporte humano por WhatsApp
- CTA: "Começar 14 dias grátis" (azul, destacado, borda dourada)

**Contador** — Grátis — "Para escritórios contábeis · Para clientes ativos da AGILIFY"
- Acesso a múltiplos clientes · Portal do Contador completo · Download em lote (ZIP) · Exportação Alterdata + Domínio · Suporte prioritário
- CTA: "Solicitar acesso"

#### 4.15 FAQ
Accordion com 8 perguntas:
1. Preciso instalar alguma coisa? — Não. AGILIFY roda 100% no navegador.
2. Como funciona o envio automático para o contador? — Toda nota emitida vai pro Portal do Contador em ≤15 min.
3. Quais sistemas contábeis suportam? — Alterdata e Domínio Sistemas nativamente.
4. Preciso de certificado digital? — Sim, A1 ou A3. Ajudamos no cadastro.
5. Tem teste grátis? — 14 dias completos, sem cartão.
6. E se passar do limite de notas? — Avisamos antes. Você troca de plano só com 1 clique.
7. Funciona em mobile? — Sim, responsivo. Tem PDV mobile no Profissional.
8. Como cancelar? — Pelo painel, sem multa. Mantemos seus XMLs por 5 anos por lei.

#### 4.16 Contact
Grid 2 colunas: à esquerda info (WhatsApp, e-mail contato@agilify.com.br, horário Seg–Sex 8h–19h, resposta até 1h útil) + CTA verde "Falar no WhatsApp". À direita formulário (nome, email, empresa, mensagem) → POST `/api/lead`.

#### 4.17 Footer
4 colunas: Logo+tagline, Produto, Empresa, Legal. Bottom: "© 2026 AGILIFY. Todos os direitos reservados." · "Feito no Brasil 🇧🇷"

### 5. Comportamentos / animações

- **Scroll reveal**: cada seção usa `motion.div` com `initial={{opacity:0,y:24}}` `whileInView={{opacity:1,y:0}}` `viewport={{once:true}}`
- **Auto-rotação**: HeroVisual (linha selecionada cicla 2.2s) e Flow (etapa ativa cicla 2s) com `useEffect` + `setInterval` + cleanup
- **Pricing toggle**: state local, anima preço com `AnimatePresence`
- **Calculator**: `useState` + memo do cálculo
- **Audience tabs**: shadcn `<Tabs>` com `motion.div` no conteúdo
- **PromoBanner**: gradiente animado via Tailwind keyframe `shimmer`
- **Smooth scroll**: links `#anchor` com `scroll-behavior:smooth`
- **Sticky header** com `backdrop-blur` ao rolar (>40px)

### 6. SEO + Performance

- `metadata`: title "AGILIFY — Sistema emissor de notas fiscais com integração contábil", description curta, OG image
- `next/image` em tudo, lazy por padrão
- Lighthouse alvo: Performance 95+, A11y 100, SEO 100
- Schema.org `SoftwareApplication` com aggregateRating placeholder
- Tags `<html lang="pt-BR">` por padrão

### 7. Integrações backend (mínimas)

- `/api/lead` POST → Resend ou SendGrid → email para `contato@agilify.com.br` + opcional Webhook RD Station
- `/api/whatsapp` GET → redirect para `https://wa.me/55{NUM}?text={msg}`
- `lib/analytics.ts`: GA4 (`NEXT_PUBLIC_GA_ID`) + Meta Pixel (`NEXT_PUBLIC_FB_PIXEL_ID`) + eventos `cta_hero`, `cta_pricing`, `lead_submit`, `whatsapp_click`

### 8. Acessibilidade

- Toda imagem decorativa com `alt=""`
- Foco visível com ring `--brand-blue`
- Contraste mínimo AA em texto
- `prefers-reduced-motion` desativa loops de auto-rotação
- `<form>` com labels associados via `htmlFor`

### 9. Variáveis de ambiente (`.env.local`)

```
NEXT_PUBLIC_SITE_URL=https://agilify.com.br
NEXT_PUBLIC_WHATSAPP=5511999999999
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_FB_PIXEL_ID=
RESEND_API_KEY=
LEAD_TO_EMAIL=contato@agilify.com.br
```

### 10. Entregáveis

1. Repo Next.js rodando com `pnpm dev`
2. README com instruções
3. Deploy Vercel preview
4. Todos os textos em PT/EN via `next-intl`
5. PromoBanner, urgência e calculadora **já com os valores deste prompt** (R$ 199/249, 50 vagas, 15min)
6. HeroVisual e Portal mock fiéis ao protótipo (toolbar com ícones SVG coloridos, tabela com fonte mono, status bar)

---

**Estilo de código**: componentes pequenos, props tipados, sem `any`. Server components por padrão, `"use client"` só onde houver state/effect. Comentários em PT-BR.

**Tom de copy**: direto, prático, brasileiro. Foco em DOR (XML por e-mail, contador cobrando, retrabalho) → SOLUÇÃO (15min automático). Evite jargão técnico desnecessário.

**Não fazer**:
- Não usar dark mode no design principal (usuário-final é leigo)
- Não usar gradientes pesados em cards (só na faixa promo e no card-resultado da calculadora)
- Não inventar features que não estão neste prompt
- Não usar emoji decorativo fora do PromoBanner e do Footer

---

**Quando terminar**, rode Lighthouse, valide formulário, teste WhatsApp, e me mande o link do preview.
