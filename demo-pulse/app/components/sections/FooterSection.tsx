export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-display text-white mb-4">
              PULSE
            </h3>
            <p className="text-white/60 max-w-md">
              中国领先的沉浸式电音节品牌。致力于为电音爱好者打造极致的音乐体验。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">快速链接</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">关于我们</a></li>
              <li><a href="#lineup" className="text-white/60 hover:text-primary transition-colors">DJ阵容</a></li>
              <li><a href="#tickets" className="text-white/60 hover:text-primary transition-colors">购买门票</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-primary transition-colors">常见问题</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">联系我们</h4>
            <ul className="space-y-3 text-white/60">
              <li>邮箱: contact@pulse-festival.com</li>
              <li>电话: 400-888-8888</li>
              <li>微信: pulse_festival</li>
              <li>微博: @PULSE电音节</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © {currentYear} PULSE 电音节. All rights reserved.
          </p>
          <p className="text-white/40 text-sm mt-4 md:mt-0">
            释放电音本能 · 让节奏掌控你的灵魂
          </p>
        </div>
      </div>
    </footer>
  )
}
