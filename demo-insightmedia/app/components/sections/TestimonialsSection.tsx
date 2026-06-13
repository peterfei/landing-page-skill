export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'InsightMedia 帮助我们重新定义了品牌内容战略。在合作的第一年，我们的品牌认知度就提升了 60%，市场营销投入产出比显著提高。',
      author: '陈志明',
      role: 'CEO',
      company: 'TechCorp 科技集团',
      result: '品牌认知度提升 60%',
    },
    {
      quote: '他们不只是提供咨询方案，更帮助我们建立了完整的内容生产体系。现在我们的团队能够持续产出高质量的品牌内容，这比任何单次活动都更有价值。',
      author: '李晓华',
      role: 'CMO',
      company: 'GlobalBrand 消费品',
      result: '内容产出效率提升 3 倍',
    },
    {
      quote: 'InsightMedia 的专业性和深度洞察令我们印象深刻。他们真正理解 B2B 企业的品牌挑战，提供的解决方案既有战略高度，又非常务实可执行。',
      author: '王建国',
      role: '品牌总监',
      company: 'FinanceHub 金融服务',
      result: '品牌价值增长 85%',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface border-t border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            客户真实反馈
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            来自不同行业的企业高管分享合作体验
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-surface-alt p-8 md:p-10 border border-border"
            >
              {/* Quote */}
              <p className="text-secondary leading-relaxed mb-8 text-lg">
                &quot;{item.quote}&quot;
              </p>

              {/* Author */}
              <div className="mb-6">
                <div className="font-medium text-primary mb-1">{item.author}</div>
                <div className="text-sm text-muted">
                  {item.role}, {item.company}
                </div>
              </div>

              {/* Result Badge */}
              <div className="inline-block bg-background px-4 py-2 border border-border">
                <span className="text-accent font-medium text-sm">{item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
