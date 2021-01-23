import React from "react"
import Navbar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home/Home"
import { Helmet } from "react-helmet"
import About from "./components/About/About"

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Kevin Zhijun Wang</title>
      </Helmet>

      <div style={{ backgroundColor:"#000000" }}>
        <Navbar />
        <Home />
        <About />
      </div>
    </div>
  )
}
