export default function FeaturesSection() {
  const features = [
    {
      icon: '🥬',
      title: '100% 有机认证',
      description: '所有产品均通过国家有机认证，追溯源头，安心食用',
    },
    {
      icon: '🚚',
      title: '当日采摘配送',
      description: '从农场到餐桌只需24小时，锁住最新鲜的口感',
    },
    {
      icon: '🌱',
      title: '时令蔬菜搭配',
      description: '根据季节变化，科学搭配营养均衡的蔬菜组合',
    },
    {
      icon: '♻️',
      title: '环保包装',
      description: '使用可降解包装材料，践行环保理念',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            为什么选择 GreenLife
          </h2>
          <p className="text-xl text-textSecondary">
            让健康生活触手可及
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-textSecondary text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
