import Image from 'next/image'
import { Inter } from '@next/font/google'
import {notFound} from 'next/navigation' 
import os from 'os' //node APIs

import Counter from '@/components/Counter';
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  console.log('안녕 -서버');
  console.log(os.hostname());
  return (
    <>
      
      <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt='서버이미지' width={400} height={400}/> 
      <h1>홈페이지 입니다.</h1>
      <Counter />
    </>
  )
}
