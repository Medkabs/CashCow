import Image from "next/image"
import Link from "next/link";

import contributionShape_1 from "@/assets/img/images/contribution_shape01.png";
import contributionShape_2 from "@/assets/img/images/contribution_shape02.png";

const Contribution = () => {
   return (
      <section id="contribution" className="contribution-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="contribution-title">
                     <h2 className="title"><span>$1.2 M</span> arket Cap Goal</h2>
                  </div>
                  <div className="progress-wrap">
                     <ul className="list-wrap">
                        <li>$240K</li>
                        <li>$480K</li>
                        <li>$720K</li>
                     </ul>
                     <div className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "1%" }}></div>
                     </div>
                     <h6 className="progress-title"> $0<span>$1.2M</span></h6>
                  </div>
                  <div className="contribution-btn">
                     <Link href="/contact" className="btn">Purchase a Token</Link>
                     <Link href="/contact" className="btn btn-two">Read White Paper</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="contribution-shape-wrap">
            <Image src={contributionShape_1} alt="" className="alltuchtopdown" id ="dark"/>
            <Image src={contributionShape_2} alt="" className="leftToRight" id= "wallet" />
         </div>
      </section>
   )
}

export default Contribution
