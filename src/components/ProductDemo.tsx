const ProductDemo = () => {
  const videos = [
    { id: "TVNdJvrckUE" },
    { id: "wr3ceeXf0hM" },
    { id: "LGj0wZt3J58" }
  ];

  return (
    <section id="demo" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prueba de Uso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mira cómo nuestros usuarios aprenden inglés con Rosa
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-[2px]"
            >
              <div className="w-[200px] h-[355px] bg-black rounded-2xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="YouTube Short"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
