'use client'

import { useState, useEffect } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // 延迟设置初始打开状态，避免 hydration 不匹配
  useEffect(() => {
    setOpenIndex(0)
  }, [])

  const faqs = [
    {
      question: 'FlowSync适合哪些类型的企业？',
      answer: 'FlowSync专为中小企业设计，特别适合需要提升团队协作效率、减少重复工作的企业。无论您是电商、SaaS、咨询还是制造业，只要有工作流程自动化的需求，都能从FlowSync中受益。'
    },
    {
      question: '是否需要编程知识？',
      answer: '完全不需要。FlowSync采用可视化拖拽界面，您可以通过简单的拖拽和配置来创建复杂的工作流程。无需任何编程背景，5分钟即可上手。'
    },
    {
      question: '数据安全如何保障？',
      answer: 'FlowSync采用银行级加密技术保护您的数据。我们已通过SOC 2 Type II认证，支持GDPR合规。数据存储在中国境内的AWS数据中心，确保数据主权和安全。'
    },
    {
      question: '可以集成哪些工具？',
      answer: 'FlowSync支持50+主流企业工具集成，包括钉钉、企业微信、飞书、Salesforce、HubSpot、Slack、Microsoft 365等。如果您的工具不在列表中，我们可以提供API支持。'
    },
    {
      question: '免费试用后如何续费？',
      answer: '免费试用14天后，您可以选择升级到专业版(¥199/月)或企业版(定制价格)。无需绑定信用卡，试用结束后系统会提醒您选择适合的方案。'
    }
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-16">
          常见问题
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-neutral">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-2xl text-primary ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-secondary leading-relaxed">
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
