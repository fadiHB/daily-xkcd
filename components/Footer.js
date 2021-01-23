import Link from 'next/link'

export default function Footer() {
    let items = []
    for (let i = 2406; i <= 2415; i++) {
        let myObj = { k: i }
        items.push(myObj)
    }
    return (
        <>
            <ul>
                {items.reverse().map((elem) =>
                    <Link key={elem.k} href="/comic/[comic].js" as={`/comic/${elem.k}`}>
                        <a>#{elem.k} | </a>
                    </Link>
                )}
            </ul>
        </>
    )
}