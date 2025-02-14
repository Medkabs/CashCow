"use client"
import Slider from "react-slick";

interface DataTyfe {
   id: number;
   roadmap_title: string;
   title: string;
   desc: JSX.Element;
}

const roadmap_data: DataTyfe[] = [
   {
      id: 1,
      roadmap_title: "02/2025",
      title: "Announcement",
      desc: (<>The announcement of one of the most prolific coins in the 2020s ERA and the pioneer of a hybrid utility meme coin in the AI ERA</>),
   },
   {
      id: 2,
      roadmap_title: "Preorder",
      title: "Prelaunch",
      desc: (<>The Pre Order is Launching and will be live on Minimal Distributors</>),
   },
   {
      id: 3,
      roadmap_title: "02/17/2025",
      title: "News Letter",
      desc: (<>EXTRA EXTRA READ ALL ABOUT IT!
         We will be announcing our Partnerships through our Trusty News Letter !!!!</>),
   },
   {
      id: 4,
      roadmap_title: "???????",
      title: "LAUNCH",
      desc: (<>
         We will Launch on all our platforms and be fully open on the SOLANA BLOCKCHAIN
         UTILITY COIN COMING SOON</>),
   },
   // {
   //    id: 5,
   //    roadmap_title: "End of Q4 2023",
   //    title: "Concept",
   //    desc: (<>SubQuery Builders/Grants Program SQT Network contract internal MVP Coordinator and client SDK implementations</>),
   // },
]

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   centerMode: true,
   centerPadding: '260px',
   autoplay: true,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '100px',
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '40px',
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            enterPadding: '0',
            centerMode: false,
         }
      },
   ]
}

const RoadMapArea = () => {
   return (
      <section id="roadMap" className="roadmap-area pt-140">
         <div className="container-fluid p-0">
            <div className="row g-0">
               <div className="col-lg-12">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Our Roadmap</h2>
                  </div>
               </div>
            </div>
            <Slider {...settings} className="row roadMap-active">
               {roadmap_data.map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="roadmap-item">
                        <span className="roadmap-title">{item.roadmap_title}</span>
                        <div className="roadmap-content">
                           <h4 className="title"><span className="dot"></span>{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </section>
   )
}

export default RoadMapArea
