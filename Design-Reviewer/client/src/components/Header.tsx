import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Aswamedha \'26', href: '#events' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* --- LOGO SECTION START --- */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            data-testid="link-home-logo"
          >
            {/* Logo Image */}
            <img 
              src="/logo1.png" 
              alt="ASIET ACM Logo" 
              className="w-10 h-10 object-contain" // object-contain keeps the aspect ratio correct
            />
            
            {/* Text Label (Optional - delete this div if you only want the image) */}
            <div className="hidden sm:block">
              <span className="font-display font-semibold text-lg text-foreground">ASIET ACM</span>
            </div>
          </motion.a>
          {/* --- LOGO SECTION END --- */}

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/50"
                whileHover={{ y: -2 }}
                data-testid={`link-nav-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-accent/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-theme-toggle"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <Button
                className="btn-sheen bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
                data-testid="button-join-acm"
              >
                Join ACM
              </Button>
            </motion.div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
              data-testid="button-mobile-menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors"
                  data-testid={`link-mobile-${link.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2"
              >
                <Button
                  className="w-full btn-sheen bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  data-testid="button-mobile-join-acm"
                >
                  Join ACM
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}