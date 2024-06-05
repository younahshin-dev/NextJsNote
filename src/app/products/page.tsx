import Link from 'next/link'
import styles from './layout.module.css'
import { getProducts } from '@/service/products';

export const revalidate = 10;

export default async function SlugPage() { 
    // 서버파일(데이터 베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
    const products = await getProducts();
    return (
        <section>
        <h1>제품 소개 페이지</h1>
        <ul>
            { 
                products.map((product, index) => (
                    <li key={index}><Link href={`products/${product.id}`} >{product.name}</Link></li>
                ))
            }
        
        </ul>
        </section>
    );
}