export default function SocialProofSection() {
  const reviews = [
    { source: 'Vogue', content: '最具匠心的手工皮具工作室' },
    { source: 'ELLE', content: '传承与创新的完美结合' },
    { source: 'GQ', content: '绅士必备的品味之选' },
  ]

  const stats = [
    { value: '100%', label: '手工制作' },
    { value: '99%', label: '客户满意度' },
    { value: '50+', label: '媒体报道' },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Media Reviews */}
        <div className="mb-16">
          <h2 className="text-4xl text-center text-primary mb-12">
            媒体评价
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-background p-8 border-4 border-primary text-center">
                <div className="text-2xl text-primary font-bold italic mb-4">
                  {review.source}
                </div>
                <p className="text-lg text-textSecondary italic">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-display text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-textSecondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
