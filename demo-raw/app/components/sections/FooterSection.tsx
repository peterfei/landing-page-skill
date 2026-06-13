export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background py-16 px-6 border-t-4 border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-4xl md:text-5xl font-display font-bold uppercase">
                RAW
              </h3>
              <p className="text-lg mt-2">
                极简力量训练
              </p>
            </div>
            <p className="text-base leading-relaxed max-w-md">
              不妥协的力量训练体验。专注、纯粹、高效。没有花哨，只有结果。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6">
              快速链接
            </h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:bg-surface hover:text-textInverse transition-colors">关于我们</a></li>
              <li><a href="#training" className="hover:bg-surface hover:text-textInverse transition-colors">训练体系</a></li>
              <li><a href="#pricing" className="hover:bg-surface hover:text-textInverse transition-colors">价格方案</a></li>
              <li><a href="#faq" className="hover:bg-surface hover:text-textInverse transition-colors">常见问题</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-bold uppercase mb-6">
              联系方式
            </h4>
            <ul className="space-y-3">
              <li>地址：北京市朝阳区力量训练中心</li>
              <li>电话：400-RAW-POWER</li>
              <li>邮箱：contact@raw-training.com</li>
              <li>营业时间：6:00 - 22:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} RAW 极简力量训练. All rights reserved.
          </p>
          <p className="text-sm uppercase">
            不妥协 · 纯粹训练 · 结果导向
          </p>
        </div>
      </div>
    </footer>
  )
}
