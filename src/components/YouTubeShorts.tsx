const YouTubeShorts = () => {
  const shorts = [
    {
      id: "7krVMuIYHzc",
      title: "Aprende inglés con Rosa"
    },
    {
      id: "ZXHBTuM7mfc",
      title: "Aprende inglés con Rosa"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Videos Cortos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprende inglés en menos de un minuto con nuestros shorts
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {shorts.map((short) => (
            <a
              key={short.id}
              href={`https://www.youtube.com/shorts/${short.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-[280px] h-[500px] bg-black relative">
                <iframe
                  src={`https://www.youtube.com/embed/${short.id}?loop=1`}
                  title={short.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-sm font-medium">{short.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeShorts;
