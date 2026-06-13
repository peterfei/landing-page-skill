export default function SocialProofSection() {
  const clients = [
    { name: 'TechCorp', type: '科技企业' },
    { name: 'GlobalBrand', type: '消费品' },
    { name: 'FinanceHub', type: '金融服务' },
    { name: 'MediaNet', type: '媒体集团' },
    { name: 'InnovateCo', type: '创新公司' },
  ]

  const stats = [
    { number: '500+', label: '服务企业' },
    { number: '85%', label: '品牌价值提升' },
    { number: '3年', label: '平均合作周期' },
  ]

  return (
    <section className="py-16 px-6 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-display text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-sm text-muted mb-8 tracking-widest uppercase">信任我们的企业</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <div key={index} className="text-primary font-display text-lg md:text-xl opacity-60 hover:opacity-100 transition-opacity">
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
