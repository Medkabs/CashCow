"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

import logo_1 from "@/assets/img/logo/logo.png";

const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    {/* <div className="nav-logo">
                        <Link href="/"><Image src={logo_1} alt="Logo" unoptimized={true} /></Link>
                    </div> */}
                    <div className="menu-outer">
                        <MobileMenu setIsActive={setIsActive} />
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><a href="https://www.facebook.com/share/16FQUrGEaB/?mibextid=wwXlfr"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://x.com/thecashcowtoken?s=11"><i className="fab fa-X"></i></a></li>
                            <li><a href="https://www.instagram.com/cashcowtoken?igsh=aGpwMnB0cmxyNHdw"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://t.me/+PQwRreFFyzVhYTlh"><i className="fab fa-telegram"></i></a></li>
{/*                             <li><a href="#"><i className="fab fa-youtube"></i></a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar
