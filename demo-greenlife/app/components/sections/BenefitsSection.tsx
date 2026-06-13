export default function BenefitsSection() {
  const benefits = [
    {
      number: '01',
      title: '省去购买时间',
      description: '无需周末跑菜市场，我们帮您挑选最新鲜的有机蔬菜',
      icon: '⏰',
    },
    {
      number: '02',
      title: '营养均衡搭配',
      description: '专业营养师根据季节时令，科学搭配蔬菜组合',
      icon: '🥗',
    },
    {
      number: '03',
      title: '支持本地农场',
      description: '直接与本地有机农场合作，支持可持续农业发展',
      icon: '🌾',
    },
    {
      number: '04',
      title: '灵活订阅计划',
      description: '多种套餐可选，随时暂停或取消，满足不同需求',
      icon: '📋',
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-surface to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            订阅带来的改变
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl">
                  {benefit.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-accent font-bold text-sm mb-2">
                  STEP {benefit.number}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
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
