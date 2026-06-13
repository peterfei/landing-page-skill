# 反模式检测器

## 检测规则定义

### 规则 1：泛滥字体（Overused Fonts）

**严重级别**：阻塞

**检测逻辑**：
- 检查 tailwind.config.ts 或 globals.css 中 `--font-display` 是否设置为 Inter、Roboto 或 Arial
- 检查 heading 是否使用系统默认 sans-serif 而无个性字体

**修复建议**：
- 从 aesthetic-styles.md 选择匹配风格的 Display 字体
- Minimalist → Helvetica Neue
- Bold → Montserrat
- Vintage → Playfair Display
- Organic → Nunito
- Editorial → Cormorant Garamond
- Brutalist → Times New Roman / Courier New

---

### 规则 2：模板化配色（Template Color Scheme）

**严重级别**：阻塞

**检测逻辑**：
- 检查 Primary 是否为 #7c3aed 或类似紫色渐变（#a855f7 → #7c3aed）
- 检查 Background 是否为纯白（#ffffff）且无任何暖色/冷色调和
- 检查是否出现 "紫渐变 + 白底 + 圆角卡片" 的 SaaS 模板组合

**修复建议**：
- 使用 design-system.md 的 Color Token 重新生成配色
- 根据品牌定位选择方向：
  - 专业/企业 → 深蓝 + 暖灰
  - 创意/活力 → 高饱和对比色
  - 自然/健康 → 绿色系 + 奶油白
  - 奢华/高端 → 深黑 + 金色点缀
- 确保 Primary 色在色轮上有明确的品牌含义

---

### 规则 3：CTA 模糊（Vague CTA）

**严重级别**：阻塞

**检测逻辑**：
- 扫描所有按钮和链接文本，检查是否包含：Submit、Learn More、Click Here、Read More、Get Started、Sign Up
- 检查 CTA 文本是否缺少 "利益" 部分（纯动词无结果描述）

**修复建议**：
- 使用 copy-formulas/cta-patterns.md 的 "动词 + 利益" 格式重写
- 示例转换：
  - ❌ "Submit" → ✅ "获取免费方案"
  - ❌ "Learn More" → ✅ "查看如何节省 30% 成本"
  - ❌ "Sign Up" → ✅ "立即注册，5 分钟上手"
  - ❌ "Get Started" → ✅ "开始 14 天免费试用"

---

### 规则 4：缺少社会证明（Missing Social Proof）

**严重级别**：阻塞

**检测逻辑**：
- 检查 Hero Section 下方 2 个 viewport 内是否存在 Social Proof 元素
- 检查页面是否包含以下任一：客户 Logo、用户数量、评分星级、权威背书

**修复建议**：
- 在 Hero 下方添加客户 Logo 墙（"已被 500+ 团队信赖"）
- 添加评分组件（"4.9/5 来自 1200+ 评价"）
- 添加用户数量徽章（"已有 10,000+ 用户"）
- 如为新产品无真实数据，使用 "加入候补名单" 替代并说明即将上线

---

### 规则 5：Hero 标题无力（Weak Hero Headline）

**严重级别**：阻塞

**检测逻辑**：
- 检查 Hero 标题是否以以下开头：Welcome to、Introducing、We are、Meet、Hello
- 检查标题是否仅为品牌名 + 空泛描述（如 "XX科技 - 领先的解决方案提供商"）
- 检查标题是否缺少具体结果承诺

**修复建议**：
- 使用 copy-formulas/hero-headlines.md 的 "结果 + 受众 + 机制" 公式重写
- 示例转换：
  - ❌ "Welcome to ABC Platform" → ✅ "3 倍提升销售线索，无需增加广告预算"
  - ❌ "XX科技 - 领先的 SaaS 平台" → ✅ "让中小团队在 1 周内实现企业级自动化"
  - ❌ "The Best Tool for Your Business" → ✅ "将客户支持响应时间从 4 小时缩短到 10 分钟"

---

### 规则 6：移动端适配缺失（Missing Responsive Design）

**严重级别**：警告

**检测逻辑**：
- 检查 Section 组件的 className 中是否使用 sm:、md:、lg: 等响应式断点前缀
- 检查是否存在固定像素宽度（如 `w-[960px]`）而无响应式替代
- 检查布局是否在移动端产生水平溢出

**修复建议**：
- 使用 Tailwind 响应式前缀：`sm:`, `md:`, `lg:`, `xl:`
- 避免固定宽度，使用 `max-w-*` + `mx-auto` 居中
- 关键元素使用 `flex-col md:flex-row` 实现堆叠→横排
- 在 Chrome DevTools 移动端模拟器中验证每个 Section

---

### 规则 7：可访问性基线不达标（Accessibility Baseline）

**严重级别**：警告

**检测逻辑**：
- 检查 `<img>` 标签是否包含 `alt` 属性
- 检查交互元素是否使用语义 HTML（`<button>` 而非 `<div onClick>`）
- 检查表单元素是否关联 `<label>`
- 检查是否使用 landmark 元素（`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`）

