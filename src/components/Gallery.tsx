
const Gallery = () => {
  const classicCuts = [
    { name: "Risca da Responsa", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
    { name: "Moicano do Vovô", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" },
    { name: "Corte Copa do Mundo", image: "https://i.ibb.co/RT11DVFb/ronaldo.jpg" }
  ];

  const modernCuts = [
    { name: "Degradê Diplomático", image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d" },
    { name: "Fade do Futuro", image: "https://i.ibb.co/jZ4s267p/Fade-do-futuro.jpg" },
    { name: "Undercut Universitário", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" }
  ];

  return (
    <section id="galeria" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Galeria de Cortes
          </h2>
          <p className="text-xl text-muted-foreground">
            Do clássico da várzea ao moderno estiloso
          </p>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-8 text-center">
              🏆 Clássicos da Várzea
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {classicCuts.map((cut, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg border-4 border-primary transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={cut.image} 
                      alt={cut.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                      <h4 className="font-bold text-primary text-lg">{cut.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mustache-divider"></div>

          <div>
            <h3 className="text-2xl font-bold text-accent mb-8 text-center">
              ✨ Estilos Jovens Moderninhos
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {modernCuts.map((cut, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg border-4 border-accent transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={cut.image} 
                      alt={cut.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                      <h4 className="font-bold text-accent text-lg">{cut.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
