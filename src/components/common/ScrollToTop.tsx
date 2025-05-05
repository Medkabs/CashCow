"use client"
import UseSticky from "@/hooks/UseSticky";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      // Define checkScrollTop inside useEffect as it's only used here
      const checkScrollTop = () => {
         if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
         } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
         }
      };

      window.addEventListener("scroll", checkScrollTop);

      // Cleanup function to remove the event listener
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, [showScroll]); // Include showScroll in the dependency array

   return (
      <>
         <button onClick={scrollTop} type="button" className={`scroll-top scroll-to-target ${sticky && "open"}`}>
            <i className="fas fa-angle-up"></i>
         </button>
      </>
   );
};

export default ScrollToTop;