---
name: landing-page-skill
description: >
  全链路落地页生成 Agent Skill。触发词：landing page、落地页、产品页、营销页、主页设计。
  5 阶段协议：需求采集 → 策略规划 → 设计系统 → 代码生成 → 质量验证。
  适用：单页转化型落地页（SaaS/电商/服务）。不适用：多页网站、后端集成、复杂交互应用。
---

# Landing Page Skill

> 本 Skill 设计为 **agent-agnostic**——Claude Code、Codex CLI、Cursor、Trae、OpenClaw、Hermes Agent 或任何支持 markdown-based skill 的 agent 都可以使用。
> 所有文件引用采用**相对本 Skill 根目录**的相对路径形式。

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
5. **品牌风格偏好**：从 `references/aesthetic-styles.md` 的 6 种风格中选择
6. **竞品参考**：有喜欢的落地页参考吗？（可选）

**输出**：需求摘要文档（Markdown 列表），用于 Phase 2。

### Phase 2: 策略规划

1. **加载行业模板**：根据产品类型从 `references/page-templates/` 选择模板：
   - SaaS 产品 → `references/page-templates/saas-product.md`
   - 电商单品 → `references/page-templates/ecommerce.md`
   - 其他 → 通用结构（Hero → Features → Benefits → Social Proof → CTA → Footer）
2. **选择美学方向**：从 `references/aesthetic-styles.md` 选择风格，确认配色倾向
3. **文案结构**：使用 `references/copy-formulas/` 规划：
   - Hero 标题：`references/copy-formulas/hero-headlines.md` 的 "结果 + 受众 + 机制" 公式
   - CTA 文案：`references/copy-formulas/cta-patterns.md` 的 "动词 + 利益" 格式
   - 异议处理：`references/copy-formulas/objection-handling.md` 的 5 类异议模板
4. **转化框架映射**：将 7 段式文案映射到 DESIGNNAS 11 元素（参考 `references/conversion-framework.md`）

**输出**：策略文档（含风格选择、配色方向、文案大纲、元素映射表）。

### Phase 3: 设计系统

基于 `references/design-system.md` 生成设计 Token：

1. **Typography Token**：Display 字体、Body 字体、heading 字号阶梯
2. **Color Token**：Primary / Secondary / Accent / Neutral / Background / Text（hex + CSS 变量）
3. **Motion Token**：PageLoad 动画、Scroll 触发动画、Hover 交互（类型 + 时长）
4. **Layout Token**：Grid 类型、Spacing 阶梯、Section 宽度、非对称布局规则

**输出**：设计 Token 文档（可直接复制到 tailwind.config.ts）。

### Phase 4: 代码生成

按 `references/tech-adapters/nextjs-tailwind.md` 生成代码：

1. **项目结构**：app/page.tsx、app/layout.tsx、components/、lib/utils.ts、tailwind.config.ts
2. **组件化**：每个 DESIGNNAS 元素独立组件（HeroSection、FeaturesSection 等）
3. **Tailwind 配置**：扩展设计系统 Token（colors、fonts、animations）
4. **响应式**：使用 sm:/md:/lg:/xl: 断点
5. **可访问性**：语义 HTML、alt 文本、对比度、focus-visible

**输出**：完整可运行的 Next.js 项目代码。

### Phase 5: 质量验证（闭环保障）

#### 5.1 转化检查
- [ ] 11 元素覆盖率：检查是否包含 Hero、Social Proof、Features、Benefits、How It Works、Testimonials、Pricing/CTA、FAQ、Scarcity、Footer（至少覆盖 7 个）
- [ ] CTA 清晰度：CTA 文本是否使用 "动词 + 利益" 格式
- [ ] Hero 标题：是否遵循 "结果 + 受众 + 机制" 公式

#### 5.2 反模式检测（逐项检查，详见 `references/anti-patterns.md`）

| # | 规则 | 检测逻辑 | 严重度 |
|---|------|---------|--------|
| 1 | 泛滥字体 | Inter/Roboto/Arial 作为 Display 字体 | 阻塞 |
| 2 | 模板化配色 | 紫色渐变 + 纯白背景的模板组合 | 阻塞 |
| 3 | CTA 模糊 | CTA 为 Submit/Learn More/Click Here | 阻塞 |
| 4 | 缺少社会证明 | Hero 下方无 Social Proof 元素 | 阻塞 |
| 5 | Hero 标题无力 | Welcome/品牌名开头，纯描述性 | 阻塞 |
| 6 | 移动端适配缺失 | 无 sm:/md:/lg: 响应式断点 | 警告 |
| 7 | 可访问性基线 | 缺少 alt/aria/语义 HTML | 警告 |
| 8 | SEO 基础缺失 | 无 meta/title/OG 标签 | 警告 |
| 9 | 性能隐患 | 大图未优化、缺 lazy load | 警告 |
| 10 | Token 一致性 | 硬编码颜色/非标准间距 | 警告 |

