export default function BenefitsSection() {
  const benefits = [
    {
      number: '01',
      title: '独特品质',
      description: '每件作品都是独一无二的，体现您的品味与格调',
    },
    {
      number: '02',
      title: '长久陪伴',
      description: '选用顶级皮料，精心保养，越用越有味道',
    },
    {
      number: '03',
      title: '情感寄托',
      description: '承载故事与记忆，成为传家之宝',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background border-y-4 border-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-primary mb-4">
            手工的温度
          </h2>
          <p className="text-lg text-textSecondary">
            不只是物品，更是一段故事
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-8">
              <div className="text-6xl font-display text-primary flex-shrink-0 opacity-30">
                {benefit.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl text-accent mb-4 italic">
                  {benefit.title}
                </h3>
                <p className="text-lg text-textSecondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
