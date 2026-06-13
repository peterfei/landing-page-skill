export default function PricingSection() {
  const plans = [
    {
      name: '基础套餐',
      price: '¥99',
      period: '/月',
      description: '适合1-2人家庭',
      features: [
        '每周配送有机蔬菜 8 种',
        '时令水果搭配',
        '免费配送',
        '营养食谱建议',
      ],
      popular: false,
    },
    {
      name: '家庭套餐',
      price: '¥179',
      period: '/月',
      description: '适合3-4人家庭',
      features: [
        '每周配送有机蔬菜 12 种',
        '时令水果 + 有机鸡蛋',
        '免费配送 + 优先配送',
        '个性化营养建议',
        '食谱定制服务',
      ],
      popular: true,
    },
    {
      name: '豪华套餐',
      price: '¥299',
      period: '/月',
      description: '适合5-6人家庭',
      features: [
        '每周配送有机蔬菜 16 种',
        '全套有机食材（蔬果蛋肉）',
        'VIP配送服务',
        '专属营养师咨询',
        '定制化配送方案',
        '农场参观活动',
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            选择适合的套餐
          </h2>
          <p className="text-xl text-textSecondary">
            所有新用户首月享 8 折优惠
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-4 ring-accent scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-accent text-white text-center py-2 font-bold">
                  最受欢迎
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-textSecondary mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-textSecondary">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-textSecondary">
                      <span className="text-primary text-xl">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 text-lg font-bold rounded-2xl transition-all ${
                    plan.popular
                      ? 'bg-accent text-white hover:bg-primary hover:scale-105'
                      : 'bg-primary text-white hover:bg-accent'
                  }`}
                >
                  选择套餐
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
