export default function FAQSection() {
  const faqs = [
    {
      question: '我是新手，能来训练吗？',
      answer: '当然。我们的新手课程会教你基础动作，建立正确的发力模式。强度循序渐进。',
    },
    {
      question: '需要请私教吗？',
      answer: '推荐前12周有私教指导，建立正确的动作模式。之后可选择自主训练或继续私教。',
    },
    {
      question: '训练需要什么装备？',
      answer: '舒适的运动服、训练鞋、护腰、护腕。基础装备我们提供，专业装备建议自备。',
    },
    {
      question: '可以退款吗？',
      answer: '体验周开始前可全额退款。12周计划开始后不退款，但可转让。',
    },
  ]

  return (
    <section className="py-24 bg-background border-b-4 border-border">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section 标题 */}
        <div className="border-4 border-border p-8 mb-12 bg-surface text-textInverse">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            常见问题
          </h2>
        </div>

        {/* FAQ 列表 */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-4 border-border bg-background p-8 hover:bg-surface hover:text-textInverse transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl md:text-5xl font-display font-bold flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold uppercase mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-lg leading-relaxed opacity-80">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
