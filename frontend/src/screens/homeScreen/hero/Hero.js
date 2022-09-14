import React, { useState, useEffect } from 'react'
import './hero.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import sms from '../../../assets/images/hero/Transactional SMS.svg'
import admin from '../../../assets/images/hero/Admin Control Panel.svg'
import permit from '../../../assets/images/hero/Permission per app.svg'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [sms, admin, permit];

  const carouselInfiniteScroll = () => {
    if(currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }

    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll()
    }, 9000)

    return () => clearInterval(interval);
  })

  

return(
  <>
    <img src={data[currentIndex]} alt={data[currentIndex]} />
  </>
)
}




const Hero = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();
  

  return (
    <section id="home" className="hero-section">
      <div className="row align-items-center">
        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
          <div className="hero-content">
                          <h1>Grow your business with <span>ACME Widgets</span></h1>
                          <p>Increase sales, engage visitors, collect leads using ACME widgets.  Ready-to-use solutions to save time and money for growing a business!</p>
                          <div className='buttons'>
                          {!userInfo &&  (
                            <button onClick={() => history.push('/login')} className="main-btn btn-hover">Sign In</button>
                          )}
                          <a href="https://www.coinbase.com/converter/eth/usd" className="main-btn btn-hover">ETH/USD Converter</a>
                          </div>
          </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 offset-xxl-1">
                      <div className="hero-image text-center text-lg-start">
                      <Carousel />
                        
                      </div>
                  </div>
      </div>
  </section>
  )
}

export default Hero;