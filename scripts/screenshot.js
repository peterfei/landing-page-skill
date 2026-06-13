const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 3, // 3x 分辨率，生成超高清截图 (接近4K)
  });
  const page = await context.newPage();

  // 访问页面
  await page.goto('http://localhost:3007', {
    waitUntil: 'networkidle'
  });

  // 等待页面完全加载
  await page.waitForTimeout(4000);

  // 截图保存 - 4K高清完整页面
  await page.screenshot({
    path: 'assets/examples/raw-brutalist-full.png',
    fullPage: true,
    scale: 'device' // 使用设备像素比
  });

  // Hero 区域4K高清截图
  const hero = await page.locator('section').first();
  await hero.screenshot({
    path: 'assets/examples/raw-brutalist-hero.png'
  });

  await browser.close();

  console.log('✓ 4K高清截图已保存到 assets/examples/');
  console.log('  - raw-brutalist-full.png (完整页面, ~5760x3240分辨率)');
  console.log('  - raw-brutalist-hero.png (Hero区域, ~5760x3240分辨率)');
})();
