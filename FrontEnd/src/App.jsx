import { Routes, Route, BrowserRouter } from "react-router-dom";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import Home from './components/Home/Home'
import About from './components/About/About'
import Navbar from "./components/Navbar_Footer/Navbar";
import Footer from "./components/Navbar_Footer/Footer";
import Branches from "./components/BRANCHES/Branches";
import Custome from "./components/CUSTOME/Custome";
import Discounts from "./components/Discounts/Discounts"
import Admin from "./components/Admin/Admin";
import axios from "axios";
import AdminSign from "./components/Admin/AdminComponent/AdminSign";

axios.defaults.withCredentials = true;

// project template links
// http://preview.themeforest.net/item/veggie-supermarket-professional-html-template/full_screen_preview/12406095?_ga=2.234528094.1571227709.1707320525-2062948680.1705790704


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Branches" element={<Branches />} />
        <Route path="/Custome" element={<Custome />} />
        <Route path="/Discounts" element={<Discounts />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin-Sign" element={<AdminSign />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
