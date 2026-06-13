export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-primary text-white relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-normal mb-6">
          准备好提升团队效率了吗？
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          立即开始14天免费试用，无需信用卡，随时取消。加入5000+中小企业，体验工作流自动化的强大力量。
        </p>
        <button className="bg-white text-primary px-10 py-4 text-base font-medium hover-lift shadow-lg">
          预约免费演示
        </button>
        <p className="mt-6 text-sm text-gray-400">
          限时优惠：本月注册享8折优惠
        </p>
      </div>
    </section>
  )
}
