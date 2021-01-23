import styles from '../../styles.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ComicDetails(props) {
    return (
        <>
            <div className={styles.hello}>
                <Header />
                <h2>{props.singleComic.title}</h2>
                <img src={props.singleComic.img} />
                <Footer/>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.query.comic
    const res = await fetch(`http://xkcd.com/${id}/info.0.json`);
    const dataObj = await res.json();
    return { props: { singleComic: dataObj } };
}