export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-display text-white mb-6">
          准备好<span className="text-accent">释放</span>了吗？
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          48小时电音狂欢，只等你来。早鸟票限时抢购中，锁定你的专属位置。
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-accent text-background px-16 py-6 text-2xl font-bold uppercase tracking-wider hover:scale-105 transition-transform">
            立即购票
          </button>
          <button className="border-2 border-white text-white px-16 py-6 text-2xl font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
            联系客服
          </button>
        </div>

        <p className="mt-12 text-white/60">
          支持微信/支付宝支付 · 安全保障 · 售后无忧
        </p>
      </div>
    </section>
  )
}
