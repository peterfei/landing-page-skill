export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-surface/70 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display text-surface mb-4">InsightMedia</h3>
            <p className="leading-relaxed max-w-md">
              帮助企业高管构建具有战略影响力的品牌内容体系，提升市场认知度和商业价值。
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-surface font-medium mb-4">联系我们</h4>
            <ul className="space-y-3">
              <li>北京市朝阳区建国门外大街</li>
              <li>contact@insightmedia.com</li>
              <li>400-123-4567</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-surface font-medium mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-surface transition-colors">服务介绍</a></li>
              <li><a href="#case-studies" className="hover:text-surface transition-colors">客户案例</a></li>
              <li><a href="#about" className="hover:text-surface transition-colors">关于我们</a></li>
              <li><a href="#contact" className="hover:text-surface transition-colors">联系方式</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} InsightMedia. All rights reserved.
          </p>
          <p className="text-sm mt-4 md:mt-0">
            品牌内容战略咨询 · 让品牌内容成为企业增长的战略资产
          </p>
        </div>
      </div>
    </footer>
  )
}
