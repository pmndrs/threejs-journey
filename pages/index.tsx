import Head from 'next/head'
import { ExamplesList } from '../components/ExamplesList/ExamplesList'
import { Header } from '../components/Header/Header'
import { SEO } from '../components/SEO/SEO'

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Three.js Journey excersices implemented using react-three-fiber."
        image="/thumbnails/three.js journey.png"
      />
      <Header />
      <main>
        <ExamplesList />
      </main>
    </div>
  )
}

export default Home
