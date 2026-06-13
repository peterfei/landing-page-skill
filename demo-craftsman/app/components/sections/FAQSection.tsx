'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: '定制需要多长时间？',
      answer: '一般来说，定制周期为 15-20 个工作日。我们会根据产品复杂程度和当前订单量，在咨询时告知您准确的交付时间。',
    },
    {
      question: '可以选择哪些皮料？',
      answer: '我们提供多种意大利进口植鞣革、法国小牛皮等顶级皮料供您选择。每种皮料都有其独特的特性和美感，我们会根据您的需求为您推荐。',
    },
    {
      question: '定制价格是多少？',
      answer: '定制价格根据产品类型、皮料选择、工艺复杂度等因素而定。钱包类起价 ¥800，皮带类起价 ¥500，包袋类起价 ¥2000。具体价格请在咨询时确认。',
    },
    {
      question: '如何保养皮具？',
      answer: '我们会提供详细的保养指南。一般来说，避免阳光直射和潮湿环境，定期使用专用护理油，避免与尖锐物品接触。购买后可享受免费保养服务。',
    },
    {
      question: '可以退换吗？',
      answer: '定制产品不支持退换，但我们在设计过程中会与您充分沟通确认。如果是质量问题，我们提供终身保修服务。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            常见问题
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-surface border-4 border-primary">
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-background transition-colors"
              >
                <span className="text-lg font-bold text-primary pr-8 italic">
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
