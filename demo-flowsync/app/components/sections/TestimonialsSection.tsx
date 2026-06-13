export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "张明",
      role: "CEO",
      company: "创想科技",
      content: "使用FlowSync后，我们的团队协作效率提升了3倍。客户满意度从85%上升到95%。",
      result: "效率提升3倍"
    },
    {
      name: "李华",
      role: "运营总监",
      company: "优品电商",
      content: "原本需要2小时的报表生成工作，现在5分钟自动完成。团队有更多时间专注于创意和策略。",
      result: "节省2小时/天"
    },
    {
      name: "王芳",
      role: "产品经理",
      company: "智联软件",
      content: "FlowSync的界面简洁直观，我们的产品团队在1天内就掌握了全部功能。强烈推荐给所有中小企业。",
      result: "1天上手"
    }
  ]

  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden">
      {/* Unsplash background image */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80)',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-16">
          用户真实反馈
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover-lift border border-neutral/20">
              <p className="text-secondary leading-relaxed mb-6">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              <div className="text-primary font-medium">{testimonial.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
