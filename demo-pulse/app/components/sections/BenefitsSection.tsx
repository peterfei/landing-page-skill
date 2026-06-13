export default function BenefitsSection() {
  const benefits = [
    {
      number: '01',
      title: '释放压力',
      description: '在强劲节拍中彻底释放工作压力，享受纯粹的音乐狂欢',
    },
    {
      number: '02',
      title: '结识同好',
      description: '与来自全国各地的电音爱好者交流，扩展你的音乐圈层',
    },
    {
      number: '03',
      title: '超前体验',
      description: '体验最新的电音作品和前沿的视听技术，引领潮流',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
            你将<span className="text-primary">获得</span>
          </h2>
          <p className="text-xl text-white/60">
            不仅是音乐，更是一次心灵之旅
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-8">
              <div className="text-8xl font-display text-primary/30 flex-shrink-0">
                {benefit.number}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display text-accent mb-4">
                  {benefit.title}
                </h3>
                <p className="text-xl text-white/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
