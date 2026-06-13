export default function SocialProofSection() {
  return (
    <section className="py-24 bg-background border-b-4 border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 标题 */}
        <div className="border-4 border-border p-8 mb-12 bg-surface text-textInverse">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            训练者说
          </h2>
        </div>

        {/* 证言网格 */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              text: '6个月，深蹲从60kg到180kg。这里没有废话，只有结果。',
              author: '张强',
              result: '深蹲 180kg',
            },
            {
              text: '减重20kg，但肌肉量增加8kg。科学的周期化训练体系。',
              author: '李明',
              result: '减重 20kg',
            },
            {
              text: '第一次感受真正的训练强度。现在无法想象回到传统健身房。',
              author: '王芳',
              result: '硬拉 140kg',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="border-4 border-border bg-background p-8 hover:bg-surface hover:text-textInverse transition-colors"
            >
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="border-t-4 border-border pt-6">
                <div className="font-display font-bold uppercase text-xl mb-2">
                  {testimonial.author}
                </div>
                <div className="text-sm uppercase opacity-70">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
