import { motion } from 'framer-motion';
import { Linkedin, User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Meenakshi Thrideep',
    role: 'Chairperson',
    linkedin: '#',
  },
  {
    name: 'Mridul Dev K',
    role: 'Vice Chairperson',
    linkedin: '#',
  },
  {
    name: 'Midhun Seemkumar',
    role: 'Secretary',
    linkedin: '#',
  },
  {
    name: 'Thobias M Babu',
    role: 'Treasurer',
    linkedin: '#',
  },
  {
    name: 'Gautham Krishna',
    role: 'Web Master',
    linkedin: '#',
  },
  {
    name: 'Dr Ramani Bai V',
    role: 'Faculty Sponsor',
    linkedin: '#',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="gradient-text">Chapter Officers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals driving innovation and building community at ASIET ACM.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-2xl p-6 text-center"
              data-testid={`card-team-${index}`}
            >
              <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 overflow-hidden">
                <User className="w-12 h-12 text-primary/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">
                {member.role}
              </p>

              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                data-testid={`link-linkedin-${index}`}
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
