export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Border */}
        <div className="border-4 border-primary p-12 bg-background">
          <h2 className="text-4xl md:text-5xl text-primary mb-6">
            开启您的定制之旅
          </h2>
          <p className="text-lg md:text-xl text-textSecondary mb-12 max-w-2xl mx-auto leading-relaxed">
            让我们用匠心，为您打造独一无二的专属皮具。
            从选料到设计，全程一对一服务。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-background px-16 py-5 text-lg font-bold uppercase tracking-wider border-4 border-primary hover:bg-accent transition-colors">
              预约免费咨询
            </button>
            <button className="border-4 border-primary text-primary px-16 py-5 text-lg font-bold uppercase tracking-wider hover:bg-surface transition-colors">
              查看价格
            </button>
          </div>

          <p className="mt-12 text-textSecondary">
            ✓ 免费设计咨询  ✓ 30天无忧退换  ✓ 终身保养服务
          </p>
        </div>
      </div>
    </section>
  )
}
