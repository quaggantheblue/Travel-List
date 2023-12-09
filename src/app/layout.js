import { Inter } from 'next/font/google'
import './globals.css'
import '../../public/css/nav.css'
import '../../public/css/search-input.css'
import '../../public/css/search.css'
import '../../public/css/search-result.css'
import '../../public/css/city-content.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orase',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_KEY}&callback=console.debug&libraries=maps,marker&v=beta`}></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
