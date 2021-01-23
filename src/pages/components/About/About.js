import React from "react"
import AboutIntro from "./AboutIntro";

function About() {
    return (
        <div id="about" className="container-fluid pt-3 pb-3" style={{ backgroundImage: `url(${require("../../imgs/background_2.png")})` }}>
            <AboutIntro />
        </div>
    )
}

export default About