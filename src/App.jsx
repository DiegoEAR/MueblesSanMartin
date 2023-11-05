import Layout from "./components/Layout/Layout"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Destacados from "./components/Destacados/Destacados"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Layout>
        <Hero></Hero>
        <Destacados></Destacados>
      </Layout>
      <Footer></Footer>
    </>
  )
}

export default App
