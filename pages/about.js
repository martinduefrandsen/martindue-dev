import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About - martindue.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <a href="/pokemon"><Header title="About" /></a>
        <p className="description">
        I'm not wearing hockey pads. Someone like you. Someone who'll rattle the cages. I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.
<br/><br/>
This isn't a car. Bats frighten me. It's time my enemies shared my dread. Does it come in black? I will go back to Gotham and I will fight men Iike this but I will not become an executioner.
<br/><br/>
This isn't a car. I'm Batman I'm not wearing hockey pads. Bats frighten me. It's time my enemies shared my dread. My anger outweights my guilt. Swear to me! The first time I stole so that I wouldn't starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.
<br/><br/>
Someone like you. Someone who'll rattle the cages. I'll be standing where l belong. Between you and the peopIe of Gotham. It's not who I am underneath but what I do that defines me.
        </p>
      </main>

      <Footer />
    </div>
  )
}
