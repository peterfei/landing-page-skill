"use client";

import { useState, useEffect } from "react";

const faqs = [
  {
    question: "我真的零基础，能学会吗？",
    answer:
      "我们80%的学员都是零基础。课程从HTML/CSS基础开始，循序渐进。更重要的是有导师1v1答疑，遇到不懂的随时问，不会像自学一样卡死。",
  },
  {
    question: "学完真的能拿到18K的薪资吗？",
    answer:
      "我们统计的是已就业学员的平均起薪。当然，薪资跟城市、公司、个人努力都有关系。但至少你会有一个拿得出手的作品集和真实项目经验，这是转行的核心筹码。",
  },
  {
    question: "上课是什么形式？需要辞职吗？",
    answer:
      "直播授课 + 录播回放，每周约15小时学习时间。很多在职学员都是下班后学习。如果你时间充裕，也可以选择全日制模式加速进度。",
  },
  {
    question: "试听免费吗？不满意能退款吗？",
    answer:
      "试听完全免费，不用交任何费用。正式报名后7天内不满意全额退款，没有任何套路。我们敢这么承诺，是因为对自己的教学质量有信心。",
  },
  {
    question: "内推资源靠谱吗？能进大厂吗？",
    answer:
      "我们与200+企业有合作关系，包括字节、阿里、腾讯、美团等。但能不能进大厂取决于你的学习成果。我们能保证的是，只要你按进度完成，简历一定过初筛。",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    setOpen(0);
  }, []);

  return (
    <section aria-label="FAQ" className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-black text-text-primary uppercase tracking-tight">
            常见问题
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-neutral bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/80 transition-colors"
              >
                <span className="font-bold text-text-primary">{faq.question}</span>
                <span
                  className={`text-primary text-xl font-bold ml-4 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
