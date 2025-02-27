"use client"
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Image from 'next/image';
import intro_thumb from '@/assets/img/logo/intro_1-1.png';
import chartImg from "@/assets/img/images/chart_img.png"

const tab_title: string[] = ["Funding Allocation", "Token Distribution",];
const chart_List_1: string[] = ["Contingency: 70%", "Business Development: 20%", "Investor: 30%", "Poland: 15%", "Legal & Regulation: 20%", "Czech Republic: 50%"]
const chart_List_2: string[] = ["Czech Republic: 50%", "Poland: 15%", "Legal & Regulation: 20%", "Contingency: 70%", "Business Development: 20%", "Investor: 30%"]


interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Mission Statement:",
      desc: (<>
         Cash Cow’s mission is to fuel entrepreneurial ambition and innovation by providing access to
         advanced AI tools, fostering a collaborative community, and creating a token-driven ecosystem
         where mutual success thrives.</>),
   },
   {
      id: 2,
      title: "Vision:",
      desc: (<>
         To establish Cash Cow as the leading platform for entrepreneurs seeking inspiration, practical
         strategies, and access to exclusive opportunities, while building a global community that
         rewards creativity and collaboration.</>),
   },
   // {
   //    id: 3,
   //    title: "Why Choose Cash Cow?",
   //    desc: (<>Cash Cow is more than a cryptocurrency or a platform—it’s a movement. It’s a transformative
   //       ecosystem that redefines how entrepreneurs access resources, connect with like-minded
   //       individuals, and create meaningful change in their industries. Holding the Cash Cow token isn’t
   //       just an investment; it’s an opportunity to participate in a dynamic community where fun meets
   //       functionality, and creativity meets opportunity.</>),
   // },
]



const ChartArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };


   const chartData = [
      [70, 20, 30, 15, 20, 50], // Funding Allocation percentages
      [50, 15, 20, 70, 20, 30]  // Token Distribution percentages
   ];
   


   return (
      <div className="pt-130 overflow-hidden bg-black2">
      <div className="container">
         <div className="row"> 
            <div className="col-xl-6">
               <div className="section-title mb-45">
                  <h2 className="title style2">Introducing Cash Cow</h2>
                  <p className="sec-text">Cash Cow ($COW) – Where Memes Meet Smart Tokenomics.

</p>
               </div>
            </div>
         </div>
         <div className="chart-text row justify-content-between"  >
            <div className="col-xl-4">
               {intro_data.map((item) => (
                  <div key={item.id} className="intro-wrap">
                     <h6 className="intro-wrap-title">{item.title}</h6>
                     <p className="intro-wrap-text">{item.desc}</p>
                  </div>
               ))}
            </div>
            <div className="col-xl-6">
               <div className="intro-thumb1 alltuchtopdown" >
                  <Image src={intro_thumb} alt="img" />
               </div>
               <div className="chart-text2 " style={{ marginTop: '168px', width: '33.5rem' }}>
                  <h6 className="intro-wrap-title">Why Choose Cash Cow?</h6>
                  <p className="intro-wrap-text">Cash Cow is more than a cryptocurrency or a platform—it’s a movement. It’s a transformative
ecosystem that redefines how entrepreneurs access resources, connect with like-minded
individuals, and create meaningful change in their industres.</p>
                  <p className="intro-wrap-text mt-40">Holding the Cash Cow token isn’t
just an investment; it’s an opportunity to participate in a dynamic community where fun meets
functionality, and creativity meets opportunity.</p>

                  
               </div>
            </div>
         </div>
      </div>
   </div>
   )
}

export default ChartArea
