import Image from "next/image";
import Link from "next/link";

import logo_1 from "@/assets/img/logo/logo.png";
import coinz from "@/assets/img/images/coinz.png";
const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
            <div className={`extra-info ${offCanvas ? "active" : ""}`}>
               <div className="close-icon menu-close">
                  <button onClick={() => setOffCanvas(false)}><i className="far fa-window-close"></i></button>
               </div>
               <div className="logo-side mb-30" >
                  {/* <Link href="/"><Image src={coinz} alt="coinz" /></Link> */}
               </div>
               <div className="side-info mb-30">
                  <div className="contact-list mb-30">
                     <h4>Cash Cow</h4>
                     
                  </div>
                 
                  <div className="contact-list mb-30">
                     <h4>Email Address</h4>
                     <p>info@cashcowtokens.com</p>
                     
                  </div>
               </div>
               <div className="social-icon-right mt-30">
                  {/* <Link href="#"><i className="fab fa-facebook-f"></i></Link> */}
                  <Link    href="https://www.twitter.com/thecashcowtoken" 
        target="_blank" 
        rel="noopener noreferrer" ><i className="fab fa-twitter"></i></Link>
                  {/* <Link href="#"><i className="fab fa-google-plus-g"></i></Link> */}
                  <Link    href="https://www.instagram.com/cashcowtoken" 
        target="_blank" 
        rel="noopener noreferrer" ><i className="fab fa-instagram"></i></Link>
               </div>
            </div>
            <div onClick={() => setOffCanvas(false)} className={`offcanvas-overly ${offCanvas ? "active" : ""}`}></div>
         </div>
      </>
   )
}

export default HeaderOffcanvas
