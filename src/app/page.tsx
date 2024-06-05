import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {notFound} from 'next/navigation' 
import os from 'os' //node APIs

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  console.log(os.hostname());
  return (
    <h1>홈페이지 입니다.</h1>
  )
}
