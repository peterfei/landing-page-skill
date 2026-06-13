export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center border-y-4 border-primary bg-background overflow-hidden">
      {/* Decorative Border Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, #78350f 0px, #78350f 1px, transparent 1px, transparent 20px)',
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
        {/* Vintage Badge */}
        <div className="inline-block mb-8">
          <div className="border-4 border-primary px-8 py-3 bg-surface">
            <span className="text-primary text-sm tracking-widest uppercase">
              传承 · 工艺 · 品质
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl text-primary mb-6 animate-fade-in">
          匠人手作
        </h1>
        <p className="text-2xl md:text-3xl text-secondary italic mb-8">
          "每一件作品，都承载着时光的温度"
        </p>
        <p className="text-lg md:text-xl text-textPrimary max-w-2xl mx-auto mb-12 leading-relaxed">
          传承百年手工皮艺，从意大利进口顶级皮料，到匠心独运的缝制工艺，
          为您打造独一无二的专属皮具。
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-background px-12 py-5 text-lg font-bold uppercase tracking-wider border-4 border-primary hover:bg-accent transition-colors">
            预约定制咨询
          </button>
          <button className="border-4 border-primary text-primary px-12 py-5 text-lg font-bold uppercase tracking-wider hover:bg-surface transition-colors">
            查看作品集
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-primary mb-2">100+</div>
            <div className="text-sm text-textSecondary uppercase tracking-wider">手工匠人</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-primary mb-2">5000+</div>
            <div className="text-sm text-textSecondary uppercase tracking-wider">满意客户</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display text-primary mb-2">15年</div>
            <div className="text-sm text-textSecondary uppercase tracking-wider">工艺传承</div>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-primary opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-primary opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary opacity-50"></div>
    </section>
  )
}
