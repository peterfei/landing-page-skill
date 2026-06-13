export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: '初步诊断',
      description: '深度访谈，了解品牌现状和目标，进行全面品牌内容体系评估。',
    },
    {
      number: '02',
      title: '战略规划',
      description: '基于诊断结果，制定定制化品牌内容战略方案和执行路线图。',
    },
    {
      number: '03',
      title: '落地执行',
      description: '协助企业团队建立内容生产流程，提供培训和持续辅导支持。',
    },
    {
      number: '04',
      title: '追踪优化',
      description: '定期评估效果，优化策略，确保品牌传播持续改进和迭代。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            合作流程
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            四个阶段，系统化构建品牌内容战略能力
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-6xl md:text-7xl font-display text-primary opacity-20 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative -mt-12">
                <h3 className="text-xl font-medium mb-3 text-primary">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted">
            平均项目周期：6-12 个月 | 团队规模：2-4 人
          </p>
        </div>
      </div>
    </section>
  )
}
