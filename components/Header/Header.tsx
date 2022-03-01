import Image from 'next/image'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <Image src="/logo.svg" width={50} height={50} alt="" />
        <h1>
          <strong>react three fiber</strong> journey
        </h1>
      </div>
      <a className={styles.repoLink} href="https://github.com/pmndrs/threejs-journey" target="_blank" rel="noreferrer"> 
        <Image src="/github.svg" alt="Github Icon" width={24} height={24} />
      </a>
    </header>
  )
}
