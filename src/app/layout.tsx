import { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import styles from './layout.module.css'
import { Open_Sans, Nanum_Gothic } from '@next/font/google'

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({ subsets: ['latin'] , weight: '700'});

export const metadata: Metadata = {
  title: '멋진 제품 사이트 ',
  description: '멋진 제품을 만드는 곳입니다.',
  metadataBase: null,
  icons: {
    icon: '/favicon.ico'
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note App</h1>
          <nav className={styles.nav}>
              <Link href="/products">Products</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
