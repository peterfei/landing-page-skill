export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-textPrimary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">🌿</span>
              <h3 className="text-3xl font-bold text-white">GreenLife</h3>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              让每个家庭都能轻松享受到新鲜、健康的有机蔬菜。
              从农场到餐桌，我们用心连接每一段旅程。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-accent transition-colors">关于我们</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-accent transition-colors">订阅套餐</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-accent transition-colors">常见问题</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-accent transition-colors">联系客服</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">联系我们</h4>
            <ul className="space-y-3 text-white/70">
              <li>电话: 400-888-6688</li>
              <li>邮箱: hello@greenlife.com</li>
              <li>微信: greenlife_help</li>
              <li>工作时间: 8:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} GreenLife 有机食品. All rights reserved.
          </p>
          <p className="text-white/50 text-sm mt-4 md:mt-0">
            新鲜有机 · 健康生活
          </p>
        </div>
      </div>
    </footer>
  )
}
