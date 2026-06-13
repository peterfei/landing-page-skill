export default function FeaturesSection() {
  const features = [
    {
      icon: '🎧',
      title: '百大DJ阵容',
      description: '全球顶级DJ云集，带来48小时不间断的电音盛宴',
    },
    {
      icon: '✨',
      title: '沉浸体验',
      description: '360度环绕音响 + 全息投影，打造极致视听盛宴',
    },
    {
      icon: '🌍',
      title: '三大舞台',
      description: '主舞台、电子舞台、地下舞台，满足不同音乐品味',
    },
    {
      icon: '🎪',
      title: '互动体验',
      description: '艺术装置、VR体验区、电竞区，全天候精彩不停',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
            为什么选择<span className="text-primary">PULSE</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            不只是电音节，更是一场感官革命
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface p-10 border-2 border-primary/20 hover:border-primary transition-colors group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display text-accent mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-white/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
