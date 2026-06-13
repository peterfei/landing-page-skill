import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlowSync - 团队协作效率提升3倍的工作流自动化平台',
  description: '中小企业一站式工作流自动化解决方案。3倍提升团队协作效率，无需编码，5分钟即可上手。预约免费产品演示。',
  openGraph: {
    title: 'FlowSync - 团队工作流自动化平台',
    description: '中小企业一站式工作流自动化解决方案。3倍提升团队协作效率。',
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
            <body className="font-body">{children}</body>
        </html>
    )
}
