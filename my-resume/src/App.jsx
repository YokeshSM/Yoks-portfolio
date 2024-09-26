import Navbar from "../src/components/Navbar"
import About from './pages/About'
import Projects from './pages/Projects'
import FrontPage from "./pages/FrontPage"
import Login from "./pages/Login"
import Footer from "../src/components/Footer"
import "../src/assets/css/index.css"
import WebLayouts from "./layouts/WebLayouts"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import '../src/assets/css/index.css'

function App() {

  return (
    <>
    <div className="fuzzy-bubbles-regular">
   <BrowserRouter>
   <Routes>
    <Route element={<WebLayouts/>}>
    <Route path="/" element={<FrontPage/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    </Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </div>
    </>
  )
}

export default App
