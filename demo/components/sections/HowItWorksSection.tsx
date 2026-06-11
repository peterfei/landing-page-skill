const steps = [
  {
    step: "01",
    title: "报名测评",
    desc: "填写基本信息，导师 1v1 评估你的基础和目标，定制专属学习方案。",
  },
  {
    step: "02",
    title: "系统学习",
    desc: "12周密集训练，从HTML/CSS到全栈开发，每周1v1代码Review。",
  },
  {
    step: "03",
    title: "项目实战",
    desc: "完成6个企业级项目，积累真实开发经验，打造拿得出手的作品集。",
  },
  {
    step: "04",
    title: "就业冲刺",
    desc: "简历优化 + 模拟面试 + 大厂内推，导师陪你直到拿到Offer。",
  },
];

export default function HowItWorksSection() {
  return (
    <section aria-label="How it works" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black text-text-primary uppercase tracking-tight">
            4步<span className="text-primary">搞定Offer</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            从报名到入职，每一步都有导师陪伴，不走弯路
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="text-5xl font-display font-black text-primary/20 mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
