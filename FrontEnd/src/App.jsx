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
import AdminAddProduct from './components/Admin/AdminComponent/AdminAddProduct'
import AdminDepartment from './components/Admin/AdminComponent/AdminDepartment'
import MoreDiscount from "./components/Discounts/MoreDiscount/MoreDiscount";
import CategoryCartds from './components/Discounts/MoreDiscount/MoreDiscountComponent/MoreDiscountLink/CategoryCartds'
import ContextProvider from "./Context/ContextProvider";
import AdminAddProductCatalog from "./components/Admin/AdminComponent/AdminAddProductCatalog";
import ScrollTop from "./components/ScrollTop/ScrollTop";

// axios.defaults.withCredentials = true;



function App() {

  return (

    <ContextProvider>
      <BrowserRouter>
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Branches" element={<Branches />} />
          <Route path="/Custome" element={<Custome />} />
          <Route path="/Discounts" element={<Discounts />} />
          <Route path="/Admin-Sign" element={<AdminSign />} />
          <Route path="/Admin" element={<Admin />} >
            <Route path="Admin-Product" element={<AdminAddProduct />} />
            <Route path="Admin-Department" element={<AdminDepartment />} />
            <Route path="Admin-ProductCatalogImg" element={<AdminAddProductCatalog />} />
          </Route>
          <Route path="/More-Discount" element={<MoreDiscount />} >
            <Route path="Drink/:id" element={<CategoryCartds />} />
            <Route path="Milk/:id" element={<CategoryCartds />} />
            <Route path="Clearning/:id" element={<CategoryCartds />} />
            <Route path="Book/:id" element={<CategoryCartds />} />
            <Route path="Electronic/:id" element={<CategoryCartds />} />
            <Route path="Firing/:id" element={<CategoryCartds />} />
            <Route path="Cake/:id" element={<CategoryCartds />} />
            <Route path="Food/:id" element={<CategoryCartds />} />
            <Route path="Fruit/:id" element={<CategoryCartds />} />
            <Route path="Meat/:id" element={<CategoryCartds />} />
            <Route />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
