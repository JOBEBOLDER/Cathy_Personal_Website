import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '数字艺术家 - 设计与代码的完美融合',
  description: '一个融合设计创意与编程技术的个人作品集',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}