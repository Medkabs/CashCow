"use client"
import Image from "next/image";
import Link from "next/link";

import footerShape_1 from "@/assets/img/images/footer_shape01.png";
import footerShape_2 from "@/assets/img/images/footer_shape02.png";
import NewsletterForm from "@/components/forms/NewsletterForm";

interface DataType {
   id: number;
   class_name: string;
   title: string;
   footer_link: {
      link: string;
      link_title: string;
   }[]
}

const footer_data: DataType[] = [

   {
      id: 2,
      class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-6",
      title: "Usefull Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/contact", link_title: "Contact us" }, { link: "/#feature", link_title: "Feature" }, { link: "/#chart", link_title: "Chart" }, { link: "/#roadMap", link_title: "Roadmap" }]
   },

   // {
   //    id: 3,
   //    class_name: "col-xl-3 col-lg-3 col-md-4 col-sm-4",
   //    title: "Usefull Links",
   //    footer_link: [{ link: "/contact", link_title: "Help Center" }, { link: "/contact", link_title: "Partners" }, { link: "/contact", link_title: "Suggestions" }, { link: "/blog", link_title: "Blog" }, { link: "/contact", link_title: "Newsletters" },]
   // },
]

const Footer = () => {
   return (
      <footer>
         <div className="banner-area banner-bg" style={{ backgroundImage: `url(/assets/img/bg/footer_bg.png)`, height: '2rem' }}>
            <div className="container ">
               {/* <div className="footer-top"> */}
               <div className="row ">
                  {footer_data.map((item) => (
                     <div key={item.id} className={item.class_name}>
                        <div className="footer-widget">
                           <h4 className="fw-title">{item.title}</h4>
                           <div className="footer-link">
                              <ul className="list-wrap">
                                 {item.footer_link.map((li, i) => (
                                    <li key={i}><Link href={li.link}>{li.link_title}</Link></li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  ))}

                  {/* <div className="col-xl-3 col-lg-4 col-sm-8">
                     <div className="footer-widget">
                        <h4 className="fw-title">Subscribe Newsletter</h4>
                        <div className="footer-newsletter">
                           <p>In Today's world, informarion is currency</p>
                           <NewsletterForm />
                        </div>
                     </div>
                  </div> */}
               </div>
            

            <div className="footer-bottom text-center">
               <div className="">
                  <div className="col-lg-12">
                     <div className="copyright-text">
                        <p>Powered by Particles.Ai 2025</p>
                     </div>
                  </div>
               </div>
            </div>
            </div>
         </div>

         <div className="footer-shape-wrap">
            <Image src={footerShape_1} alt="" className="alltuchtopdown" unoptimized={true} />
            <Image src={footerShape_2} alt="" className="leftToRight" unoptimized={true} />
         </div>
         {/* </div> */}
      </footer>
   )
}

export default Footer;
