
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      name: "Corte Tradicional",
      price: "R$ 25",
      description: "O clássico que nunca sai de moda. Tesoura na mão e conversa boa.",
      time: "30 min"
    },
    {
      name: "Corte + Barba",
      price: "R$ 35",
      description: "Combo completo para sair renovado. Inclui finalizador e água de colônia.",
      time: "45 min"
    },
    {
      name: "Degradê Diplomático",
      price: "R$ 30",
      description: "Para os jovens moderninhos que querem impressionar. Estilo garantido!",
      time: "40 min"
    },
    {
      name: "Bigode Especial",
      price: "R$ 15",
      description: "Aparar, modelar e dar aquele toque especial no seu bigode.",
      time: "20 min"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground">
            Do clássico ao moderno, sempre com qualidade de primeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{service.name}</CardTitle>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-accent">{service.price}</span>
                  <span className="text-sm text-muted-foreground">{service.time}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="agendamento" className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Agendar Horário
          </h3>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(51) 99999-9999"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Data</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Horário</label>
                <select className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>08:00</option>
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Serviço</label>
              <select className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Corte Tradicional</option>
                <option>Corte + Barba</option>
                <option>Degradê Diplomático</option>
                <option>Bigode Especial</option>
              </select>
            </div>
            
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Confirmar Agendamento
            </Button>
          </form>
          
          <div className="crooked-frame mt-6">
            <p className="text-center text-sm italic">
              "Se preferir, liga pra gente! A voz do povo é o barulho da tesoura."
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('tel:+5551999999999')}
              >
                📞 Ligar
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/5551999999999', '_blank')}
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
