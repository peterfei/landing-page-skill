import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '匠人手作 | 手工皮具定制工作室',
  description: '传承百年手工艺，为您打造独一无二的专属皮具。每一件作品都是艺术品。',
  keywords: ['手工皮具', '定制', '手工制作', '皮具'],
  openGraph: {
    title: '匠人手作 - 手工皮具定制',
    description: '传承百年手工艺，只为独一无二的你',
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
