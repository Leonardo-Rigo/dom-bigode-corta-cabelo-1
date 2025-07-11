
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Onde Nos Encontrar
          </h2>
          <p className="text-xl text-muted-foreground">
            Vem tomar um cafezinho e cortar o cabelo!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">📍 Endereço</h3>
              <p className="text-lg">
                Rua dos Bigodes, 123<br />
                Bairro Centro <br />
                Erechim - RS<br />
                CEP: 99700-010
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">📞 Contato</h3>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(54) 3333-4444 (Fixo)</span>
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span>
                  <span>(54) 99999-9999 (WhatsApp)</span>
                </p>
              </div>
              
              <div className="flex gap-3 mt-4">
                <Button 
                  size="sm"
                  onClick={() => window.open('tel:+555433334444')}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  📞 Ligar
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => window.open('https://wa.me/5554999999999', '_blank')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  💬 WhatsApp
                </Button>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">🕐 Horário de Funcionamento</h3>
              <div className="space-y-2">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 8h às 17h</p>
                <p><strong>Domingo:</strong> Fechado (dia do churrasco)</p>
              </div>
              
              <div className="crooked-frame mt-4">
                <p className="text-sm italic text-center">
                  "Nos feriados a gente avisa no WhatsApp se vai abrir ou não!"
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">🎵 Ambiente Musical</h3>
              <p className="mb-4">
                Aqui toca sertanejo raiz, música gaúcha e às vezes uns clássicos do rock. 
                Se quiser sugerir uma música, é só falar!
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                🎶 Sugerir Música
              </Button>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">☕ Comodidades</h3>
              <ul className="space-y-2">
                <li>✅ Café expresso fresquinho</li>
                <li>✅ Revista Veja e Zero Hora</li>
                <li>✅ Wi-Fi liberado</li>
                <li>✅ Estacionamento na rua</li>
                <li>✅ Ar condicionado no verão</li>
                <li>✅ Conversa boa o ano todo</li>
              </ul>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden border-4 border-primary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.663315012779!2d-52.276702023664434!3d-27.634942323768808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e3138a53171781%3A0x91c0b68513c98e10!2sPra%C3%A7a%20da%20Bandeira%20-%20Centro%2C%20Erechim%20-%20RS%2C%2099700-000!5e0!3m2!1spt-BR!2sbr!4v1750270580317!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Barbearia Dom Bigode"
              />
            </div>
          </div>
        </div>
                  <div className="text-center text-sm text-muted-foreground italic mt-2 pt-[100px]">
              <p >Autores do projeto:  Arthur Follador, Gabriel Picoli, Evelyn Fabisiak, Leonardo Rigo    <br /> 2025 &copy;</p>
              </div>
      </div>
    </section>

    
  );
};

export default Contact;