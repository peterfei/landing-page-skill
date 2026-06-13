export default function SolutionSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-normal text-primary mb-6">
          一站式工作流自动化
        </h2>
        <p className="text-xl text-secondary leading-relaxed mb-12">
          FlowSync 让您通过简单的拖拽操作，将复杂的业务流程转化为自动化工作流。
          无需编程知识，5分钟即可创建第一个自动化流程。
        </p>
        <div className="bg-surface rounded-lg p-8 text-left">
          <h3 className="text-lg font-medium mb-4">核心价值</h3>
          <ul className="space-y-3 text-secondary">
            <li className="flex items-start">
              <span className="text-primary mr-3">→</span>
              <span>统一平台管理所有业务流程，告别工具分散</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">→</span>
              <span>实时数据看板，关键指标一目了然</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3">→</span>
              <span>智能任务分配，自动提醒和进度跟踪</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
