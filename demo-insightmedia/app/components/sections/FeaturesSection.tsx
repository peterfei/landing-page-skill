export default function FeaturesSection() {
  const features = [
    {
      title: '品牌诊断与评估',
      description: '系统分析当前品牌内容体系，识别机会与挑战，提供客观的品牌健康度报告。',
    },
    {
      title: '内容战略规划',
      description: '基于企业目标和受众洞察，制定清晰的内容路线图，确保品牌传播的一致性和连贯性。',
    },
    {
      title: '传播体系构建',
      description: '建立完整的内容生产流程和质量管理机制，提升团队内容产出效率和品牌表达力。',
    },
    {
      title: '效果追踪优化',
      description: '建立品牌内容效果评估体系，持续优化策略，最大化品牌传播的投资回报率。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            四大核心服务
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            从诊断到执行，提供端到端的品牌内容战略咨询，帮助企业构建系统化的内容能力。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface p-8 md:p-10 border border-border hover-lift"
            >
              <div className="text-primary text-sm tracking-widest uppercase mb-4">
                服务 {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-display mb-4">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
