import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "零基础转行编程训练营 | 90天拿到Offer",
  description:
    "专为应届毕业生设计的编程训练营，零基础入门，90天系统学习，导师1v1指导，平均薪资涨幅80%。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-background text-text-primary">{children}</body>
    </html>
  );
}
