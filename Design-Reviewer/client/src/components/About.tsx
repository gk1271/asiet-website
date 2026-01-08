import { motion } from 'framer-motion';
import { Users, Lightbulb, Mic2, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Networking',
    description: 'Connect with like-minded peers, industry professionals, and ACM members worldwide.',
  },
  {
    icon: Lightbulb,
    title: 'Workshops',
    description: 'Hands-on sessions covering the latest in AI, web dev, competitive programming, and more.',
  },
  {
    icon: Mic2,
    title: 'Distinguished Speakers',
    description: 'Learn from tech leaders, researchers, and successful alumni who share their journeys.',
  },
  {
    icon: Rocket,
    title: 'Career Growth',
    description: 'Access to ACM resources, certifications, and pathways to boost your professional journey.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Revitalizing Tech Culture at <span className="gradient-text">ASIET</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The ASIET ACM Student Chapter is on a mission to foster a vibrant community of technologists, 
              innovators, and problem-solvers. We're bringing fresh energy to computing education through 
              engaging events, collaborative projects, and industry connections.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As part of the world's largest computing society, our members gain access to cutting-edge 
              resources, global networking opportunities, and a platform to shape the future of technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-5 md:p-6"
                data-testid={`card-benefit-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
