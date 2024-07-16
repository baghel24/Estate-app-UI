import HomePage from "./HomeLandingPage/HomePage"
import Agents from "./components/Agents"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import HouseShortDes from "./components/HouseDetails/HouseShortDes"
import HouseDetails from "./components/Pages/HouseDetails"
import ListPage from "./components/Pages/ListPage"
import SignIn from "./components/Pages/SignIn"
import SignUp from "./components/Pages/SignUp"
import Qualities from "./components/Qualities"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
 <div className=" pt-[4rem] lg:pt-[5rem] overflow-hidden">
    
 <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<Qualities/>} />
        <Route path="/agents" element={<Agents/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/houseDetails" element={<HouseDetails />} />
        <Route path="/houseShortDes" element={<HouseShortDes />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    <Footer/>
    </div>
    </BrowserRouter>

    </>
  )
}

export default App
