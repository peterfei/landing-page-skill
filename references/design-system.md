# 设计系统 Token 规范

## Typography Token

| Token | 值 | 用途 | 理由 |
|-------|-----|------|------|
| `--font-display` | 按风格选择（见 aesthetic-styles.md） | Hero 标题、大标题 | Display 字体负责品牌个性，需与风格匹配 |
| `--font-body` | 按风格选择 | 正文、描述、UI 文本 | Body 字体负责可读性，需高 x-height 和清晰字形 |
| `--text-h1` | 48px / 3rem | Hero 主标题 | 移动端 32px，确保首屏冲击力 |
| `--text-h2` | 36px / 2.25rem | Section 标题 | 移动端 28px |
| `--text-h3` | 24px / 1.5rem | 卡片标题、子标题 | 移动端 20px |
| `--text-h4` | 18px / 1.125rem | 小标题、标签 | — |
| `--text-body` | 16px / 1rem | 正文 | 行高 1.6-1.75 |
| `--text-small` | 14px / 0.875rem | 辅助文本、脚注 | 行高 1.5 |
| `--text-xs` | 12px / 0.75rem | 标签、徽章 | — |
| `--font-weight-bold` | 700 | 标题、强调 | — |
| `--font-weight-medium` | 500 | 子标题、按钮 | — |
| `--font-weight-normal` | 400 | 正文 | — |
| `--line-height-tight` | 1.1 | 大标题 | 紧凑有力 |
| `--line-height-normal` | 1.6 | 正文 | 阅读舒适 |
| `--line-height-relaxed` | 1.75 | 长文本 | 宽松呼吸感 |

## Color Palette Token

| Token | CSS 变量 | 用途 |
|-------|---------|------|
| **Primary** | `--color-primary` | 主品牌色，用于 CTA 按钮、关键链接、高亮 |
| **Secondary** | `--color-secondary` | 辅助色，用于次要按钮、标签、装饰 |
| **Accent** | `--color-accent` | 强调色，用于 hover 状态、成功提示、特殊标记 |
| **Neutral** | `--color-neutral` | 中性灰，用于边框、分割线、禁用状态 |
| **Background** | `--color-background` | 页面背景色 |
| **Surface** | `--color-surface` | 卡片、浮层面板背景 |
| **Text Primary** | `--color-text-primary` | 主文本色 |
| **Text Secondary** | `--color-text-secondary` | 辅助文本、描述 |
| **Text Muted** | `--color-text-muted` | 占位符、禁用文本 |

### Tailwind CSS 配置示例

```js
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        neutral: 'var(--color-neutral)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
      },
    },
  },
};
```

### CSS 变量定义（globals.css）

```css
:root {
  --color-primary: #0f172a;      /* 按风格覆盖 */
  --color-secondary: #64748b;    /* 按风格覆盖 */
  --color-accent: #f59e0b;       /* 按风格覆盖 */
  --color-neutral: #e2e8f0;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --font-display: 'Georgia', serif;
  --font-body: 'Inter', sans-serif;
}
```

## Motion Token

| Token | 类型 | 时长 | 缓动 | 用途 |
|-------|------|------|------|------|
| `--motion-page-load` | staggered fadeUp | 500ms | ease-out | 页面加载时元素依次入场 |
| `--motion-scroll-reveal` | fadeUp + opacity | 600ms | cubic-bezier(0.25, 0.46, 0.45, 0.94) | 滚动到视口时触发 |
| `--motion-hover-lift` | translateY(-4px) + shadow | 200ms | ease | 卡片 hover 上浮 |
| `--motion-hover-scale` | scale(1.02) | 150ms | ease | 按钮 hover 微放大 |
| `--motion-focus` | ring-2 ring-offset-2 | 0ms | — | focus-visible 状态 |

## Layout Token

| Token | 值 | 用途 |
|-------|-----|------|
| `--layout-grid` | 12-column | 主网格系统 |
| `--layout-max-width` | 1280px / 80rem | 内容最大宽度 |
| `--layout-section-py` | 80px / 5rem | Section 垂直间距（移动端 48px） |
| `--layout-section-px` | 24px / 1.5rem | Section 水平内边距（移动端 16px） |
| `--layout-gap` | 24px / 1.5rem | 网格间距 |
| `--layout-card-radius` | 12px / 0.75rem | 卡片圆角 |
| `--layout-button-radius` | 8px / 0.5rem | 按钮圆角 |

### 非对称布局规则

- 至少 2 个 Section 使用非对称布局打破视觉单调
- Hero 区域：文字左/右 60%，图片/视觉右/左 40%
- Features 区域：交替左右排版（Feature 1 左图右文，Feature 2 右图左文）
- 避免所有 Section 都是居中单列
