import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Allan C. F. Freitas',
  description: 'Portifolio Allan Cássio Ferreira de Freitas',
  keywords: [
    'Nextjs',
    'Next',
    'ReactJs',
    'React',
    'NodeJs',
    'HTML',
    'CSS',
    'Postgres',
    'PostegreSQL',
    'Mongo',
    'MongoDB',
    'ExpressJs',
    'Express',
    'Fastify',
    'Prisma',
    'AWS',
    'Firebase Realtime',
    'Firebase',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
