export default function PricingSection() {
  const plans = [
    {
      name: '免费版',
      price: '¥0',
      period: '永久免费',
      features: ['1个工作流', '2个集成', '基础数据分析', '社区支持'],
      cta: '免费开始',
      highlight: false
    },
    {
      name: '专业版',
      price: '¥199',
      period: '/月',
      features: ['无限工作流', '50+集成', '高级数据分析', '优先邮件支持', '自定义域名', 'API访问'],
      cta: '开始试用',
      highlight: true
    },
    {
      name: '企业版',
      price: '定制',
      period: '联系销售',
      features: ['所有专业版功能', '专属客户经理', '私有化部署', 'SLA保障', '定制开发'],
      cta: '联系销售',
      highlight: false
    }
  ]

  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-4">
          简单透明的定价
        </h2>
        <p className="text-center text-secondary mb-16">
          14天免费试用专业版，无需信用卡
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border p-8 bg-white hover-lift transition-shadow ${
                plan.highlight ? 'border-2 border-primary shadow-lg' : 'border-neutral shadow-sm'
              }`}
            >
              <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-normal">{plan.price}</span>
                <span className="text-secondary ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-secondary">
                    <span className="text-primary mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 text-center ${
                  plan.highlight
                    ? 'bg-primary text-white'
                    : 'border border-primary text-primary'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
