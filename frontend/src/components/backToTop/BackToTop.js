import React, { useEffect,useState } from 'react'
import { FiChevronUp } from 'react-icons/fi';
import './backToTop.css';



const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 200) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

    
      // This function will scroll the window to the top 
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };

  return (
    <>
        {showButton && (
        <div className="scroll-top" onClick={scrollToTop}>
            <FiChevronUp />
        </div>
   )}
    </>
  )
};

export default BackToTop;