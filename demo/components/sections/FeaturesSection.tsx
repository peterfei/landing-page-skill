const features = [
  {
    title: "导师1v1带教",
    desc: "不是看视频自学。每个学员配备在职工程师导师，每周1v1代码Review。",
    icon: "👨‍💻",
  },
  {
    title: "6个实战项目",
    desc: "从Todo应用到电商全栈，每个项目都是简历上的亮点，面试官会问你做过什么。",
    icon: "🚀",
  },
  {
    title: "大厂内推资源",
    desc: "合作企业200+，毕业即内推。导师亲自帮你优化简历，直通面试。",
    icon: "🎯",
  },
];

export default function FeaturesSection() {
  return (
    <section aria-label="Features" className="py-16 md:py-24 px-4 md:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black text-text-primary uppercase tracking-tight">
            我们不卖课，我们<span className="text-primary">解决问题</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background p-8 border border-neutral hover:border-primary hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{f.title}</h3>
              <p className="text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
