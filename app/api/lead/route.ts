import { Resend } from "resend";
import { NextResponse } from "next/server";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const leadSchema = z.object({
  name: z.string().min(2, "Nome inválido").max(80),
  email: z.string().email("E-mail inválido").max(120),
  whatsapp: z.string().min(10, "WhatsApp inválido").max(20),
  message: z.string().max(1000).optional().default(""),
  sourceTag: z.string().max(120).optional().default("Origem não informada"),
  company: z.string().max(120).optional().default(""),
  honeypot: z.string().optional().default(""),
});

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatWhatsAppLink(whatsapp: string, name: string) {
  const onlyDigits = whatsapp.replace(/\D/g, "");
  const normalized = onlyDigits.startsWith("55") ? onlyDigits : `55${onlyDigits}`;

  const message = encodeURIComponent(
    `Olá, meu nome é ${name}. Vi a AGILIFY no site e gostaria de receber mais informações.`
  );

  return `https://wa.me/${normalized}?text=${message}`;
}

function buildLeadEmailHtml(data: z.infer<typeof leadSchema>) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeWhatsapp = escapeHtml(data.whatsapp);
  const safeMessage = escapeHtml(data.message || "—");
  const safeSource = escapeHtml(data.sourceTag);
  const safeCompany = escapeHtml(data.company || "—");
  const whatsappLink = formatWhatsAppLink(data.whatsapp, data.name);

  return `
  <div style="margin:0;padding:0;background:#f6f8fb;font-family:Inter,Arial,sans-serif;">
    <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
      
      <div style="background:linear-gradient(135deg,#0f3a6e 0%,#2563eb 100%);border-radius:20px 20px 0 0;padding:28px 32px;color:#fff;">
        <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;opacity:.85;">AGILIFY • Novo Lead</div>
        <h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;">Novo contato recebido no site</h1>
        <p style="margin:10px 0 0;font-size:15px;line-height:1.6;opacity:.92;">
          Um visitante enviou dados pelo formulário e demonstrou interesse no sistema.
        </p>
      </div>

      <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 20px 20px;padding:28px 32px;color:#0f172a;">
        
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;">
          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:6px;">Nome</div>
            <div style="font-size:15px;font-weight:700;color:#0f172a;">${safeName}</div>
          </div>
          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:6px;">Empresa</div>
            <div style="font-size:15px;font-weight:700;color:#0f172a;">${safeCompany}</div>
          </div>
          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:6px;">E-mail</div>
            <div style="font-size:15px;font-weight:600;color:#0f172a;">${safeEmail}</div>
          </div>
          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:14px 16px;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:6px;">WhatsApp</div>
            <div style="font-size:15px;font-weight:600;color:#0f172a;">${safeWhatsapp}</div>
          </div>
        </div>

        <div style="margin-bottom:20px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:8px;">Mensagem</div>
          <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:16px;font-size:14px;line-height:1.7;color:#334155;">
            ${safeMessage}
          </div>
        </div>

        <div style="margin-bottom:24px;">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:8px;">Origem</div>
          <div style="display:inline-block;background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:999px;padding:8px 12px;font-size:13px;font-weight:600;">
            ${safeSource}
          </div>
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="${whatsappLink}" target="_blank" style="background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 18px;border-radius:12px;font-weight:700;display:inline-block;">
            Abrir no WhatsApp
          </a>
          <a href="mailto:${safeEmail}" style="background:#f8fafc;color:#0f172a;text-decoration:none;padding:14px 18px;border-radius:12px;font-weight:700;display:inline-block;border:1px solid #e5e7eb;">
            Responder por e-mail
          </a>
        </div>

        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e5e7eb;color:#64748b;font-size:12px;line-height:1.6;">
          Este lead veio do formulário do site AGILIFY e foi enviado automaticamente para acompanhamento comercial.
        </div>
      </div>
    </div>
  </div>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const html = buildLeadEmailHtml(data);

    const result = await resend.emails.send({
      from: "AGILIFY Leads <onboarding@resend.dev>",
      to: [process.env.LEAD_RECEIVER_EMAIL || "seu-email@exemplo.com"],
      subject: `Novo lead AGILIFY: ${data.name}`,
      html,
      text:
        `Novo lead AGILIFY\n\n` +
        `Nome: ${data.name}\n` +
        `Empresa: ${data.company || "-"}\n` +
        `E-mail: ${data.email}\n` +
        `WhatsApp: ${data.whatsapp}\n` +
        `Origem: ${data.sourceTag}\n\n` +
        `Mensagem: ${data.message || "-"}`,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Erro na API de Lead:", error);
    return NextResponse.json(
      { success: false, error: "Falha ao processar lead" },
      { status: 500 }
    );
  }
}