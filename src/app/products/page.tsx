import Link from 'next/link'
import styles from './layout.module.css'

const products = ['shirt', 'pants', 'outer', 'acc'];
export default function SlugPage() { 
return (
    <section>
    <h1>제품 소개 페이지</h1>
    <ul>
        { 
            products.map((product, index) => (
                <li key={index}><Link href={`products/${product}`} >{product}</Link></li>
            ))
        }
       
    </ul>
    </section>
);
}