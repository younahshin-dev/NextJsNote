
import Link from 'next/link'
import styles from './layout.module.css'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (        
    
    <>
      
      <section className={styles.products}>
        {children}
      </section>
      <ul className={styles.ul}>
            <li> top </li>
            <li> bottom</li>
            <li> outer </li>
            <li> acc </li>
        </ul>
    </>
    
    
  )
}
