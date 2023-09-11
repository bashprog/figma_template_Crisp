import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({weight: ['300', '400', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Crisp',
  description: 'Crisp template on NextJS',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        </body>
    </html>
  )
}
