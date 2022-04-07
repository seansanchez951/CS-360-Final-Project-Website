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
	
	<p className"alpha">
		Alpha Release Links
		<h2>Absolute URLs</h2>
		<p><a href="https://www.w3.org/">W3C</a></p>
 
 
      </main>

      <Footer />
    </div>
  )
}
