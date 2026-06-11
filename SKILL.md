---
name: landing-page-skill
description: >
  全链路落地页生成 Agent Skill。触发词：landing page、落地页、产品页、营销页、主页设计。
  5 阶段协议：需求采集 → 策略规划 → 设计系统 → 代码生成 → 质量验证。
  适用：单页转化型落地页（SaaS/电商/服务）。不适用：多页网站、后端集成、复杂交互应用。
references:
  - references/conversion-framework.md
  - references/design-system.md
  - references/aesthetic-styles.md
  - references/tech-adapters/nextjs-tailwind.md
  - references/anti-patterns.md
  - references/copy-formulas/hero-headlines.md
  - references/copy-formulas/cta-patterns.md
  - references/copy-formulas/objection-handling.md
  - references/page-templates/saas-product.md
  - references/page-templates/ecommerce.md
---

# Landing Page Skill

## 激活条件

当用户输入包含以下任一触发词时激活：landing page、落地页、产品页、营销页、主页设计、single page website、着陆页。

## 诚实边界（适用性判断）

**适用：**
1. 单页转化型落地页（收集线索、引导注册、促进购买）
2. 产品/服务展示页面（SaaS、电商单品、咨询服务、课程）
3. 技术栈为 Next.js 14/15 + Tailwind CSS（MVP 阶段）
4. 有明确转化目标（CTA）的页面

**不适用：**
1. 多页网站或博客系统（超出单页范围）
2. 需要后端 API、数据库、用户认证的完整应用
3. 复杂交互（实时协作、数据可视化仪表盘、游戏）
4. 非 Web 平台（小程序、原生 App、桌面应用）

**边界声明：** 本 Skill 生成的是高质量起点代码，需人工打磨文案细节和品牌资产。不承诺"一键完美"。

## 5 阶段操作协议

### Phase 1: 需求采集

按顺序向用户确认以下信息（如用户已提供则跳过）：

1. **产品/服务**：是什么？核心价值主张是什么？
2. **目标受众**：谁会用？有什么痛点？
3. **转化目标**：希望用户做什么？（注册/购买/下载/预约）
4. **技术栈**：确认使用 Next.js 14/15 + Tailwind CSS
5. **品牌风格偏好**：从 references/aesthetic-styles.md 的 6 种风格中选择
6. **竞品参考**：有喜欢的落地页参考吗？（可选）

**输出**：需求摘要文档（Markdown 列表），用于 Phase 2。

### Phase 2: 策略规划

1. **加载行业模板**：根据产品类型从 references/page-templates/ 选择模板：
   - SaaS 产品 → saas-product.md
   - 电商单品 → ecommerce.md
   - 其他 → 通用结构（Hero → Features → Benefits → Social Proof → CTA → Footer）
2. **选择美学方向**：从 references/aesthetic-styles.md 选择风格，确认配色倾向
3. **文案结构**：使用 references/copy-formulas/ 规划：
   - Hero 标题：hero-headlines.md 的 "结果 + 受众 + 机制" 公式
   - CTA 文案：cta-patterns.md 的 "动词 + 利益" 格式
   - 异议处理：objection-handling.md 的 5 类异议模板
4. **转化框架映射**：将 7 段式文案映射到 DESIGNNAS 11 元素

**输出**：策略文档（含风格选择、配色方向、文案大纲、元素映射表）。

### Phase 3: 设计系统

基于 references/design-system.md 生成设计 Token：

1. **Typography Token**：Display 字体、Body 字体、heading 字号阶梯
2. **Color Token**：Primary / Secondary / Accent / Neutral / Background / Text（hex + CSS 变量）
3. **Motion Token**：PageLoad 动画、Scroll 触发动画、Hover 交互（类型 + 时长）
4. **Layout Token**：Grid 类型、Spacing 阶梯、Section 宽度、非对称布局规则

**输出**：设计 Token 文档（可直接复制到 tailwind.config.ts）。

### Phase 4: 代码生成

按 references/tech-adapters/nextjs-tailwind.md 生成代码：

1. **项目结构**：app/page.tsx、app/layout.tsx、components/、lib/utils.ts、tailwind.config.ts
2. **组件化**：每个 DESIGNNAS 元素独立组件（HeroSection、FeaturesSection 等）
3. **Tailwind 配置**：扩展设计系统 Token（colors、fonts、animations）
4. **响应式**：使用 sm:/md:/lg:/xl: 断点
5. **可访问性**：语义 HTML、alt 文本、对比度、focus-visible

**输出**：完整可运行的 Next.js 项目代码。

### Phase 5: 质量验证

运行以下检查清单，输出检测报告：

#### 5.1 转化检查
- [ ] 11 元素覆盖率：检查是否包含 Hero、Social Proof、Features、Benefits、How It Works、Testimonials、Pricing/CTA、FAQ、Scarcity、Footer（至少覆盖 7 个）
- [ ] CTA 清晰度：CTA 文本是否使用 "动词 + 利益" 格式
- [ ] Hero 标题：是否遵循 "结果 + 受众 + 机制" 公式

#### 5.2 反模式检测（逐项检查）

| # | 规则 | 检测逻辑 | 严重度 | 修复建议 |
|---|------|---------|--------|---------|
| 1 | 泛滥字体 | 检测到 Inter/Roboto/Arial 作为 Display 字体 | 中 | 替换为风格匹配的 Display 字体（见 aesthetic-styles.md） |
| 2 | 模板化配色 | 检测到紫色渐变(#7c3aed→#a855f7)+纯白背景 | 高 | 使用 design-system.md 配色 Token 重新生成 |
| 3 | CTA 模糊 | CTA 文本为 Submit / Learn More / Click Here | 高 | 替换为 cta-patterns.md 中的 "动词+利益" 格式 |
| 4 | 缺少社会证明 | Hero 下方无 Social Proof 元素 | 中 | 在 Hero 后添加客户 Logo/评分/用户数量 |
| 5 | Hero 标题无力 | 标题以 Welcome / 品牌名开头，或纯描述性语句 | 高 | 使用 hero-headlines.md 公式重写 |

**输出**：检测报告（Markdown 表格），高严重度问题必须修复后重新输出代码。

## 索引

### 技术栈适配器
- Next.js 14/15 + Tailwind CSS → references/tech-adapters/nextjs-tailwind.md

### 行业模板
- SaaS 产品页 → references/page-templates/saas-product.md
- 电商产品页 → references/page-templates/ecommerce.md

### 文案公式库
- Hero 标题 → references/copy-formulas/hero-headlines.md
- CTA 模式 → references/copy-formulas/cta-patterns.md
- 异议处理 → references/copy-formulas/objection-handling.md

### 设计参考
- 转化框架 → references/conversion-framework.md
- 设计系统 → references/design-system.md
- 美学风格 → references/aesthetic-styles.md
- 反模式检测 → references/anti-patterns.md
