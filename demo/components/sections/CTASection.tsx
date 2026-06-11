export default function CTASection() {
  return (
    <section aria-label="Call to action" className="py-20 md:py-32 px-4 md:px-6 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-black text-text-primary uppercase tracking-tight leading-tight">
          还在犹豫？<br />
          <span className="text-primary">试听不要钱</span>
        </h2>
        <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
          免费试听1节正式课，感受导师水平和学习氛围。不满意直接走，没有任何损失。
        </p>
        <div className="mt-10">
          <a
            href="#signup"
            className="inline-flex justify-center items-center bg-primary text-white px-10 py-5 font-bold uppercase tracking-wide hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            立即预约免费试听
          </a>
        </div>
        <p className="mt-4 text-sm text-text-muted">
          本批次仅剩 23 个名额 · 下一期涨价 ¥1,000
        </p>
      </div>
    </section>
  );
}
