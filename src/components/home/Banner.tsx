"use client"
import Image from "next/image"
import CountdownClock from "@/ui/CountDownClock";
// import Image from "next/image"
import Link from "next/link"

import hero_thumb from "@/assets/img/images/hero-image.png"
// import CountdownClock from "@/ui/CountDownClock"
// import bannerShape_1 from "@/assets/img/banner/banner_shape01.png";
// import bannerShape_2 from "@/assets/img/banner/banner_shape02.png";

const Banner = () => {
   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown" id = "heroimage">
                        <Image src={hero_thumb} alt="img" unoptimized={true} />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">Cash Cow ($COW) <br />The Deflationary Meme Coin with Real Utility </h1>
                     <div className="btn-wrap">
                        <Link href="/contact" className="btn btn2" >
                           Purchase a Token
                        </Link>
                        <Link href="/blog" className="btn btn-two" >
                           Read  Documents
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">Pre-launch will start in...</h2>
               <ul className="skill-feature_list">
                  <li>Pre-launch</li>
                  <li>Launch</li>
                  <li><h4>AI Beta Testing</h4></li>
               </ul>
               <div className="skill-feature">
                  <div className="progress">
                     <div className="progress-bar" style={{ width: "5%" }}>
                     </div>
                  </div>
                  <div className="progress-value-max">AI Launch</div>
               </div>
               <ul className="skill-feature_list style2">
                  <li>August 2025</li>
                  <li>April 2026</li>
                  <li>September 2026</li>
               </ul>
               <div className="banner-countdown-wrap">
                  <div className="coming-time" data-countdown="2025/08/20">
                  <CountdownClock />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
