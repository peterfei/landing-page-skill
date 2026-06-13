export default function PricingSection() {
  return (
    <section className="py-24 bg-surface text-textInverse border-y-4 border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 标题 */}
        <div className="border-4 border-border bg-background text-text p-8 mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
            选择你的计划
          </h2>
        </div>

        {/* 价格方案 */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 基础计划 */}
          <div className="border-4 border-border bg-background text-text">
            <div className="p-8">
              <div className="text-6xl font-display font-bold mb-4">01</div>
              <h3 className="text-2xl font-display font-bold uppercase mb-4">
                体验周
              </h3>
              <div className="text-4xl font-display font-bold mb-6">
                ¥299
                <span className="text-lg">/周</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>2次私教指导</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>体测评估</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>训练计划定制</span>
                </li>
              </ul>
              <button className="w-full bg-surface text-textInverse py-4 px-6 text-xl font-display font-bold border-4 border-border hover:bg-accent transition-colors uppercase">
                开始体验
              </button>
            </div>
          </div>

          {/* 12周计划（推荐） */}
          <div className="border-4 border-border bg-accent text-textInverse">
            <div className="p-8">
              <div className="text-6xl font-display font-bold mb-4">02</div>
              <h3 className="text-2xl font-display font-bold uppercase mb-4">
                12周蜕变
              </h3>
              <div className="text-4xl font-display font-bold mb-6">
                ¥4,999
                <span className="text-lg">/期</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>36次系统训练</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>营养方案定制</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>周期化数据分析</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>社群支持</span>
                </li>
              </ul>
              <button className="w-full bg-surface text-textInverse py-4 px-6 text-xl font-display font-bold border-4 border-border hover:bg-accent transition-colors uppercase">
                立即加入
              </button>
            </div>
          </div>

          {/* 年度计划 */}
          <div className="border-4 border-border bg-background text-text">
            <div className="p-8">
              <div className="text-6xl font-display font-bold mb-4">03</div>
              <h3 className="text-2xl font-display font-bold uppercase mb-4">
                年度会员
              </h3>
              <div className="text-4xl font-display font-bold mb-6">
                ¥16,999
                <span className="text-lg">/年</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>无限次训练</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>比赛准备支持</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>私教包月</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">→</span>
                  <span>装备折扣</span>
                </li>
              </ul>
              <button className="w-full bg-surface text-textInverse py-4 px-6 text-xl font-display font-bold border-4 border-border hover:bg-accent transition-colors uppercase">
                成为会员
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
