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
        </p>
        <h2>Alpha Release</h2>
						<div class="row">
							<article class="col-6 col-12-xsmall work-item">
								<a href="images/thumbs/resume_image.jpg" class="image fit thumb"><img src="images/thumbs/resume_image.jpg" alt="" /></a>
								<h3>My Resume</h3>
								<p>Lollipop Chart</p>
								<li><a href="https://vizhub.com/seansanchez951/c1d1816b4d09400484c2777ba8e96655">Average Reviews Per Year</a></li>
							</article>
  
      </main>

      <Footer />
    </div>
  )
}
