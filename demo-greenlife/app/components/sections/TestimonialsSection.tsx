export default function TestimonialsSection() {
  const testimonials = [
    {
      content: '订阅 GreenLife 半年了，每周的蔬菜都很新鲜，搭配也很合理。孩子现在特别爱吃蔬菜，省心又健康！',
      author: '张妈妈',
      role: '全职妈妈',
      city: '北京',
    },
    {
      content: '作为忙碌的上班族，没时间去菜市场。GreenLife 解决了我的大问题，有机蔬菜直接送到办公室，太方便了。',
      author: '李先生',
      role: 'IT经理',
      city: '上海',
    },
    {
      content: '食材质量真的很好，包装也很仔细。最重要的是，能感觉到他们对有机农业的用心和坚持。',
      author: '王女士',
      role: '营养师',
      city: '广州',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            用户心声
          </h2>
          <p className="text-xl text-textSecondary">
            真实的反馈，是最好的证明
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <p className="text-lg text-textSecondary mb-8 leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.author[0]}
                </div>
                <div>
                  <div className="font-bold text-primary">{item.author}</div>
                  <div className="text-sm text-textSecondary">
                    {item.role} · {item.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
