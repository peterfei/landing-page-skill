export default function PricingSection() {
  const tiers = [
    {
      name: '早鸟票',
      price: '¥388',
      originalPrice: '¥688',
      badge: '限时特惠',
      features: [
        '3日通票',
        '主舞台区域',
        '美食畅饮券',
        '专属手环',
        '纪念T恤',
      ],
      available: true,
      highlight: false,
    },
    {
      name: 'VIP票',
      price: '¥1288',
      originalPrice: '¥1688',
      badge: '推荐',
      features: [
        '3日通票 + 后台',
        'VIP专属休息区',
        '与DJ合影',
        '美食畅饮无限',
        '专属手环 + 纪念品',
        '快速通道',
        '独立卫生间',
      ],
      available: true,
      highlight: true,
    },
    {
      name: 'VVIP票',
      price: '¥2888',
      originalPrice: '¥3688',
      badge: '尊享',
      features: [
        'VIP全部权益',
        '包厢观演',
        '私人管家',
        '专属停车位',
        '限量周边礼包',
        'Afterparty通行',
      ],
      available: false,
      highlight: false,
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
            选择你的<span className="text-primary">门票</span>
          </h2>
          <p className="text-xl text-white/60">
            三种票型，满足不同需求
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 ${
                tier.highlight
                  ? 'bg-primary border-4 border-accent scale-105'
                  : 'bg-surface border-2 border-primary/20'
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 text-sm font-bold uppercase tracking-wider ${
                    tier.highlight ? 'bg-accent text-background' : 'bg-primary text-white'
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-display text-white mb-4 mt-4">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="text-5xl font-display text-accent mb-2">
                  {tier.price}
                </div>
                {tier.originalPrice && (
                  <div className="text-lg text-white/40 line-through">
                    {tier.originalPrice}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <span className="text-accent text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {tier.available ? (
                <button
                  className={`w-full py-4 text-lg font-bold uppercase transition-all ${
                    tier.highlight
                      ? 'bg-accent text-background hover:bg-white'
                      : 'bg-primary text-white hover:bg-white/20'
                  }`}
                >
                  {tier.available ? '立即购买' : '已售罄'}
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-4 text-lg font-bold uppercase bg-surface text-white/30 cursor-not-allowed"
                >
                  已售罄
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
