import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'profile',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1>
        Global Component ---
        <Link href={"/"}>
          Go To Home
        </Link>
      </h1>
      {children}</body>
    </html>
  )
}
