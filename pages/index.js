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

	
	<p className="alpharelease">
          <h2>Alpha Release Links</h2>
	  <p><a href="https://docs.google.com/document/d/e/2PACX-1vSAkBP-bzRK1i7W22prsx0DKBM67qvtTrPYBfyejOUdwqOC5CypkuM5adsRQjNWi_q9Wsj3Q-lDYyB9/pub">Alpha Release Report</a></p>
	  <p><a href="https://vizhub.com/seansanchez951/c1d1816b4d09400484c2777ba8e96655">Lollipop Chart in d3: Best Year in Music</a></p>
	  <p><a href="https://vizhub.com/seansanchez951/96a5c03ffb7f470fbc1134ae0af2866c">Bubble Chart in d3: Music Genres Over Time</a></p>
	  <p><a href="https://photos.app.goo.gl/tFVSeVNfAdS63QXk6">Treemap in RawGraphs: Average Scores Per Genre</a></p>
		
	</p>
	
 
 
      </main>

      <Footer />
    </div>
  )
}
