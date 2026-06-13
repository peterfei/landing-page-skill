'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: '有机蔬菜真的比普通蔬菜好吗？',
      answer: '有机蔬菜在种植过程中不使用化学农药、化肥，更环保健康。研究表明，有机蔬菜含有更多抗氧化物质，口感也更佳。',
    },
    {
      question: '配送范围包括哪些地区？',
      answer: '目前覆盖北京、上海、广州、深圳等一线城市，以及周边卫星城市。输入您的地址即可查询是否在配送范围内。',
    },
    {
      question: '可以暂停或取消订阅吗？',
      answer: '当然可以！您可以随时在个人中心暂停或取消订阅，无需任何手续费。我们会根据您的需求灵活调整配送计划。',
    },
    {
      question: '如果对配送的蔬菜不满意怎么办？',
      answer: '我们承诺满意度100%。如果对配送的蔬菜有任何不满意，我们会在下次配送时免费补发或退款。',
    },
    {
      question: '蔬菜如何保证新鲜？',
      answer: '我们在采摘后24小时内完成配送。全程冷链运输，确保蔬菜到达您手中时保持最佳新鲜度。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            常见问题
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-bold text-primary pr-8">
                  {faq.question}
                </span>
                <span className="text-3xl text-primary flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-textSecondary leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
