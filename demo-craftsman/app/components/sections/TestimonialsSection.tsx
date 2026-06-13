export default function TestimonialsSection() {
  const testimonials = [
    {
      content: '收到定制钱包时，手工缝制的精细程度让我震撼。每一个细节都体现着匠人的用心。用了一年多，皮质越养越润，完全不像机器制品。',
      author: '李先生',
      role: '企业高管',
      product: '定制钱包',
    },
    {
      content: '给丈夫定制的皮带，他特别喜欢。皮料的质量很好，扣头也是精挑细选的。现在已经是第二次来定制了，这次是给父亲定个公文包。',
      author: '王女士',
      role: '医生',
      product: '定制皮带',
    },
    {
      content: '作为一名设计师，我对品质的要求很高。匠人手作完全满足了我的期待，甚至在某些细节上超出了我的想象。强烈推荐给追求品质的朋友们。',
      author: '张设计师',
      role: '创意总监',
      product: '定制手提包',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background border-y-4 border-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            客户声音
          </h2>
          <p className="text-lg text-textSecondary">
            真实的反馈，是最好的证明
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-surface p-8 border-4 border-primary">
              {/* Quote */}
              <p className="text-lg text-textSecondary mb-8 leading-relaxed italic">
                "{item.content}"
              </p>

              {/* Author */}
              <div className="text-center mb-4">
                <div className="text-xl text-primary font-bold mb-1">
                  {item.author}
                </div>
                <div className="text-sm text-textSecondary">
                  {item.role}
                </div>
              </div>

              {/* Product Tag */}
              <div className="text-center">
                <span className="inline-block bg-primary text-background px-4 py-2 text-sm">
                  {item.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
