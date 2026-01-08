import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Events } from '@/components/Events';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
