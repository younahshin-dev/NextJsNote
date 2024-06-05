
import styles from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (        
    
    <div>
      <div className={styles.div}>
        <nav className={styles.nav}>
            <a href="">여성옷</a>
            <a href="">남성옷</a>
        </nav>
      </div>
      <div>
        {children}
      </div>
    </div>
    
    
  )
}
