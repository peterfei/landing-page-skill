# 美学风格模板库

## 1. Minimalist（极简）

**视觉特征**：大量留白、单色系、克制的装饰、内容为王

**配色**：
- Primary: #0a0a0a（近黑）
- Background: #ffffff（纯白）
- Surface: #f5f5f5（浅灰）
- Text Primary: #0a0a0a
- Text Secondary: #737373
- Accent: #171717（深灰，极少使用）

**字体**：
- Display: "Helvetica Neue", "Arial", sans-serif
- Body: "Helvetica Neue", "Arial", sans-serif

**布局倾向**：单列居中、大面积留白、网格对齐严格

**代码示例**：
```tsx
// HeroSection - Minimalist
<section className="py-32 px-6 max-w-4xl mx-auto text-center">
  <h1 className="text-5xl font-normal tracking-tight text-neutral-950">
    简洁即力量
  </h1>
  <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
    去除一切不必要的装饰，让内容本身说话。
  </p>
</section>
```

**best for**：高端服务、设计工作室、咨询、奢侈品
**avoid when**：需要强烈情感冲击、娱乐产品、年轻潮流品牌

---

## 2. Bold（大胆）

**视觉特征**：高对比配色、大字号、强烈的视觉层级、动态元素

**配色**：
- Primary: #dc2626（鲜红）
- Background: #0a0a0a（纯黑）
- Surface: #171717
- Text Primary: #ffffff
- Text Secondary: #a3a3a3
- Accent: #facc15（明黄）

**字体**：
- Display: "Montserrat", "Impact", sans-serif
- Body: "Inter", sans-serif

**布局倾向**：非对称、大留白与大色块交替、倾斜或错位排版

**代码示例**：
```tsx
// HeroSection - Bold
<section className="bg-neutral-950 py-24 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-6xl font-black text-white uppercase tracking-tighter">
        打破常规
      </h1>
      <p className="mt-6 text-xl text-neutral-400">
        用大胆的视觉语言，让世界记住你。
      </p>
      <button className="mt-8 bg-red-600 text-white px-8 py-4 font-bold uppercase">
        立即开始
      </button>
    </div>
  </div>
</section>
```

**best for**：运动品牌、游戏、创意 agency、音乐节
**avoid when**：保守行业（金融、法律、医疗）、B2B 企业级产品

---

## 3. Vintage（复古）

**视觉特征**：暖色调、衬线字体、纹理感、装饰性元素、手工质感

**配色**：
- Primary: #78350f（深棕）
- Background: #fef3c7（奶油黄）
- Surface: #fde68a
- Text Primary: #451a03
- Text Secondary: #92400e
- Accent: #b45309（琥珀）

**字体**：
- Display: "Playfair Display", "Georgia", serif
- Body: "Merriweather", "Georgia", serif

**布局倾向**：边框装饰、复古图标、非对称但温暖、纸质纹理背景

**代码示例**：
```tsx
// HeroSection - Vintage
<section className="bg-amber-50 py-24 px-6 border-y-4 border-amber-800">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-serif text-amber-900 italic">
      经典永不过时
    </h1>
    <p className="mt-6 text-lg text-amber-800 font-serif">
      传承百年的工艺，只为独一无二的你。
    </p>
  </div>
</section>
```

**best for**：手工制品、咖啡/酒类、复古时尚、书店、民宿
**avoid when**：科技产品、SaaS、需要现代感的品牌

---

## 4. Organic（有机）

**视觉特征**：自然色调、圆润形状、渐变背景、植物/自然元素、柔和阴影

**配色**：
- Primary: #15803d（森林绿）
- Background: #f0fdf4（薄荷白）
- Surface: #dcfce7
- Text Primary: #14532d
- Text Secondary: #166534
- Accent: #84cc16（青柠）

**字体**：
- Display: "Nunito", "Quicksand", sans-serif
- Body: "Nunito", sans-serif

**布局倾向**：圆角卡片、柔和渐变、自然流动的不规则形状、大量绿色

**代码示例**：
```tsx
// HeroSection - Organic
<section className="bg-gradient-to-br from-green-50 to-emerald-100 py-24 px-6 rounded-3xl">
  <div className="max-w-5xl mx-auto text-center">
    <h1 className="text-5xl font-semibold text-green-900 rounded-2xl">
      与自然共生
    </h1>
    <p className="mt-6 text-lg text-green-700">
      可持续的生活方式，从每一个选择开始。
    </p>
  </div>
</section>
```

**best for**：健康/ wellness、有机食品、环保产品、瑜伽/冥想
**avoid when**：金融科技、工业制造、需要严肃感的行业

---

## 5. Editorial（编辑）

**视觉特征**：杂志排版、图文混排、精致衬线、大量留白、高级灰调

**配色**：
- Primary: #1e293b（石板灰）
- Background: #fafaf9（暖白）
- Surface: #f5f5f4
- Text Primary: #0c0a09
- Text Secondary: #78716c
- Accent: #0ea5e9（天蓝，极少）

**字体**：
- Display: "Cormorant Garamond", "Times New Roman", serif
- Body: "Source Sans Pro", "Helvetica", sans-serif

**布局倾向**：杂志式网格、大图配小字、多栏排版、精致的行高和字距

**代码示例**：
```tsx
// HeroSection - Editorial
<section className="bg-stone-50 py-24 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
    <div className="md:col-span-7">
      <h1 className="text-6xl font-serif text-stone-900 leading-none">
        设计是<br />无声的语言
      </h1>
    </div>
    <div className="md:col-span-5 flex items-end">
      <p className="text-stone-600 text-lg leading-relaxed">
        每一页排版，都是一次与读者的对话。
      </p>
    </div>
  </div>
</section>
```

**best for**：内容平台、杂志、时尚品牌、建筑/设计工作室
**avoid when**：纯工具型产品、需要快速转化的促销页面

---

## 6. Brutalist（粗野）

**视觉特征**：原始 HTML 感、高对比、系统默认字体、粗边框、无圆角、刻意的不完美

**配色**：
- Primary: #0000ff（纯蓝）
- Background: #ffffff（纯白）
- Surface: #ff00ff（洋红，高对比点缀）
- Text Primary: #000000
- Text Secondary: #333333
- Accent: #ffff00（纯黄）

**字体**：
- Display: "Times New Roman", "Courier New", monospace
- Body: "Courier New", monospace

**布局倾向**：无网格约束、元素重叠、粗黑边框、系统默认样式、反常规排版

**代码示例**：
```tsx
// HeroSection - Brutalist
<section className="bg-white py-16 px-4 border-b-4 border-black">
  <div className="max-w-none mx-4">
    <h1 className="text-7xl font-mono text-black uppercase tracking-tight"
        style={{ fontFamily: 'Times New Roman' }}>
      拒绝修饰
    </h1>
    <p className="mt-4 text-lg font-mono text-black border-l-4 border-blue-700 pl-4">
      真实、原始、不加过滤。
    </p>
    <button className="mt-8 bg-yellow-300 text-black px-6 py-3 font-mono border-2 border-black">
      [ 进入 ]
    </button>
  </div>
</section>
```

**best for**：艺术项目、独立音乐人、反主流品牌、创意实验
**avoid when**：任何需要建立商业信任的场景（电商、SaaS、金融）
