import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Navbare from './Components/Navbare/Navbare'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AboutUse from "./Pages/AboutUse/AboutUse";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbare/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/About Us' element={<AboutUse/>}></Route>
        <Route></Route>
      </Routes>
       <Footer/>
    </div>
  )
}

export default App


