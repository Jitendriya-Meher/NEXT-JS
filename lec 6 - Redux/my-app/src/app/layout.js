import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'
import Provider from '@/Redux/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
      <Navbar></Navbar>
      {children}
      </Provider>
      </body>
    </html>
  )
}
