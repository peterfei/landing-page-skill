export default function HeroSection() {
  return (
    <section className="relative py-32 px-6 max-w-5xl mx-auto text-center overflow-hidden">
      {/* Unsplash background image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50"></div>
      </div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-primary animate-fade-in">
          团队协作效率提升3倍
        </h1>
      <p className="mt-6 text-xl md:text-2xl text-secondary max-w-2xl mx-auto leading-relaxed">
        中小企业的工作流自动化平台。无需编码，5分钟即可上手，让团队专注于创造价值。
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-primary text-white px-8 py-4 text-base hover-lift">
          预约免费演示
        </button>
        <button className="border border-neutral text-primary px-8 py-4 text-base hover-lift">
          查看详细功能
        </button>
      </div>
      <p className="mt-6 text-sm text-muted">
        14天免费试用 · 无需信用卡 · 随时取消
      </p>
      </div>
    </section>
  )
}
