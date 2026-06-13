export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary to-emerald-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-6xl mb-8">🌱</div>
        <h2 className="text-4xl md:text-5xl text-white mb-6">
          开启健康生活
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          新用户首月享 8 折优惠，现在订阅即可体验新鲜有机蔬菜直送到家
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-primary px-16 py-6 text-xl font-bold rounded-3xl hover:bg-accent hover:scale-105 transition-all shadow-2xl">
            立即订阅
          </button>
          <button className="border-2 border-white text-white px-16 py-6 text-xl font-bold rounded-3xl hover:bg-white/10 transition-all">
            联系客服
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>新用户首月8折</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>随时取消</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✓</span>
            <span>满意保证</span>
          </div>
        </div>
      </div>
    </section>
  )
}
