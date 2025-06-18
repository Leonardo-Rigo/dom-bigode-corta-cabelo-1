
const About = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="mustache-divider"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary mb-8">
            A História do Bigode Lendário
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg leading-relaxed">
                Era uma vez, em 1992, quando seu Domingos resolveu abrir uma barbearia no bairro. 
                O bigode dele era tão imponente que virou lenda: dizem que era capaz de cortar cabelo 
                só com o movimento dos pelos!
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, três décadas depois, a <strong className="text-primary">Barbearia Dom Bigode</strong> 
                 &nbsp; continua sendo o ponto de encontro dos homens de bom gosto. Aqui você encontra desde 
                o clássico "corte de sempre" até os estilos mais moderninhos.
              </p>
              
              <div className="crooked-frame">
                <p className="text-base italic text-center">
                  "Aqui não é só corte de cabelo, é terapia com tesoura!"
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-accent mb-4">Por que Dom Bigode?</h3>
                <ul className="space-y-2 text-sm">
                  <li>✂️ <strong>32 anos</strong> de tradição e qualidade</li>
                  <li>☕ <strong>Café quentinho</strong> enquanto espera</li>
                  <li>🎵 <strong>Música sertaneja</strong> de raiz</li>
                  <li>💬 <strong>Conversa boa</strong> e fofoca do bairro</li>
                  <li>🏆 <strong>Prêmio</strong> de "Melhor Bigode do RS" (3x consecutivas)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
