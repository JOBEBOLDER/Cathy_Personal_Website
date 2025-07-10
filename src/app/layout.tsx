import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from '../components/ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jieyao Chen - Digital Artist & Developer',
  description: 'Personal portfolio showcasing creative digital experiences and technical projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}