
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Quotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    "Água com gás é refrigerante de rico",
    "Bigode é caráter na cara do homem",
    "Grêmio sobe, mas o preço do corte também",
    "Cabelo cortado é alma lavada",
    "Aqui não corta cabelo, molda personalidade",
    "Se não tem paciência pra esperar, não tem cabelo pra cortar",
    "Tesoura cega não corta, barbeiro bravo não conversa",
    "Bigode sem cera é como churrasco sem sal"
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  return (
    <section id="frases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frases da Semana
          </h2>
          <p className="text-xl text-muted-foreground">
            Sabedoria popular direto da cadeira do barbeiro
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="crooked-frame text-center mb-8">
            <p className="text-2xl italic text-primary font-medium">
              "{quotes[currentQuote]}"
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              - Ouvido na barbearia, semana passada
            </p>
          </div>

          <div className="text-center mb-8">
            <Button 
              onClick={nextQuote}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Próxima Pérola 💎
            </Button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">
              Manda tua frase!
            </h3>
            <div className="space-y-4">
              <textarea 
                className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
                placeholder="Conta aí uma frase que tu ouviu na barbearia ou na vida..."
              />
              <div className="flex gap-2">
                <input 
                  type="text" 
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Teu nome (opcional)"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar
                </Button>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground italic">
                * As melhores frases viram quadro na parede da barbearia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
