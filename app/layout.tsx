import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToastProvider from '@/providers/ToastProvider';


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
       {children}
        </body>
    </html>
  )
}
