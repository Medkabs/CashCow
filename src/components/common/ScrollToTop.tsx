"use client"
import UseSticky from "@/hooks/UseSticky";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
   const { sticky }: { sticky: boolean } = UseSticky();

   // Initialize to false, will be updated client-side
   const [showScroll, setShowScroll] = useState(false);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   useEffect(() => {
      // Define checkScrollTop inside useEffect as it's only used here
      const checkScrollTop = () => {
         // Use a check to ensure window is defined before accessing window.pageYOffset
         if (typeof window !== 'undefined') {
             if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
             } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
             }
         }
      };

      // Add listener only if window is defined (guarantees client-side)
      if (typeof window !== 'undefined') {
          window.addEventListener("scroll", checkScrollTop);
      }


      // Cleanup function to remove the event listener
      return () => {
          if (typeof window !== 'undefined') { // Ensure removeListener also runs client-side
              window.removeEventListener("scroll", checkScrollTop);
          }
      };
   }, [showScroll]); // Include showScroll in the dependency array

   return (
      <>
         {/* Conditionally render the button based on showScroll state */}
         {showScroll && (
            <button onClick={scrollTop} type="button" className={`scroll-top scroll-to-target ${sticky && "open"}`}>
               <i className="fas fa-angle-up"></i>
            </button>
         )}
      </>
   );
};

export default ScrollToTop;
