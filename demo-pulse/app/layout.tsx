import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PULSE 电音节 | 2024 沉浸式电音体验',
  description: '48小时不间断电音狂欢。全球百大DJ云集，早鸟票限时抢购。',
  keywords: ['电音节', 'EDM', '电音', '音乐节', '派对'],
  openGraph: {
    title: 'PULSE 电音节 2024',
    description: '释放电音本能，48小时沉浸狂欢',
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
