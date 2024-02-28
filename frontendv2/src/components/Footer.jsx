import React from 'react'
import { Link } from 'react-router-dom';
import openJob1 from '../assets/images/open-jobs-1.webp'

function Footer() {
  return (
    <footer id="footer">
        <div className="max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto px-2 pt-8 pb-5">
            <div className="flex flex-col items-center xl:flex-row xl:justify-between">
                <div className="mb-6 xl:mb-0">
                    <a href="#">
                        <img src={openJob1} className="h-52 rounded-3xl" alt="footer Logo" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Resources</h2>
                        <ul className="text-secondary font-medium">
                            <li className="mb-4">
                                <Link to="/" className="hover:underline">Home</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/category/6" className="hover:underline">Internships</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about" className="hover:underline">About Open Jobs</Link>
                            </li>
                            <li>
                                <a href="#contact-us" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Follow us</h2>
                        <ul className="text-secondary font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline ">Instagram</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Tiktok</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Legal</h2>
                        <ul className="text-secondary font-medium">
                            <li className="mb-4">
                                <Link to="/policy" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/conditions" className="hover:underline">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Colored hr */}
            <div className="flex flex-row w-full items-center my-6 lg:my-8">
                <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
                <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
                <div className="bg-primary h-0.5 md:h-1 w-1/4"></div>
                <div className="bg-gold h-0.5 md:h-1 w-1/4"></div>
            </div>
            
            <div className="flex items-center flex-col sm:flex-row sm:justify-between">
                <span className="text-sm text-secondary font-medium italic sm:text-center">© 2024 <a href="#" className="hover:underline">Open
                        Jobs™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a href="#">
                        <i className="fa-brands fa-facebook text-secondary hover:text-primary"></i>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-instagram text-secondary hover:text-primary"></i>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-x-twitter text-secondary hover:text-primary"></i>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-tiktok text-secondary hover:text-primary"></i>
                        <span className="sr-only">Tiktok page</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer