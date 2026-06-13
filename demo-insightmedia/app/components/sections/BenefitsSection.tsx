export default function BenefitsSection() {
  const benefits = [
    {
      icon: '📈',
      title: '品牌价值提升',
      description: '系统化内容策略帮助企业品牌价值平均提升 85%，市场认知度显著增强。',
    },
    {
      icon: '🎯',
      title: '传播效率优化',
      description: '建立清晰的内容生产流程，团队内容产出效率提升 3 倍，成本降低 40%。',
    },
    {
      icon: '💡',
      title: '高管决策支持',
      description: '基于数据的品牌健康度报告和效果评估，为管理层决策提供客观依据。',
    },
    {
      icon: '🔄',
      title: '持续迭代优化',
      description: '建立长期合作机制，定期回顾和调整策略，确保品牌传播与时俱进。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            为企业高管带来的价值
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            不只是提供咨询方案，更帮助企业构建可持续的品牌内容能力
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6">
              <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-medium mb-3 text-primary">{benefit.title}</h3>
                <p className="text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
