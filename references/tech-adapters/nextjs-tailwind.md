# Next.js 14/15 + Tailwind CSS 适配器

## 适用版本

- Next.js: 14.x / 15.x (App Router)
- Tailwind CSS: 3.4+ / 4.x
- React: 18.x / 19.x
- TypeScript: 5.x

## 项目结构规范

```
my-landing-page/
├── app/
│   ├── page.tsx              # 落地页主入口，组合所有 Section 组件
│   ├── layout.tsx            # 根布局，引入全局样式和字体
│   └── globals.css           # 全局 CSS，包含设计系统 CSS 变量
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── SocialProofSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── FooterSection.tsx
│   └── ui/                   # 可复用 UI 组件
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Container.tsx
├── lib/
│   └── utils.ts              # 工具函数（cn 合并等）
├── public/
│   └── images/               # 静态图片资源
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 组件化架构

### 原则

- 每个 DESIGNNAS 元素对应一个独立 Section 组件
- Section 组件接收 `className` 和子组件作为 props（如有必要）
- UI 原子组件（Button、Card）放在 `components/ui/`
- 所有组件使用默认导出

### Section 组件模板

```tsx
// components/sections/HeroSection.tsx
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-text-primary">
          {headline}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          {subheadline}
        </p>
        <a
          href={ctaHref}
          className="mt-8 inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
```

## tailwind.config.ts 模板

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        neutral: "var(--color-neutral)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

## 响应式断点策略

| 前缀 | 断点 | 使用规则 |
|------|------|---------|
| 默认 | < 640px | 移动端优先，默认样式 |
| `sm:` | ≥ 640px | 小屏手机横屏，极少单独使用 |
| `md:` | ≥ 768px | 平板，多列布局起点 |
| `lg:` | ≥ 1024px | 桌面，完整布局展示 |
| `xl:` | ≥ 1280px | 大屏桌面，最大内容宽度 |

### 规则

1. 始终移动优先：先写移动端样式，再用 `md:`/`lg:` 覆盖
2. Hero 标题：`text-4xl md:text-5xl lg:text-6xl`
3. Section 内边距：`py-16 md:py-24`
4. 网格布局：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
5. 容器宽度：`max-w-6xl mx-auto px-4 md:px-6`

## 可访问性基线

### 语义 HTML

- 使用 `<section>` 包裹每个区块，配 `aria-label` 或 `aria-labelledby`
- 使用 `<nav>` 包裹导航
- 使用 `<header>`、`<footer>`、`<main>` 等结构性标签
- 标题层级严格递减（h1 → h2 → h3），不跳级

### 图片

```tsx
// 所有图片必须有描述性 alt 文本
<img src="/images/hero.jpg" alt="用户使用产品完成工作的场景" />

// 装饰性图片使用空 alt
<img src="/images/decoration.svg" alt="" role="presentation" />
```

### 对比度

- 正文文本与背景对比度 ≥ 4.5:1
- 大标题与背景对比度 ≥ 3:1
- 使用工具验证（如 WebAIM Contrast Checker）

### Focus 状态

```tsx
// 所有交互元素必须有 focus-visible 样式
<button className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none">
  点击我
</button>
```

## 完整组件示例

### HeroSection

```tsx
// components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight">
            将你的创意
            <span className="text-primary">转化为收入</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            无需编程知识，5 分钟搭建专业落地页，开始收集潜在客户。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#signup"
              className="inline-flex justify-center items-center bg-primary text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              免费开始使用
            </a>
            <a
              href="#demo"
              className="inline-flex justify-center items-center bg-surface text-text-primary px-8 py-4 rounded-lg font-medium border border-neutral hover:bg-neutral transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              观看演示
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="/images/hero-preview.jpg"
            alt="产品界面预览，展示拖拽式编辑器"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
```

### FeaturesSection

```tsx
// components/sections/FeaturesSection.tsx
const features = [
  {
    title: "拖拽式编辑",
    description: "像搭积木一样构建页面，所见即所得。",
    icon: "🛠️",
  },
  {
    title: "转化优化",
    description: "内置 A/B 测试和数据分析，持续提升转化率。",
    icon: "📈",
  },
  {
    title: "极速加载",
    description: "自动优化图片和代码，确保页面秒开。",
    icon: "⚡",
  },
];

export default function FeaturesSection() {
  return (
    <section aria-label="Features" className="py-16 md:py-24 px-4 md:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary">
            强大功能，简单易用
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
             everything you need to build high-converting landing pages.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background p-8 rounded-xl border border-neutral hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary">{f.title}</h3>
              <p className="mt-2 text-text-secondary">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## page.tsx 组合示例

```tsx
// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
```
