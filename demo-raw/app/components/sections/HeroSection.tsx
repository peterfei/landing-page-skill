export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background border-b-4 border-border flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-24 w-full">
        {/* Brutalist 标题区块 */}
        <div className="bg-surface text-textInverse p-12 md:p-20 border-4 border-border mb-8">
          <h1 className="text-6xl md:text-9xl font-display font-bold mb-6 uppercase tracking-tight">
            RAW
          </h1>
          <p className="text-2xl md:text-4xl font-display mb-4">
            不妥协的力量训练
          </p>
          <p className="text-xl md:text-2xl opacity-80">
            专注 · 纯粹 · 高效
          </p>
        </div>

        {/* CTA 按钮组 */}
        <div className="flex flex-col md:flex-row gap-6">
          <button className="bg-accent text-textInverse px-12 py-6 text-2xl font-display font-bold border-4 border-border hover:bg-surface transition-colors uppercase">
            预约体验
          </button>
          <button className="bg-background text-text px-12 py-6 text-2xl font-display font-bold border-4 border-border hover:bg-surface hover:text-textInverse transition-colors uppercase">
            了解训练体系
          </button>
        </div>

        {/* 粗犷的数字证明 */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="border-4 border-border p-6 text-center">
            <div className="text-5xl md:text-7xl font-display font-bold">500+</div>
            <div className="text-sm md:text-base mt-2 uppercase">训练者</div>
          </div>
          <div className="border-4 border-border p-6 text-center">
            <div className="text-5xl md:text-7xl font-display font-bold">98%</div>
            <div className="text-sm md:text-base mt-2 uppercase">达成率</div>
          </div>
          <div className="border-4 border-border p-6 text-center">
            <div className="text-5xl md:text-7xl font-display font-bold">12周</div>
            <div className="text-sm md:text-base mt-2 uppercase">蜕变周期</div>
          </div>
        </div>
      </div>
    </section>
  )
}
