"use client";
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// ==========================================
// 1. DADOS (Agora com Avatares)
// ==========================================
const testimonials = [
  {
    quote: "Antes da AGILIFY eu gastava 2h por dia separando XML. Hoje a contabilidade recebe sozinha.",
    author: "Renata M.",
    role: "Padaria, Belo Horizonte – MG",
    image: "https://i.pravatar.cc/150?img=44" // Mockup de rosto feminino
  },
  {
    quote: "O Portal do Contador mudou meu escritório. Tenho 18 clientes na AGILIFY e nunca mais pedi XML.",
    author: "João B.",
    role: "Contador, São Paulo – SP",
    image: "https://i.pravatar.cc/150?img=11" // Mockup de rosto masculino (sério)
  },
  {
    quote: "Migrei de outro sistema porque o suporte aqui responde no WhatsApp. Faz toda diferença.",
    author: "Carlos S.",
    role: "Mercearia, Goiânia – GO",
    image: "https://i.pravatar.cc/150?img=33" // Mockup de rosto masculino
  }
];

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================
export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/50" id="depoimentos" aria-labelledby="testimonials-title">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Quem usa, recomenda.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Milhares de notas emitidas todos os dias por empresas reais que deixaram o processo manual no passado.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white p-6 md:p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              <div>
                {/* Estrelas de Trust Rating */}
                <div className="flex items-center gap-1 mb-5" aria-label="Avaliação de 5 estrelas">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                </div>
                
                <p className="text-slate-700 font-medium text-base leading-relaxed mb-8">
                  &quot;{item.quote}&quot;
                </p>
              </div>
              
              {/* Rodapé do Card: Avatar e Autor */}
              <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
                <img 
                  src={item.image} 
                  alt={`Foto de ${item.author}`} 
                  className="w-11 h-11 rounded-full border border-slate-200 object-cover bg-slate-100 shrink-0"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">{item.author}</span>
                  <span className="text-xs text-slate-500 mt-0.5">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}