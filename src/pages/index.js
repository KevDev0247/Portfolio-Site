import React from "react"
import Navbar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/Home/Home"
import { Helmet } from "react-helmet"

export default function App() {
  return (
    <div>
      <Helmet>
        <title>Kevin Zhijun Wang</title>
      </Helmet>

      <div className="min-vh-100" style={{ backgroundImage: `url(${require("./imgs/background_1.png")})` }}>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}
