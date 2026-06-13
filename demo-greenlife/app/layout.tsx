import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GreenLife | 有机食品订阅配送',
  description: '新鲜有机蔬菜直送到家。100%有机认证，从农场到餐桌，让健康生活更简单。',
  keywords: ['有机食品', '蔬菜配送', '有机订阅', '健康生活'],
  openGraph: {
    title: 'GreenLife - 有机食品订阅',
    description: '新鲜有机 · 直送到家',
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
