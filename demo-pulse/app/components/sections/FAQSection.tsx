'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: '电音节的具体时间和地点？',
      answer: '2024年8月15-17日，在上海国际音乐度假区举办。详细地址将在购票后通过邮件发送。',
    },
    {
      question: '门票可以退款吗？',
      answer: '早鸟票和VIP票支持活动前30天全额退款。30天内不支持退款，但可以转让给他人。',
    },
    {
      question: '现场有哪些注意事项？',
      answer: '请携带有效身份证件入场。禁止携带易燃易爆物品、专业摄像设备。现场提供储物柜和医疗点。',
    },
    {
      question: '未满18岁可以参加吗？',
      answer: '本次活动仅限18岁以上成年人参加。入场时需查验身份证。',
    },
    {
      question: 'VIP票有哪些特殊权益？',
      answer: 'VIP票包含后台通行、VIP休息区、与DJ合影等权益，详见票务说明页面。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
            常见<span className="text-primary">问题</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background border border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white pr-8">
                  {faq.question}
                </span>
                <span className="text-2xl text-primary flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-white/70">
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
