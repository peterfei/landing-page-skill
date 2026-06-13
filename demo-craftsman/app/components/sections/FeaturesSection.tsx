export default function FeaturesSection() {
  const features = [
    {
      icon: '🎨',
      title: '意大利进口皮料',
      description: '严选意大利顶级植鞣革，天然环保，越用越有光泽',
    },
    {
      icon: '🪡',
      title: '全手工缝制',
      description: '传承百年手工缝艺，每一针都凝聚匠人心血',
    },
    {
      icon: '✨',
      title: '专属定制',
      description: '根据您的需求和尺寸，量身打造独一无二的作品',
    },
    {
      icon: '🎁',
      title: '精美包装',
      description: '专属礼盒包装，送礼自用两相宜',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="border-4 border-primary px-6 py-2 bg-background">
              <span className="text-primary text-sm tracking-widest uppercase">
                匠心工艺
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            为什么选择我们
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            每一件作品，都承载着时光的温度
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-10 border-4 border-primary hover:border-accent transition-colors group"
            >
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl text-primary mb-4 text-center italic">
                {feature.title}
              </h3>
              <p className="text-lg text-textSecondary text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
