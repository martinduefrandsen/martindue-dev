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
        <a href="/about"><Header title="martindue.dev" /></a>
        <p className="description">
          Backend Developer at <a href="https://quickorder.io/">QuickOrder</a> and fiddling, tinkering, experimenting on <a href="https://github.com/martinduefrandsen">martinduefrandsen</a>
        </p>
        <p>
          Get in touch at <a href="mailto:ihaveamessagefor@martindue.dev">ihaveamessagefor@martindue.dev</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
