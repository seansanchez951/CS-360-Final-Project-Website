import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Reviewing Pitchfork Reviews" />
        <p id="s">Sean Sanchez </p>
        <p className="description">
          Analysis of Pitchfork music reviews through data visualization.
          (beta coming soon)</p>
	
	<p id="a">alpha</p>
	<p className="alpharelease">
          <h2>Alpha Release Links</h2>
	  <a href="https://vizhub.com/seansanchez951/c1d1816b4d09400484c2777ba8e96655">Lollipop Chart</a>
	</p>
	
 
 
      </main>

      <Footer />
    </div>
  )
}
