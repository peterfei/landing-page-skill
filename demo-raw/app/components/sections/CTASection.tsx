export default function CTASection() {
  return (
    <section className="py-24 bg-surface text-textInverse">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* 主标题 */}
        <h2 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8">
          准备好了吗？
        </h2>

        {/* 副标题 */}
        <p className="text-xl md:text-3xl mb-12 leading-relaxed">
          停止等待。开始训练。
          <br />
          12周后，你会感谢现在的决定。
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-accent text-textInverse px-16 py-6 text-2xl font-display font-bold border-4 border-border hover:bg-background hover:text-text transition-colors uppercase">
            预约体验
          </button>
          <button className="bg-background text-text px-16 py-6 text-2xl font-display font-bold border-4 border-border hover:bg-accent hover:text-textInverse transition-colors uppercase">
            咨询教练
          </button>
        </div>

        {/* 紧迫感提示 */}
        <div className="mt-12 border-4 border-border bg-background text-text p-6 inline-block">
          <p className="text-lg font-display uppercase">
            新手体验周限招30人 / 本月剩余12个名额
          </p>
        </div>
      </div>
    </section>
  )
}
