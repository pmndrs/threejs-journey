import Head from 'next/head'
import { ExamplesList } from '../components/ExamplesList/ExamplesList'
import { Header } from '../components/Header/Header'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main>
        <ExamplesList />
      </main>
    </div>
  )
}

export default Home
