
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <span className="text-6xl mb-4 block">🥸</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-4">
                Barbearia<br />
                <span className="text-accent">Dom Bigode</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                O lugar para grandes homens
              </p>
            </div>
            
            <div className="crooked-frame">
              <p className="text-lg italic text-center">
                "Bigode é caráter na cara do homem"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Agendar Horário
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('tel:+5551999999999')}
              >
                <Phone className="w-4 h-4 mr-2" />
                (51) 99999-9999
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-primary transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://i.pinimg.com/originals/3e/ae/24/3eae24855b03862435f9430cd3f2e815.jpg" 
                alt="Interior da Barbearia Dom Bigode"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg transform -rotate-3">
              <p className="font-bold text-sm">
                Ambiente aconchegante<br />
                desde 1992!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
