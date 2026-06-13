export default function FooterSection() {
  return (
    <footer className="py-16 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4">FlowSync</h3>
            <p className="text-sm text-secondary leading-relaxed">
              团队工作流自动化平台，帮助中小企业提升协作效率。
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">产品</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>功能介绍</li>
              <li>定价方案</li>
              <li>集成中心</li>
              <li>API文档</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">资源</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>帮助中心</li>
              <li>视频教程</li>
              <li>博客</li>
              <li>社区论坛</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">公司</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li>关于我们</li>
              <li>联系我们</li>
              <li>隐私政策</li>
              <li>服务条款</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral pt-8 text-center text-sm text-secondary">
          <p>© 2025 FlowSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
