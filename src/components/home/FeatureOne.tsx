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
      title: (<>Real World Value Through Token Equity</>),
      desc: (<>AUnlike traditional meme tokens, the Cash Cow token is built on a foundation of real-world value. Membership fees and the growth of the community are directly reinvested into the token’s equity, creating a continually expanding ecosystem where every token holder benefits. As the platform grows, so does the value of the Cash Cow token, giving members both utility and financial opportunity.</>),
      img: featureImg_1,
   },
   {
      id: 2,
      title: (<>Platform Built for Mutual Success</>),
      desc: (<>At the heart of Cash Cow is the principle of shared growth. The platform thrives as its members thrive, creating a virtuous cycle of mutual success. Token holders enjoy exclusive perks such as early access to platform updates, premium features, and the ability to shape the future of the ecosystem through governance features.</>),
      img: featureImg_2,
   },
   {
      id: 3,
      title: (<>Exclusive Access  <br /> to the Cash Cow List</>),
      desc: (<>The Cash Cow List is your gateway to recognition and opportunity. This exclusive, curated list showcases the most promising entrepreneurial ideas within the community, connecting members to funding opportunities, partnerships, and other resources that can elevate their ventures. Whether you’re looking to gain visibility, attract investors, or collaborate with other members, the Cash Cow List is your platform to shine.</>),
      img: featureImg_3,
   },
   {
      id: 4,
      title: (<>A Thriving Community of Innovators
         </>),
      desc: (<>Cash Cow thrives on collaboration and connection. By joining the ecosystem, you’re becoming part of a global network of ambitious entrepreneurs, investors, and thought leaders. This community provides unparalleled opportunities to share ideas, gain insights, and form partnerships with like-minded individuals who are equally invested in collective success.</>),
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
