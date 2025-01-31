"use client"
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Image from 'next/image';

import chartImg from "@/assets/img/images/chart_img.png"

const tab_title: string[] = ["Funding Allocation", "Token Distribution",];
const chart_List_1: string[] = ["Contingency: 70%", "Business Development: 20%", "Investor: 30%", "Poland: 15%", "Legal & Regulation: 20%", "Czech Republic: 50%"]
const chart_List_2: string[] = ["Czech Republic: 50%", "Poland: 15%", "Legal & Regulation: 20%", "Contingency: 70%", "Business Development: 20%", "Investor: 30%"]

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

   const data = {
      // labels: ["Contingency", "Business Development", "Investor", "Poland", "Legal & Regulation", "Czech Republic"],
      datasets: [
         {
            label: 'Founding Allocation',
            data: chartData[activeTab],
            backgroundColor: ["#44A08D", "#136F84", "#0B446D", "#033356", "#012641", "#191F28"]
         }
      ],
   };

   return (
      
   )
}

export default ChartArea
