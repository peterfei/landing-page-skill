export default function HeroSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Unsplash background image - Editorial theme: office/meeting */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/55 to-white/65"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-sm md:text-base tracking-widest uppercase text-muted mb-6 animate-fade-in">
          品牌内容战略咨询
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-display font-display text-primary leading-tight mb-8 animate-slide-up" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}>
          让品牌内容成为企业增长的<br className="hidden md:block" />战略资产
        </h1>
        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto leading-relaxed mb-12 animate-slide-up" style={{ textShadow: '0 1px 4px rgba(255,255,255,0.6)' }}>
          为企业高管和品牌总监提供系统的内容战略规划，<br className="hidden md:block" />
          提升市场认知度，构建持久的品牌影响力。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button className="bg-primary text-surface px-10 py-4 text-base font-medium hover-lift">
            下载品牌策略白皮书
          </button>
          <button className="border-2 border-primary text-primary px-10 py-4 text-base font-medium hover-lift">
            预约咨询顾问
          </button>
        </div>
        <p className="mt-8 text-sm text-muted">
          已为 500+ 企业提供品牌战略咨询服务
        </p>
      </div>
    </section>
  )
}
