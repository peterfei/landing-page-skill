export default function FooterSection() {
  return (
    <footer className="py-12 px-4 md:px-6 bg-background border-t border-neutral">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-black text-text-primary uppercase tracking-tight mb-4">
              编程<span className="text-primary">训练营</span>
            </div>
            <p className="text-text-secondary max-w-sm">
              专注零基础转行编程。12周系统化训练，导师1v1带教，毕业即就业。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-4">课程</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  前端开发班
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  全栈开发班
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  后端开发班
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-4">关于</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  导师团队
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  学员故事
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © 2024 编程训练营. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-text-secondary transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-text-secondary transition-colors">
              服务条款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
