import { Play } from "lucide-react";

const ProductDemo = () => {
  const videos = [
    {
      id: "7590753683428773140",
      username: "hermess.ai"
    },
    {
      id: "7590166477064490261",
      username: "hermess.ai"
    },
    {
      id: "7592444270888455432",
      username: "hermess.ai"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
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
            <a
              key={video.id}
              href={`https://www.tiktok.com/@${video.username}/video/${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 p-[2px]"
            >
              <div className="w-[200px] h-[355px] bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                <div className="flex flex-col items-center gap-3 z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                  <span className="text-white text-sm font-medium">Ver en TikTok</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs opacity-80">@{video.username}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
