export default function TestimonialsSection() {
  const testimonials = [
    {
      content: '这是我这辈子参加过最震撼的电音节！阵容太强大了，三天三夜完全不够玩！',
      author: '小王',
      role: '电音爱好者',
      rating: 5,
    },
    {
      content: '现场氛围简直炸裂！音响效果和视觉配合完美，明年一定要早点买票！',
      author: 'DJ Li',
      role: '音乐制作人',
      rating: 5,
    },
    {
      content: '从北京飞过来完全值得！认识了好多志同道合的朋友，已经约好明年再见！',
      author: '张三',
      role: '资深乐迷',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display text-white mb-4">
            乐迷<span className="text-primary">说</span>
          </h2>
          <p className="text-xl text-white/60">
            真实反馈，口碑见证
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-primary/20"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-accent">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                "{item.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{item.author}</div>
                  <div className="text-sm text-white/50">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
