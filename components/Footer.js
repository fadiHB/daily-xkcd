import Link from 'next/link'

export default function Footer() {
    let items = []
    for (let i = 2415; i >= 2406; i--) {
        let myObj = { e: i }
        items.push(myObj)
    }
    return (
        <>
            <ul>
                {items.map((number) =>
                    <Link key={number.e} href="/comic/[comic].js" as={`/comic/${number.e}`}>
                        <a>#{number.e} | </a>
                    </Link>
                )}
            </ul>
        </>
    )
}