#### 5.3 自动修复循环（阻塞级规则）

阻塞级规则（1-5）未通过时，自动执行修复循环：
1. 针对每个未通过的阻塞规则，生成具体修复代码
2. **仅替换**触发规则的 Section 代码（不修改无关 Section）
3. 重新运行该规则的检测
4. 重复上述步骤，**最多 3 轮**
5. 3 轮后仍未通过 → 报告失败原因，交由用户决定

#### 5.4 正面模式验证（建议性，详见 `references/positive-patterns.md`）

| # | 模式 | 检测逻辑 |
|---|------|---------|
| P1 | CTA 动词+利益 | CTA 文本匹配"动词 + 具体利益"格式 |
| P2 | Hero 结果+受众 | 标题包含可量化结果 + 目标受众 |
| P3 | 社会证明元素 | 页面包含 ≥1 个社会证明类型 |
| P4 | 紧迫感/稀缺性 | 存在名额/时间/价格紧迫感元素 |

正面模式**不触发自动修复**，仅在报告中提供优化建议。

**输出**：检测报告（反模式 + 正面模式 Markdown 表格）+ 自动修复摘要（如有修复）。

### Phase 5.5: 迭代优化（可选）

Phase 5 完成后，向用户提供 3 个选项：

**A) 接受** — 输出最终完整项目代码
**B) 修改指定 Section** — 用户说明要修改的 Section 和修改要求
**C) 重新生成指定 Section** — 用户指定 Section 从头重新生成

迭代规则：
- 修改/重新生成仅影响用户指定的 Section（Section 粒度）
- 每次修改后，重新检测该 Section 相关的反模式规则
- **最多 3 轮**迭代，超限后输出当前版本
- 每轮输出变更日志："Round N: Modified [Sections], Re-checked [Rules]"

## 索引

### 技术栈适配器
- Next.js 14/15 + Tailwind CSS → `references/tech-adapters/nextjs-tailwind.md`

### 行业模板
- SaaS 产品页 → `references/page-templates/saas-product.md`
- 电商产品页 → `references/page-templates/ecommerce.md`

### 文案公式库
- Hero 标题 → `references/copy-formulas/hero-headlines.md`
- CTA 模式 → `references/copy-formulas/cta-patterns.md`
- 异议处理 → `references/copy-formulas/objection-handling.md`

### 设计参考
- 转化框架 → `references/conversion-framework.md`
- 设计系统 → `references/design-system.md`
- 美学风格 → `references/aesthetic-styles.md`
- 反模式检测 → `references/anti-patterns.md`
- 正面模式检测 → `references/positive-patterns.md`

## 跨 Agent 环境适配说明

本 Skill 设计为 **agent-agnostic**，兼容以下运行时：

| 运行时 | 支持方式 | 备注 |
|--------|---------|------|
| Claude Code | 原生支持 | 推荐，`/agent` 或触发词激活 |
| Codex CLI | 兼容 | 直接加载 SKILL.md |
| Cursor | 兼容 | 复制到 `.cursorrules` 或使用 Composer |
| Trae | 兼容 | 直接加载 SKILL.md |
| OpenClaw | 兼容 | 遵循 skills.sh 协议 |
| Hermes Agent | 兼容 | 直接加载 SKILL.md |
| 其他 markdown-based skill 运行时 | 兼容 | 任何支持 YAML frontmatter + Markdown 的运行时 |

### 路径规范

所有文件引用均采用**相对本 Skill 根目录**的相对路径：
- `references/xxx.md`
- `assets/xxx.svg`
- `scripts/xxx.py`

Agent 或用户按自身安装位置解析，不依赖任何绝对路径。

### 自包含原则

SKILL.md 包含所有必要信息，可直接复制使用。references/ 中的文件为深度知识补充，按需加载即可。

> 本 Skill 遵循 [Agent Skills](https://skills.sh) 开放协议。