**修复建议**：
- 所有 `<img>` 添加描述性 alt 文本
- 按钮使用 `<button>` 或 `<a>` 标签，不用 `<div>`
- 表单输入关联 `<label htmlFor>`
- 页面结构使用 `<header>`, `<main>`, `<footer>` 包裹
- 添加 `aria-label` 到无文本的图标按钮

---

### 规则 8：SEO 基础缺失（Missing SEO Basics）

**严重级别**：警告

**检测逻辑**：
- 检查 layout.tsx 中是否定义 `<title>` 标签
- 检查是否包含 meta description
- 检查是否包含 Open Graph 标签（og:title、og:description、og:image）
- 检查是否包含 `<meta name="viewport">`

**修复建议**：
- 在 layout.tsx 的 `<head>` 或 `generateMetadata()` 中添加：
  ```tsx
  export const metadata: Metadata = {
    title: "具体结果 + 品牌名",
    description: "120 字以内，包含核心价值和 CTA",
    openGraph: {
      title: "...",
      description: "...",
      images: ["/og-image.png"],
    },
  }
  ```
- 确保标题包含核心关键词，不超过 60 字符

---

### 规则 9：性能隐患（Performance Risks）

**严重级别**：警告

**检测逻辑**：
- 检查 `<img>` 标签是否缺少 `width`/`height` 属性（导致 CLS）
- 检查是否使用未优化的图片格式（如 `.bmp`、超大 `.png`）
- 检查首屏图片是否未使用 `priority` 属性（Next.js Image）
- 检查是否有大量内联 SVG（超过 5KB 应使用文件引用）

**修复建议**：
- 使用 Next.js `<Image>` 组件替代原生 `<img>`
- 首屏图片添加 `priority` 属性
- 为图片指定 `width` 和 `height` 防止布局偏移
- 大图使用 WebP 格式 + `loading="lazy"`
- 内联 SVG 超过 5KB 时提取为独立文件

---

### 规则 10：设计 Token 一致性违规（Design Token Inconsistency）

**严重级别**：警告

**检测逻辑**：
- 检查是否存在硬编码颜色值（如 `text-[#ff0000]`）而非使用 Token 变量
- 检查 spacing 是否使用非标准值（如 `p-[13px]`）而非 Tailwind 阶梯
- 检查不同 Section 间相同语义元素的样式是否一致（如标题字号、按钮圆角）

**修复建议**：
- 所有颜色使用 `text-primary`、`bg-surface` 等 Token 名称
- 间距使用 Tailwind 标准阶梯（`p-4`、`gap-6`、`mb-8`）
- 在 tailwind.config.ts 的 `theme.extend` 中统一定义所有自定义值
- 同一语义元素在不同 Section 中保持一致的 class 命名

## 严重级别分类

| 级别 | 标识 | 行动要求 |
|------|------|---------|
| 阻塞 | ❌ MUST-FIX | 必须修复，触发自动修复循环，修复后方可交付 |
| 警告 | ⚠️ SHOULD-FIX | 建议修复，不阻塞输出，在迭代阶段处理 |

## 检测报告输出格式

Phase 5 完成后，输出以下格式的检测报告：

```markdown
## 反模式检测报告

| # | 规则 | 状态 | 严重度 | 发现 | 修复建议 |
|---|------|------|--------|------|---------|
| 1 | 泛滥字体 | ✅/❌ | 阻塞 | <具体发现> | <修复建议> |
| 2 | 模板化配色 | ✅/❌ | 阻塞 | <具体发现> | <修复建议> |
| 3 | CTA 模糊 | ✅/❌ | 阻塞 | <具体发现> | <修复建议> |
| 4 | 缺少社会证明 | ✅/❌ | 阻塞 | <具体发现> | <修复建议> |
| 5 | Hero 标题无力 | ✅/❌ | 阻塞 | <具体发现> | <修复建议> |
| 6 | 移动端适配缺失 | ✅/⚠️ | 警告 | <具体发现> | <修复建议> |
| 7 | 可访问性基线 | ✅/⚠️ | 警告 | <具体发现> | <修复建议> |
| 8 | SEO 基础缺失 | ✅/⚠️ | 警告 | <具体发现> | <修复建议> |
| 9 | 性能隐患 | ✅/⚠️ | 警告 | <具体发现> | <修复建议> |
| 10 | Token 一致性 | ✅/⚠️ | 警告 | <具体发现> | <修复建议> |

**总结**：X/10 项通过，Y 项阻塞（MUST-FIX），Z 项警告（SHOULD-FIX）。
```

## 自动修复协议

阻塞级规则未通过时，按以下协议执行：
1. 针对每个未通过的阻塞规则，生成具体修复代码
2. 仅替换触发规则的 Section 代码（不修改无关 Section）
3. 重新运行该规则的检测
4. 重复上述步骤，最多 3 轮
5. 3 轮后仍未通过则报告失败原因，交由用户决定

警告级规则不触发自动修复，仅在报告中标记建议。
