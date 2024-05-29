import "./App.css"
import Features from "./components/Features"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Pricing from "./components/Pricing"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
