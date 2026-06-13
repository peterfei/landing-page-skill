export default function BenefitsSection() {
  const benefits = [
    '力量提升 50%+',
    '体脂率下降 8-15%',
    '建立终身运动习惯',
    '社群持续支持',
  ]

  return (
    <section className="py-24 bg-surface text-textInverse border-y-4 border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* 主标题 */}
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-16">
          12周后的你
        </h2>

        {/* 收益列表 */}
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border-4 border-border bg-background text-text p-8 md:p-12"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl md:text-4xl font-display font-bold uppercase">
                  {benefit}
                </span>
                <span className="text-4xl md:text-6xl font-display font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 转化提示 */}
        <div className="mt-16 border-4 border-border bg-accent p-8 md:p-12 text-center">
          <p className="text-xl md:text-3xl font-display font-bold uppercase">
            这是你要的结果吗？
          </p>
        </div>
      </div>
    </section>
  )
}
