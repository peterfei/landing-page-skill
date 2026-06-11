# 反模式检测器

## 检测规则定义

### 规则 1：泛滥字体（Overused Fonts）

**检测逻辑**：
- 检查 tailwind.config.ts 或 globals.css 中 `--font-display` 是否设置为 Inter、Roboto 或 Arial
- 检查 heading 是否使用系统默认 sans-serif 而无个性字体

**严重程度**：中（⚠️ SHOULD-FIX）

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

**检测逻辑**：
- 检查 Primary 是否为 #7c3aed 或类似紫色渐变（#a855f7 → #7c3aed）
- 检查 Background 是否为纯白（#ffffff）且无任何暖色/冷色调和
- 检查是否出现 "紫渐变 + 白底 + 圆角卡片" 的 SaaS 模板组合

**严重程度**：高（❌ MUST-FIX）

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

**检测逻辑**：
- 扫描所有按钮和链接文本，检查是否包含：Submit、Learn More、Click Here、Read More、Get Started、Sign Up
- 检查 CTA 文本是否缺少 "利益" 部分（纯动词无结果描述）

**严重程度**：高（❌ MUST-FIX）

**修复建议**：
- 使用 copy-formulas/cta-patterns.md 的 "动词 + 利益" 格式重写
- 示例转换：
  - ❌ "Submit" → ✅ "获取免费方案"
  - ❌ "Learn More" → ✅ "查看如何节省 30% 成本"
  - ❌ "Sign Up" → ✅ "立即注册，5 分钟上手"
  - ❌ "Get Started" → ✅ "开始 14 天免费试用"

---

### 规则 4：缺少社会证明（Missing Social Proof）

**检测逻辑**：
- 检查 Hero Section 下方 2 个 viewport 内是否存在 Social Proof 元素
- 检查页面是否包含以下任一：客户 Logo、用户数量、评分星级、权威背书

**严重程度**：中（⚠️ SHOULD-FIX）

**修复建议**：
- 在 Hero 下方添加客户 Logo 墙（"已被 500+ 团队信赖"）
- 添加评分组件（"4.9/5 来自 1200+ 评价"）
- 添加用户数量徽章（"已有 10,000+ 用户"）
- 如为新产品无真实数据，使用 "加入候补名单" 替代并说明即将上线

---

### 规则 5：Hero 标题无力（Weak Hero Headline）

**检测逻辑**：
- 检查 Hero 标题是否以以下开头：Welcome to、Introducing、We are、Meet、Hello
- 检查标题是否仅为品牌名 + 空泛描述（如 "XX科技 - 领先的解决方案提供商"）
- 检查标题是否缺少具体结果承诺

**严重程度**：高（❌ MUST-FIX）

**修复建议**：
- 使用 copy-formulas/hero-headlines.md 的 "结果 + 受众 + 机制" 公式重写
- 示例转换：
  - ❌ "Welcome to ABC Platform" → ✅ "3 倍提升销售线索，无需增加广告预算"
  - ❌ "XX科技 - 领先的 SaaS 平台" → ✅ "让中小团队在 1 周内实现企业级自动化"
  - ❌ "The Best Tool for Your Business" → ✅ "将客户支持响应时间从 4 小时缩短到 10 分钟"

## 严重程度分类

| 级别 | 标识 | 行动要求 |
|------|------|---------|
| 高 | ❌ MUST-FIX | 必须修复后才能交付，直接影响转化率 |
| 中 | ⚠️ SHOULD-FIX | 建议修复，影响品牌感知或信任度 |

## 检测报告输出格式

Phase 5 完成后，输出以下格式的检测报告：

```markdown
## 反模式检测报告

| # | 规则 | 状态 | 严重度 | 发现 | 修复建议 |
|---|------|------|--------|------|---------|
| 1 | 泛滥字体 | ✅/⚠️/❌ | 中/高 | <具体发现> | <修复建议> |
| 2 | 模板化配色 | ✅/⚠️/❌ | 中/高 | <具体发现> | <修复建议> |
| 3 | CTA 模糊 | ✅/⚠️/❌ | 中/高 | <具体发现> | <修复建议> |
| 4 | 缺少社会证明 | ✅/⚠️/❌ | 中/高 | <具体发现> | <修复建议> |
| 5 | Hero 标题无力 | ✅/⚠️/❌ | 中/高 | <具体发现> | <修复建议> |

**总结**：X/5 项通过，Y 项 MUST-FIX，Z 项 SHOULD-FIX。
```

## 修复后重新验证

对于所有 MUST-FIX 项目：
1. 根据修复建议修改代码
2. 重新运行对应检测规则
3. 更新检测报告，确认状态变为 ✅
4. 所有 MUST-FIX 修复完成后，方可结束 Phase 5
