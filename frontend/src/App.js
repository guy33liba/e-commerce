import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Resume from "./components/resume/Resume"
import SideBar from "./components/sidebar/SideBar"
import Testimonials from "./components/testemonials/Testimonials"
import Blog from "./components/blog/Blog"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
