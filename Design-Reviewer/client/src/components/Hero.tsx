import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// FIXED: Removed the broken local import
// import heroImage from '../assets/generated_images/abstract_tech_3d_illustration.png'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
} as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-background dark:from-accent/10" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Association for Computing Machinery
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-foreground">Innovating at</span>
              <br />
              <span className="gradient-text">ASIET</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              The Official Student Chapter of the Association for Computing Machinery.
              Building tomorrow's innovators, one line of code at a time.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="btn-sheen bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg gap-2 group"
                  data-testid="button-hero-join"
                >
                  Join Our Chapter
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 py-6 text-lg border-2"
                  data-testid="button-hero-events"
                >
                  Explore Events
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Events Hosted</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Active</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <motion.img
                // FIXED: Use a secure HTTPS placeholder image
                src="image3.jpg"
                alt="Abstract technology illustration"
                className="relative w-full max-w-lg rounded-3xl float-animation"
                data-testid="img-hero"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}