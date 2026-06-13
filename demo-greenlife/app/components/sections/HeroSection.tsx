export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-emerald-50 to-green-100">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-surface rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-24">
        {/* Leaf Icon */}
        <div className="text-8xl mb-8">🌿</div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl text-primary mb-6 rounded-3xl">
          新鲜有机
          <br />
          <span className="text-accent">直送到家</span>
        </h1>
        <p className="text-xl md:text-2xl text-textSecondary mb-8 max-w-2xl mx-auto">
          100% 有机认证 · 从农场到餐桌 · 让健康生活更简单
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-primary text-white px-12 py-5 text-lg font-bold rounded-2xl hover:bg-accent transition-colors shadow-lg">
            订阅有机食材
          </button>
          <button className="bg-surface text-primary px-12 py-5 text-lg font-bold rounded-2xl hover:bg-primary hover:text-white transition-colors shadow-lg">
            了解配送范围
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="bg-white/80 px-6 py-3 rounded-2xl shadow-md">
            <span className="text-primary font-bold">✓</span>
            <span className="text-textSecondary ml-2">100% 有机认证</span>
          </div>
          <div className="bg-white/80 px-6 py-3 rounded-2xl shadow-md">
            <span className="text-primary font-bold">✓</span>
            <span className="text-textSecondary ml-2">当日采摘</span>
          </div>
          <div className="bg-white/80 px-6 py-3 rounded-2xl shadow-md">
            <span className="text-primary font-bold">✓</span>
            <span className="text-textSecondary ml-2">免费配送</span>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105.8C120 91.7 240 63.3 360 63.3C480 63.3 600 91.7 660 105.8C720 120 840 120 960 105.8C1080 91.7 1200 63.3 1320 63.3C1380 63.3 1410 75.8 1440 82.9V120H0Z" fill="#f0fdf4" fillOpacity="0.5"/>
          <path d="M0 120L60 105.8C120 91.7 240 63.3 360 63.3C480 63.3 600 91.7 660 105.8C720 120 840 120 960 105.8C1080 91.7 1200 63.3 1320 63.3C1380 63.3 1410 75.8 1440 82.9V120H0Z" fill="#dcfce7" fillOpacity="0.3"/>
        </svg>
      </div>
    </section>
  )
}
