"use client";
import { motion } from 'framer-motion';

const stats = [
  { value: "+1.200", label: "Notas emitidas/dia pelos clientes" },
  { value: "15min", label: "Para chegar no contador" },
  { value: "98%", label: "De clientes satisfeitos" },
  { value: "24/7", label: "Sistema online, sem queda" }
];

export default function StatsStrip() {
  return (
    <div className="bg-surface-alt border-y border-border py-12">
      <div className="max-w-[1240px] mx-auto px-[clamp(20px,4vw,48px)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="text-4xl md:text-[38px] font-black text-brand-blueDark tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-ink-dim uppercase tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}