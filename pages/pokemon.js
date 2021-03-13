import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())
const baseUrl = "https://pokeapi.co/api/v2"

export default function Home() {
    const { data, error } = useSWR(baseUrl + "/pokemon/ditto", fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div className="container">
            <Head>
            <title>martindue.dev</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <a href="/about"><Header title="Pokemon" /></a>
                <p className="description">
                    My name is {data.name}!
                </p>
            </main>
        </div>
    )
}