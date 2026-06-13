export default function FeaturesSection() {
  const features = [
    {
      number: '01',
      title: '纯粹训练',
      description: '没有花哨设备。只有杠铃、哑铃和你的意志。',
    },
    {
      number: '02',
      title: '科学体系',
      description: '基于力量举和健美黄金时代训练法。',
    },
    {
      number: '03',
      title: '数据驱动',
      description: '每次训练记录。每周数据分析。每月目标复盘。',
    },
    {
      number: '04',
      title: '社群氛围',
      description: '这里没有社交，只有并肩作战的伙伴。',
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 标题 */}
        <div className="border-4 border-border p-8 mb-12 bg-surface text-textInverse">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase">
            训练特色
          </h2>
        </div>

        {/* 特性网格 */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-4 border-border p-8 md:p-12 bg-background hover:bg-surface hover:text-textInverse transition-colors"
            >
              <div className="text-4xl md:text-6xl font-display font-bold mb-6">
                {feature.number}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase">
                {feature.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
