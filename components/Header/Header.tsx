import Image from 'next/image'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Image src="/logo.svg" width={50} height={50}  />
            <h1><strong>react three fiber</strong> journey</h1>
        </header>
    )
}

export {Header}