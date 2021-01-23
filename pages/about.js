import styles from '../styles.module.css'
import Header from '../components/Header'

export default function About() {
    return (
        <>
            <div className={styles.hello}>
                <Header />
                <h1>About Page</h1>
            </div>
        </>
    )

}