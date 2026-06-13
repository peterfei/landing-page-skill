import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InsightMedia | 品牌内容战略咨询',
  description: '帮助企业高管构建具有战略影响力的品牌内容体系，提升市场认知度和商业价值。免费下载品牌策略白皮书。',
  keywords: ['品牌战略', '内容咨询', '企业品牌', '品牌管理', '市场营销'],
  openGraph: {
    title: 'InsightMedia | 品牌内容战略咨询',
    description: '帮助企业高管构建具有战略影响力的品牌内容体系',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof document !== 'undefined') {
                  document.body.removeAttribute('data-atm-ext-installed');
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
