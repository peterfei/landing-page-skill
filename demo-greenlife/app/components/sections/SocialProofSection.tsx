export default function SocialProofSection() {
  const stats = [
    { value: '10,000+', label: '订阅家庭' },
    { value: '50+', label: '合作农场' },
    { value: '98%', label: '满意度' },
    { value: '500吨', label: '年配送量' },
  ]

  const certifications = [
    { name: '中国有机认证', icon: '🏷️' },
    { name: 'ISO22000', icon: '✅' },
    { name: '绿色食品', icon: '🌿' },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-textSecondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <p className="text-textSecondary mb-8">权威认证</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{cert.icon}</div>
                <div className="text-sm text-primary font-bold">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
