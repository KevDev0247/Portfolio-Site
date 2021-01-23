import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaMedium } from "react-icons/fa"

import "./home.css"

function Home() {
    const options = ["Full Stack Developer", "Android Developer", "ML & AI Enthusiast"];
    const [index, setIndex] = useState(0);
    const [bio, setBio] = useState(options[0]);

    useEffect(() => {
        const indexInterval = setInterval(() => {
            setIndex(prevIndex => prevIndex === 1 ? 0: 1)
        }, 3500);

        return () => clearInterval(indexInterval)
    }, []);

    useEffect(() => {
        setBio(options[index]);
    }, [index, options]);

    function handleAboutClick() {
        document.getElementById("About").scrollIntoView({behavior: "smooth"});
    }

    function handleExperiencesClick() {
        document.getElementById('Experiences').scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div>
            <div className="home container-fluid my-5 pt-lg-5 pb-5">
                <div className="row pt-5">
                    <div className="offset-xl-2 col-xl-4 offset-lg-1 col-lg-6 offset-md-1 col-md-6 offset-sm-1 col-sm-10 offset-1 col-10 pb-5">
                        <h1 className="home-intro">
                            <span style={{fontWeight: "bold", lineHeight: "150%"}}>Greetings!</span><br/>
                            I'm Kevin, <br/>
                            <span key={bio} className="home-bio-animation">{bio}</span>
                        </h1>
                        <button onClick={handleAboutClick} className="mt-4 btn btn-primary py-2 px-3">
                            <span className="lead">Who am I</span>
                        </button>
                        <button onClick={handleExperiencesClick} className="mt-4 ml-3 btn btn-primary py-2 px-3">
                            <span className="lead">Timeline</span>
                        </button>
                        <br/>
                        <a aria-label={"Email"} href="mailto:zhijunwang2002@gmail.com"><FaEnvelope size={32} color={"#deddcc"} className="mt-5 mr-5 grow-hover-effect"/></a>
                        <a aria-label={"Github"} href="https://github.com/KevDev0247"><FaGithub size={32} color={"#9413f0"} className="mt-5 mr-5 grow-hover-effect"/></a>
                        <a aria-label={"Medium"} href="https://donkevin1980s.medium.com/"><FaMedium size={32} color={"#ffffff"} className="mt-5 mr-5 grow-hover-effect"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home