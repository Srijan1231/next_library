import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToastProvider from '@/providers/ToastProvider';
import Container from '@/components/layout/Container';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Library Management System',
  description: 'Library Management System using Next.js(typescript)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider/>
        <Container>{children}</Container>
        </body>
    </html>
  )
}
