export default function SocialProofSection() {
  const stats = [
    { value: '50,000+', label: '去年参与人数' },
    { value: '98%', label: '满意度评分' },
    { value: '100+', label: '合作媒体' },
    { value: '24h', label: '售罄记录' },
  ]

  const partners = [
    { name: 'Beatport', type: '媒体' },
    { name: 'Mixmag', type: '杂志' },
    { name: 'Roland', type: '品牌' },
    { name: 'Pioneer', type: '设备' },
    { name: 'Spotify', type: '平台' },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-display text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-sm text-white/40 mb-8 uppercase tracking-wider">
            合作伙伴与媒体支持
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-display text-white/60 hover:text-primary transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-white/30 mt-1">{partner.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
