import Image, { StaticImageData } from "next/image"
import Link from "next/link";

import featureImg_1 from "@/assets/img/images/features_img01.png";
import featureImg_2 from "@/assets/img/images/features_img02.png";
import featureImg_3 from "@/assets/img/images/features_img03.png";
import featureImg_4 from "@/assets/img/images/features_img04.png";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: StaticImageData;
}
const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Deflationary by Design</>),
      desc: (<>A portion of every transaction is burned, meaning that over time, the supply of $COW decreases, making each token more scarce and valuable.</>),
      img: featureImg_1,
   },
   {
      id: 2,
      title: (<>Backed by Membership Fees</>),
      desc: (<>Unlike typical meme coins that rely on speculation, $COW is supported by real revenue from an engaged user base, ensuring stability and sustained demand.</>),
      img: featureImg_2,
   },
   {
      id: 3,
      title: (<>Utility Beyond Trading </>),
      desc: (<>Holding $COW isn’t just about price speculation. It unlocks exclusive benefits within the Cash Cow ecosystem, including premium platform features, rewards, and more.</>),
      img: featureImg_3,
   },
   {
      id: 4,
      title: (<>A Thriving Community of Innovators </>),
      desc: (<>As our platform expands and adoption increases, so does the demand for $COW, fueling organic price appreciation and long-term value.</>),
      img: featureImg_4
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">A Smarter Meme Coin Model. <br/>More Than Just a Token </h2>
                     <p> 
                        While meme coins have taken the crypto world by storm, many lack real backing or use cases.
                        Cash Cow is different. It embraces the fun and viral nature of meme culture while integrating 
                        real-world economic principles that drive continuous growth.</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content">
                           <h2 className="title"><Link href="#!">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <Image src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FeatureOne
