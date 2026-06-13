export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'RAW改变了我的运动生涯。12周训练，力量提升50%。这里的氛围和训练体系，没有任何健身房能比。',
      author: '赵伟',
      role: '业余力量举运动员',
      achievement: '三大项 500kg',
    },
    {
      quote: '作为一个忙碌的工程师，我需要高效的训练。RAW的周期化体系让我每周只训练3次，但效果显著。',
      author: '孙敏',
      role: '软件工程师',
      achievement: '体脂 35%→18%',
    },
  ]

  return (
    <section className="py-24 bg-background border-b-4 border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 标题 */}
        <div className="border-4 border-border p-8 mb-12 bg-surface text-textInverse">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            真实蜕变
          </h2>
        </div>

        {/* 证言列表 */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-4 border-border p-8 md:p-12 bg-background hover:bg-surface hover:text-textInverse transition-colors"
            >
              <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t-4 border-border pt-6">
                <div>
                  <div className="font-display font-bold text-xl md:text-2xl uppercase mb-2">
                    {testimonial.author}
                  </div>
                  <div className="text-base uppercase opacity-70">
                    {testimonial.role}
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="text-3xl md:text-4xl font-display font-bold uppercase">
                    {testimonial.achievement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
