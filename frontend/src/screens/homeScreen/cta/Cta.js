import React from 'react'
import './cta.css';


const Cta = () => {
  return (
    <section id="cta" className="cta-section pt-120">
    <div className="container">
        <div className="cta-wrapper">
            <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5">
                    <div className="cta-title section-title">
                        <h2>Subscribe <br className="d-block"/>
                            Our Newsletter</h2>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                    <div className="subscribe-form-wrapper">
                        <form action="#">
                            <input type="email" placeholder="Enter your email"/>
                            <button className="main-btn btn-hover">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Cta