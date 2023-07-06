import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calculador',
  description: 'raulnunez-dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-900'>{children}</body>
    </html>
  )
}
