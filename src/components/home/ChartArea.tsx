"use client"
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Image from 'next/image';

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
      title: "Who We Are",
      desc: (<>Cash Cow, a flagship product of Flip It Mutual LLC, is a revolutionary ecosystem designed to empower and inspire entrepreneurs by leveraging the synergy of blockchain technology, artificial intelligence, and community collaboration. With its unique combination of playful branding and powerful utility, Cash Cow offers a transformative experience for individuals who want to turn their ideas into reality while benefiting from the equity growth of an innovative token-driven platform.
         At its core, Cash Cow blends the charm of a crypto meme token with real-world applications, creating a vibrant and engaged community of visionaries, innovators, and creators. By joining Cash Cow, members gain access to cutting-edge tools, valuable resources, and exclusive opportunities designed to foster entrepreneurial success.</>),
   },
   // {
   //    id: 2,
   //    title: "Wealth?",
   //    desc: (<>Users with Iko have lower system fees Price growth is gathered by demand for Unifox technologies. You own a stake in an international corporation. You are part of the community</>),
   // },
   // {
   //    id: 3,
   //    title: "True Riches?",
   //    desc: (<>The underlying growth attracts investors The whole community is interested in growing the Iko prize. The company is planning to continue to expand the project, and it will cost the top up</>),
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
                  <p className="sec-text">True wealth in the world of virtual currencies</p>
               </div>
            </div>
         </div>
         <div className="row justify-content-between">
            <div className="col-xl-4">
               {intro_data.map((item) => (
                  <div key={item.id} className="intro-wrap">
                     <h6 className="intro-wrap-title">{item.title}</h6>
                     <p className="intro-wrap-text">{item.desc}</p>
                  </div>
               ))}
            </div>
            <div className="col-xl-6">
               <div className="intro-thumb1 alltuchtopdown">
                  {/* <Image src={intro_thumb} alt="img" /> */}
               </div>
               <div className="intro-wrap mt-50">
                  <h6 className="intro-wrap-title">Our Mission & Vission</h6>
                  <p className="intro-wrap-text">Mission:
                  Cash Cow’s mission is to fuel entrepreneurial 
                  ambition and innovation by providing access to advanced AI tools, fostering a 
                  collaborative community, and creating a token-driven ecosystem where mutual 
                  success thrives.
</p>
                  <p className="intro-wrap-text mt-40">Vision:
                     To establish Cash Cow as the leading platform for entrepreneurs seeking inspiration,
                      practical strategies, and access to exclusive opportunities, while building a global 
                      community that rewards creativity and collaboration.</p>
                  </div>
               <div className="intro-wrap mt-50">
                  <h6 className="intro-wrap-title">The Cash Cow Movement</h6>
                  <p className="intro-wrap-text">By choosing Cash Cow, you’re not just joining a platform, you’re embracing a movement. 
                      This is your opportunity to turn ambition into achievement, dreams into strategy, 
                      and ideas into success. Whether you’re a seasoned entrepreneur or just starting your journey,
                       Cash Cow provides the tools, community, and support you need to thrive in the digital age.
                      With Cash Cow, the possibilities are endless. Be part of the herd. Grow with Cash Cow.</p> 
              
                  </div>
            </div>
         </div>
      </div>
   </div>
   )
}

export default ChartArea
