import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function EventCard({ title, description, icon: Icon, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 0 40px rgba(0, 133, 202, 0.2), 0 20px 40px rgba(0, 0, 0, 0.1)' 
      }}
      className="group relative glass-card rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300"
      data-testid={`card-event-${index}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <motion.div
          className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300"
          whileHover={{ rotate: 5 }}
        >
          <Icon className="w-7 h-7 text-primary" />
        </motion.div>

        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Learn more</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
