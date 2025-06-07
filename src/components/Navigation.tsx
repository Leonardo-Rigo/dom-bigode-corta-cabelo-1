
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🥸</span>
            <h1 className="text-xl font-bold text-primary">Dom Bigode</h1>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('frases')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Frases
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open('https://wa.me/5551999999999', '_blank')}
          >
            <Phone className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
