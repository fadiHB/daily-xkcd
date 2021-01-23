import Link from 'next/link'
import styles from '../styles.module.css'


export default function Header() {
    return (
        <>
            <nav>
                <Link href="/">
                    <a className={styles.Href} >Home | </a>
                </Link>
                <Link href="/about">
                    <a className={styles.Href} >About</a>
                </Link>
            </nav>
        </>
    )
}