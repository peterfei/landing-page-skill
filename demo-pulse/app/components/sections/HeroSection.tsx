export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-8">
          <span className="bg-accent text-background px-6 py-2 text-sm font-bold uppercase tracking-wider animate-fade-in">
            2024 年度最期待电音盛事
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-display md:text-[7rem] font-display text-white leading-none mb-6 animate-slide-up">
          PULSE
        </h1>
        <p className="text-2xl md:text-4xl font-display text-primary mb-4 animate-slide-up">
          释放电音本能
        </p>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 animate-slide-up">
          48小时不间断电音狂欢 · 全球百大DJ云集 · 沉浸式视觉体验
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
          <button className="bg-primary text-white px-12 py-5 text-xl font-bold uppercase tracking-wider hover:scale-105 transition-transform">
            抢购早鸟票
          </button>
          <button className="border-2 border-white text-white px-12 py-5 text-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
            观看预告片
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-accent mb-2">50+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">顶级DJ</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-accent mb-2">48h</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">连续狂欢</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-accent mb-2">3</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">狂欢舞台</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
