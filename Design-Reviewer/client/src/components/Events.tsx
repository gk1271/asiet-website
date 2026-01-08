import { motion } from 'framer-motion';
import { Code2, MessageSquare, Map } from 'lucide-react';
import { EventCard } from './EventCard';

const events = [
  {
    title: 'Blind Coding',
    description: 'Test your programming skills with the screen turned off. Can you code without seeing your code? A true test of muscle memory and logic.',
    icon: Code2,
  },
  {
    title: 'Prompt Wars',
    description: 'Battle it out in the age of AI. Craft the perfect prompts to solve challenges and outmaneuver your opponents in this creative showdown.',
    icon: MessageSquare,
  },
  {
    title: 'Tech Scavenger Hunt',
    description: 'Race against time to solve puzzles, decode clues, and discover hidden treasures across campus. Teamwork and tech skills combined.',
    icon: Map,
  },
];

export function Events() {
  return (
    <section id="events" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            Featured Event
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Catch us at <span className="gradient-text">Aswamedha</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at ASIET's biggest tech fest. Three exciting events, countless opportunities to showcase your skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <EventCard
              key={event.title}
              title={event.title}
              description={event.description}
              icon={event.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
