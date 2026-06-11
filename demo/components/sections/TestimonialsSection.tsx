const testimonials = [
  {
    name: "李明",
    role: "市场营销 → 前端工程师",
    company: "字节跳动",
    salary: "¥22,000",
    quote:
      "自学半年投了200份简历零回复。加入训练营3个月后，拿到字节和美团两个Offer。导师帮我改的简历直接不一样。",
    avatar: "L",
  },
  {
    name: "王芳",
    role: "行政专员 → 全栈工程师",
    company: "阿里巴巴",
    salary: "¥25,000",
    quote:
      "完全零基础，连HTML是什么都不知道。12周后我居然能独立完成电商全栈项目。现在回头看，这个决定改变了我的人生。",
    avatar: "W",
  },
  {
    name: "张伟",
    role: "销售 → 后端工程师",
    company: "腾讯",
    salary: "¥20,000",
    quote:
      "最值的是1v1代码Review。每次被导师指出问题，都感觉自己又进步了一截。现在团队里我的代码质量比科班生还好。",
    avatar: "Z",
  },
];

export default function TestimonialsSection() {
  return (
    <section aria-label="Testimonials" className="py-16 md:py-24 px-4 md:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black text-text-primary uppercase tracking-tight">
            他们做到了，<span className="text-primary">你也可以</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background p-8 border border-neutral hover:border-primary hover:-translate-y-1 transition-all"
            >
              <p className="text-text-secondary leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-text-primary">{t.name}</div>
                  <div className="text-sm text-text-secondary">
                    {t.role} · {t.company}
                  </div>
                  <div className="text-sm text-accent font-bold mt-1">起薪 {t.salary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
