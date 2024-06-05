
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
      
    </>
    
    
  )
}
