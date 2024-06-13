import Header from "./components/Header/Header"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import Feed from "./components/Feed/Feed"
import './App.css'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Jumbotron />

        <Feed />
      </main>
    </>
  )
}

export default App
