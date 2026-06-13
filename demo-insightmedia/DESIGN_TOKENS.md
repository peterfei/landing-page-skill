# InsightMedia Editorial Design Tokens

## Typography Tokens

### Display Font (标题/引言)
- **Primary**: Cormorant Garamond
- **Fallback**: Georgia, Times New Roman
- **Usage**: Hero H1, Section Titles, Pull Quotes

### Body Font (正文/UI)
- **Primary**: Source Sans Pro
- **Fallback**: Helvetica, Arial, sans-serif
- **Usage**: Paragraphs, Buttons, Labels

### Type Scale (Tailwind Mapping)
```js
{
  'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '300' }],  // 72px
  'h1': ['3.75rem', { lineHeight: '1.2', fontWeight: '300' }],     // 60px
  'h2': ['2.5rem', { lineHeight: '1.3', fontWeight: '400' }],     // 40px
  'h3': ['1.75rem', { lineHeight: '1.4', fontWeight: '400' }],     // 28px
  'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],     // 20px
  'body': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }], // 18px
  'body-sm': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],  // 16px
}
```

## Color Tokens (CSS Variables)

### Primary Colors (Slate/Stone Palette)
```css
--color-primary: #1e293b;      /* Slate 800 - 主色调/标题 */
--color-primary-light: #334155; /* Slate 700 - 次要文本 */
--color-secondary: #64748b;    /* Slate 500 - 正文文本 */
--color-muted: #94a3b8;        /* Slate 400 - 辅助信息 */
```

### Background Colors
```css
--color-background: #fafaf9;  /* Stone 50 - 页面背景 */
--color-surface: #ffffff;     /* White - 卡片背景 */
--color-surface-alt: #f5f5f4; /* Stone 100 - 交替区块 */
```

### Accent Colors (保持克制)
```css
--color-accent: #b45309;      /* Amber 700 - 强调/CTA（极少使用） */
--color-accent-hover: #92400e; /* Amber 800 */
```

### Neutral Borders
```css
--color-border: #e7e5e4;       /* Stone 200 */
--color-border-light: #f5f5f4; /* Stone 100 */
```

## Motion Tokens

### Page Load Animations
```css
/* 编辑风格：优雅淡入，克制动画 */
--animation-fade-in: fadeIn 1.2s ease-out;
--animation-slide-up: slideUp 1s ease-out;
```

### Scroll Interactions
```css
--transition-scroll: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover States
```css
--transition-hover: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--hover-lift: translateY(-2px);
--hover-shadow: 0 8px 24px rgba(0,0,0,0.08);
```

## Layout Tokens

### Grid System
```js
{
  sectionMaxWidth: '1280px',  // 内容区最大宽度
  gridCols: 12,               // 12栏网格
  gutter: '2rem',             // 32px 间距
  sectionPadding: '6rem 0',   // Section 上下间距
}
```

### Content Widths
```js
{
  narrow: '640px',   // 窄栏（引言/引用）
  standard: '768px', // 标准正文
  wide: '1024px',    // 宽栏（多栏布局）
}
```

### Typography Spacing
```js
{
  headingBottom: '1.5rem',   // 标题下间距
  paragraphBottom: '1.25rem', // 段落下间距
  sectionBottom: '4rem',      // 区块下间距
}
```

## Tailwind Config Extension

```js
// tailwind.config.ts extend
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'var(--color-primary)',
        light: 'var(--color-primary-light)',
      },
      secondary: 'var(--color-secondary)',
      muted: 'var(--color-muted)',
      background: 'var(--color-background)',
      surface: {
        DEFAULT: 'var(--color-surface)',
        alt: 'var(--color-surface-alt)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
        hover: 'var(--color-accent-hover)',
      },
      border: {
        DEFAULT: 'var(--color-border)',
        light: 'var(--color-border-light)',
      },
    },
    fontFamily: {
      display: ['Cormorant Garamond', 'Georgia', 'serif'],
      sans: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
    },
    fontSize: {
      display: ['4.5rem', { lineHeight: '1.1', fontWeight: '300' }],
    },
  },
}
```
