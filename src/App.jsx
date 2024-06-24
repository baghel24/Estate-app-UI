import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Houses from "./components/Houses"
import Qualities from "./components/Qualities"
import Rating from "./components/Rating"
import Search from "./components/Search"
import Stats from "./components/Stats"

function App() {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header/>
      <Home/>
      <Search/>
      <Stats/>
      <Qualities/>
      <Houses/>
      <Rating/>
      <Contacts/>
      <Footer/>
      </div>
      <div>wfwef</div>

    </>
  )
}

export default App
