import "./App.css"
import Navbar from "./components/Navbar"
import ProductsScreen from "./screens/product-screen/ProductsScreen"
import HomeScreens from "./screens/home-screen/HomeScreens"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreens />} />
          <Route path="/product/:id" element={<ProductsScreen />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
