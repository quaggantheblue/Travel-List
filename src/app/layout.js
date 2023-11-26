import { Inter } from 'next/font/google'
import './globals.css'
import '../../public/css/nav.css'
import '../../public/css/search-input.css'
import '../../public/css/search.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orase',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
