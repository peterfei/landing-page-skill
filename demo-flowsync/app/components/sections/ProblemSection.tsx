export default function ProblemSection() {
  const problems = [
    {
      title: "重复工作浪费大量时间",
      description: "团队成员每天花费2小时以上处理重复性任务，数据在不同工具间手动搬运。"
    },
    {
      title: "流程混乱导致效率低下",
      description: "缺乏标准化工作流程，每个部门各自为政，协作沟通成本居高不下。"
    },
    {
      title: "缺乏数据支撑决策",
      description: "业务数据分散在多个系统中，无法实时获取关键指标，决策依赖直觉而非数据。"
    }
  ]

  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-normal text-center mb-16">
          还在为这些痛点烦恼？
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="p-8">
              <h3 className="text-xl font-medium mb-4">{problem.title}</h3>
              <p className="text-gray-300 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
