import styles from '../styles.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.hello}>
      <Header />
      <h2>{props.comic.title}</h2>
      <img src={props.comic.img} />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch('https://xkcd.com/614/info.0.json');
  const data = await res.json();
  return { props: { comic: data } };

}