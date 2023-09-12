import Header from '@/components/layout/header/Header'
import './globals.scss'
import type { Metadata } from 'next'

import { roboto } from './fonts'

export const metadata: Metadata = {
  title: 'Crisp',
  description: 'Crisp template on NextJS',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
