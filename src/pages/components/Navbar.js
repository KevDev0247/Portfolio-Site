import React from "react"

function Navbar() {
    return (
        <nav id="navbar-scrollspy" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="index.html">Zhijun Wang</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto text-uppercase">
                    <li class="nav-item">
                        <a class="nav-link nav-link-grow-up" href="#home"><i class="fas fa-home"></i> Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-grow-up" href="#about"><i class="fas fa-info-circle"></i> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-grow-up" href="#projects"><i class="fas fa-desktop"></i> Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-grow-up" href="#contact"><i class="fas fa-address-book"></i> Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar