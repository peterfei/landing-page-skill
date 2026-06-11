const stats = [
  { number: "2,000+", label: "成功转行学员" },
  { number: "¥18,000", label: "平均起薪" },
  { number: "92%", label: "3个月内就业率" },
  { number: "4.9/5", label: "学员评分" },
];

export default function SocialProofSection() {
  return (
    <section aria-label="Social Proof" className="py-12 md:py-16 px-4 md:px-6 bg-surface border-y border-neutral">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">
                {stat.number}
              </div>
              <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-50">
          {["字节跳动", "阿里巴巴", "腾讯", "美团", "京东"].map((company) => (
            <span key={company} className="text-text-muted font-bold text-sm tracking-wider">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
