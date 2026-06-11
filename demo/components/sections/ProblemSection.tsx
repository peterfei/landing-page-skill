const problems = [
  {
    title: "海投简历，零面试",
    desc: "投了100份简历，连一个面试邀请都没有。没有项目经验，简历直接被筛。",
  },
  {
    title: "自学半年，原地打转",
    desc: "B站看了100个视频，GitHub收藏了200个仓库，依然写不出一个完整项目。",
  },
  {
    title: "科班生竞争，毫无优势",
    desc: "计算机专业毕业生这么多，零基础怎么跟他们竞争？",
  },
];

export default function ProblemSection() {
  return (
    <section aria-label="Problem" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-black text-text-primary text-center uppercase tracking-tight">
          这些痛苦，<span className="text-primary">我们懂</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="bg-surface p-8 border-l-4 border-primary">
              <div className="text-4xl font-black text-primary/30 mb-4">0{i + 1}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{p.title}</h3>
              <p className="text-text-secondary leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
