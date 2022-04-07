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
          (beta coming soon)
	
	Alpha Release
		
        </p>
      
 
      </main>

      <Footer />
    </div>
  )
}
