export default function FeaturesSection() {
  const features = [
    {
      title: "可视化流程设计",
      description: "拖拽式界面，无需编码，轻松创建复杂业务流程"
    },
    {
      title: "多系统集成",
      description: "无缝连接50+主流工具，数据自动流转"
    },
    {
      title: "实时数据分析",
      description: "自动生成业务报表，关键指标实时监控"
    }
  ]

  return (
    <section className="py-24 px-6 bg-surface relative overflow-hidden">
      {/* Unsplash background image */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)',
          }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-4">
          强大功能，简单易用
        </h2>
        <p className="text-center text-secondary mb-16 max-w-2xl mx-auto">
          为中小企业量身打造，无需技术背景即可快速上手
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 hover-lift shadow-sm border border-neutral/20">
              <h3 className="text-xl font-medium mb-3 text-primary">{feature.title}</h3>
              <p className="text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
