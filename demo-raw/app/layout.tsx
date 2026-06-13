import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAW - 极简力量训练',
  description: '不妥协的力量训练体验。专注、纯粹、高效。没有花哨，只有结果。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
