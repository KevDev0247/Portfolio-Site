import React from "react"
import Navbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <div className="min-vh-100" style={{ backgroundImage: `url(${require("./imgs/background_1.png")})` }}>
      <Navbar />
    </div>
  )
}
