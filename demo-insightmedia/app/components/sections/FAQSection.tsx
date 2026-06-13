'use client'

import { useState, useEffect } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Hydration fix: defer initial state
  useEffect(() => {
    setOpenIndex(0)
  }, [])

  const faqs = [
    {
      question: '品牌内容战略咨询适合哪些企业？',
      answer: '我们的服务主要面向 B2B 企业、中型消费品公司和转型中的传统企业。这些企业通常已有一定品牌基础，但希望通过系统化的内容战略来提升品牌影响力和市场认知度。我们不建议初创企业在早期阶段投入大量资源在品牌建设上。',
    },
    {
      question: '咨询项目的周期是多久？',
      answer: '标准项目周期为 6-12 个月，具体取决于企业规模和战略复杂度。第一阶段（诊断和战略规划）通常需要 2-3 个月，后续阶段（落地执行和优化）根据企业需求可灵活调整。我们也提供长期的年度战略合作服务。',
    },
    {
      question: '如何确保咨询方案能够落地执行？',
      answer: '我们采用&quot;咨询+辅导&quot;的模式，不仅提供战略方案，还会协助企业团队建立内容生产流程，提供培训和持续支持。所有方案都基于企业实际情况设计，确保可执行性。项目结束后，我们也会提供 3 个月的跟踪辅导期。',
    },
    {
      question: '需要投入哪些资源？',
      answer: '企业需要指定 1-2 名核心对接人员（通常是品牌总监或市场负责人），参与关键决策和执行协调。根据项目规模，可能需要组建 3-5 人的内容团队。我们会协助企业评估现有资源，制定合理的资源配置计划。',
    },
    {
      question: '如何衡量项目效果？',
      answer: '我们建立多维度的效果评估体系，包括品牌健康度指标、内容传播效果、市场反馈数据等。每季度提供详细的评估报告，并与企业共同回顾和优化策略。对于 B2B 企业，我们也会跟踪品牌对销售线索和客户获取的影响。',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">
            常见问题
          </h2>
          <p className="text-lg text-secondary">
            关于品牌内容战略咨询的疑问
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface border border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-surface-alt transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-primary pr-8">
                  {faq.question}
                </span>
                <span className="text-primary text-2xl flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 pt-0 text-secondary leading-relaxed">
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
