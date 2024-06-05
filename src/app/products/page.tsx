import Link from 'next/link'
import styles from './layout.module.css'

const products = ['shirt', 'pants', 'outer', 'acc'];
export default function SlugPage() { 
return (
    <section>
    <h1>제품 소개 페이지</h1>
    <ul>
      
        <li><Link href="/products/skirt">skirt</Link></li>
        <li><Link href="/products/pants">pants</Link></li>
        <li><Link href="/products/outer">outer</Link></li>
        <li><Link href="/products/acc">acc</Link></li>
    </ul>
    </section>
);
}