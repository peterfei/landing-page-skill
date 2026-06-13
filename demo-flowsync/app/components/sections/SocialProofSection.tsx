export default function SocialProofSection() {
  return (
    <section className="py-16 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {['Acme Corp', 'GlobalTech', 'InnovateLab', 'StartupHub'].map((company) => (
            <div key={company} className="text-center text-muted font-medium">
              {company}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-normal text-primary">5,000+</div>
            <div className="text-sm text-secondary mt-1">团队使用</div>
          </div>
          <div>
            <div className="text-3xl font-normal text-primary">3x</div>
            <div className="text-sm text-secondary mt-1">效率提升</div>
          </div>
          <div>
            <div className="text-3xl font-normal text-primary">4.8/5</div>
            <div className="text-sm text-secondary mt-1">用户评分</div>
          </div>
        </div>
      </div>
    </section>
  )
}
