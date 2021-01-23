import React from "react"

import 'jquery/dist/jquery.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
    return (
        <nav id="navbar-scrollspy" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">Kevin Zhijun Wang</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto text-uppercase">
                    <li className="nav-item">
                        <a className="nav-link nav-link-grow-up navbar-item" href="#home"><i class="fas fa-home"></i> Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-grow-up navbar-item" href="#about"><i class="fas fa-info-circle"></i> About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-grow-up navbar-item" href="#projects"><i class="fas fa-desktop"></i> Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-grow-up navbar-item" href="#blogs"><i class="fas fa-desktop"></i> Blogs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-grow-up navbar-item" href="#contact"><i class="fas fa-address-book"></i> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar