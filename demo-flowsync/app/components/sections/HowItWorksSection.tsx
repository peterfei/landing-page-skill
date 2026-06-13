export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "注册账户",
      description: "30秒完成注册，无需信用卡"
    },
    {
      number: "2",
      title: "设计流程",
      description: "拖拽组件，可视化配置业务流程"
    },
    {
      number: "3",
      title: "自动运行",
      description: "流程自动执行，团队立即见效"
    }
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Unsplash background image */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80)',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-16">
          3步开始使用
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-normal text-primary mb-4">{step.number}</div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
