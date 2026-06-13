const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 3,
  });
  const page = await context.newPage();

  // 访问页面
  await page.goto('http://localhost:3008', {
    waitUntil: 'networkidle'
  });

  // 等待页面完全加载
  await page.waitForTimeout(4000);

  // Hero 区域4K高清截图
  const hero = await page.locator('section').first();
  await hero.screenshot({
    path: 'assets/examples/campcoding-bold-hero.png'
  });

  await browser.close();

  console.log('✓ 编程训练营 Hero 区域截图已保存到 assets/examples/campcoding-bold-hero.png');
})();
