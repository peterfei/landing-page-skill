export default function CTASection() {
  const benefits = [
    '品牌健康度诊断框架',
    '内容战略规划模板',
    '效果评估指标体系',
    '行业最佳实践案例',
  ]

  return (
    <section className="py-24 px-6 bg-primary text-surface relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-display mb-6">
          立即获取品牌策略白皮书
        </h2>
        <p className="text-lg md:text-xl text-surface/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          深入了解如何构建系统化的品牌内容战略，提升企业市场影响力和品牌价值。
        </p>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary-light px-4 py-2 text-sm text-surface/90"
            >
              {benefit}
            </div>
          ))}
        </div>

        {/* CTA Form */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="输入您的企业邮箱"
            className="w-full sm:flex-1 px-6 py-4 bg-surface text-primary border-0 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-surface px-8 py-4 text-base font-medium transition-colors whitespace-nowrap">
            下载白皮书
          </button>
        </div>

        <p className="mt-8 text-sm text-surface/60">
          免费下载 · 无需注册 · PDF 格式
        </p>
      </div>
    </section>
  )
}
