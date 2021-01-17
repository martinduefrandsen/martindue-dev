import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>martindue.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to martindue.dev" />
        <p className="description">
          Backend Developer ⚡️ <a href="https://quickorder.io/" target="_blank">QuickOrder</a> and tinkering 🧠 <a href="https://github.com/martinduefrandsen" target="_blank">martinduefrandsen</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
