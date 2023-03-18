import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.Principal}>
        <h1 className={styles.MatheusFlix}>MatheusFlix</h1>
        <div className={styles.Titulo}>
          <h1>See what's next</h1>  
          <h2>WATCH ANYWHERE. CANCEL ANYTIME</h2>
          <Link href='/landing'><button><h1>WATCH FREE FOR 30 DAYS </h1></button></Link>
        </div>      
    </div>
  )
}
