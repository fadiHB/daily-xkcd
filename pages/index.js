import styles from '../styles.module.css'
import About from './about'
import Link from 'next/link'

export default function Home(props) {
  return (
    <>

      <Link href = '/'>
        <a>Home</a>
      </Link>
      <Link href = './about'>
        <a>About</a>
      </Link>
      <div className={styles.hello}>
        <p>Hello World</p>
      </div>

    </>

  )
}

export async function getServerSideProps(){
  const response = await fetch('https://xkcd.com/info.0.json');
  const jsonData  = await response.json();
  console.log(jsonData)
  return {props: {users: jsonData}}
}
