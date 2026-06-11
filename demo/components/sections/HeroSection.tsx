export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-block bg-primary/20 text-primary px-4 py-1 text-sm font-bold uppercase tracking-wider mb-6">
            应届毕业生专属
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-text-primary leading-tight uppercase tracking-tighter">
            零基础应届生
            <span className="text-gradient block mt-2">90天拿到编程Offer</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-lg">
            不是科班出身？系统化训练营带你从 0 到 1。平均学员薪资涨幅
            <span className="text-accent font-bold">80%</span>，已有
            <span className="text-accent font-bold">2,000+</span> 应届生成功转行。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#signup"
              className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 font-bold uppercase tracking-wide hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              预约免费试听 — 开启高薪之路
            </a>
            <a
              href="#how-it-works"
              className="inline-flex justify-center items-center bg-surface text-text-primary px-8 py-4 font-medium border border-neutral hover:border-text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              了解学习路径
            </a>
          </div>
          <p className="mt-4 text-sm text-text-muted">
            试听完全免费 · 不满意全额退款 · 7×24 导师答疑
          </p>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="bg-surface border border-neutral p-6 md:p-8 relative">
            <div className="absolute -top-3 -right-3 bg-accent text-background px-4 py-1 text-sm font-black uppercase">
              限时开放
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-text-secondary text-sm">直播授课中</span>
              </div>
              <div className="bg-background p-4 font-mono text-sm text-text-secondary">
                <p className="text-primary font-bold">$ npx create-offer</p>
                <p>Creating your dream job...</p>
                <p className="text-accent">✓ 简历通过初筛</p>
                <p className="text-accent">✓ 技术面试通过</p>
                <p className="text-accent">✓ 收到 Offer: ¥18,000/月</p>
              </div>
              <div className="flex gap-2">
                <div className="h-2 flex-1 bg-primary" />
                <div className="h-2 flex-1 bg-primary" />
                <div className="h-2 flex-1 bg-primary" />
                <div className="h-2 flex-1 bg-neutral" />
              </div>
              <p className="text-xs text-text-muted text-center">本批次剩余 23 个名额</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
