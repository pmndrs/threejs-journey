import { ExamplesList } from '../components/ExamplesList/ExamplesList'
import { Header } from '../components/Header/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <ExamplesList />
      </main>
    </div>
  )
}

export default Home
