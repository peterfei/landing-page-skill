export default function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-16 px-6 text-background border-t-4 border-accent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-display mb-4">匠人手作</h3>
            <p className="text-background/80 max-w-md leading-relaxed">
              传承百年手工皮艺，为追求品质的您，打造独一无二的专属皮具。
              每一件作品，都承载着时光的温度。
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">联系我们</h4>
            <ul className="space-y-3 text-background/80">
              <li>地址：北京市朝阳区艺术家园区</li>
              <li>电话：400-888-6688</li>
              <li>邮箱：hello@craftsman.com</li>
              <li>微信：craftsman_leather</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">营业时间</h4>
            <ul className="space-y-3 text-background/80">
              <li>周一至周五：10:00 - 19:00</li>
              <li>周六：10:00 - 17:00</li>
              <li>周日：预约制</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © {currentYear} 匠人手作. All rights reserved.
          </p>
          <p className="text-background/60 text-sm mt-4 md:mt-0">
            传承手工工艺 · 打造独特品质
          </p>
        </div>
      </div>
    </footer>
  )
}
