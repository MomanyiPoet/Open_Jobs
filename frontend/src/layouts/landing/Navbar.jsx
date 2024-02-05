import React from 'react'

function Navbar() {
  return (
    <nav className="shadow-xl sticky top-0 z-50">
        <div className="navbar bg-cream max-w-7xl mx-auto">
            {/* Nav-item-left */}
            <div className="navbar-start text-secondary font-semibold">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-cream rounded-box w-52">
                        <li><a href="./index.html" className="text-primary">Home</a></li>
                        <li><a href="./pages.html">Jobs</a></li>
                        <li><a href="./pages.html">Internships</a></li>
                        <li><a href="./pages.html">Scholarships</a></li>
                        <li>
                            <a href="">More</a>
                            <ul className="p-2">
                                <li><a href="./about.html">About Us</a></li>
                                <li><a href="#contact-us">Contact Us</a></li>
                                <li><a href="#">Advice</a></li>
                                <li><a href="#">Training</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-primary">OPEN <span className="bg-gradient-to-r from-primary via-[#B38B59] to-primary text-transparent bg-clip-text">JOBS</span></a>
            </div>

            {/* Nav-item-right */}
            <div className="navbar-center hidden lg:flex text-secondary font-semibold">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="./index.html" className="text-primary">Home</a></li>
                    <li><a href="./pages.html">Jobs</a></li>
                    <li><a href="./pages.html">Internships</a></li>
                    <li><a href="./pages.html">Scholarships</a></li>
                    <li>
                        <details>
                            <summary>More</summary>
                            <ul className="p-2 bg-cream">
                                <li><a href="./about.html">About Us</a></li>
                                <li><a href="#contact-us">Contact Us</a></li>
                                <li><a href="#">Advice</a></li>
                                <li><a href="#">Training</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <form method="post" className="flex flex-row items-center justify-center space-x-4 bg-cream text-darky rounded-3xl py-1 px-4">
                    <input type="text" className="input input-xs w-full max-w-xs font-normal italic text-xs sm:text-sm bg-whity" placeholder="Search" required/>
                    <button type="submit"><i className="fa-solid fa-magnifying-glass-location fa-shake text-darky text-lg"></i></button>
                </form>
            </div>
        </div>

        {/* Colored hr */}
        <div className="flex flex-row w-full items-center">
            <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
            <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
            <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
            <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
        </div>
    </nav>
  )
}

export default Navbar;