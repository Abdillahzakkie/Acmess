import React from 'react'
import './feature.css';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiCustomerService2Line, RiSecurePaymentLine } from 'react-icons/ri';

const Feature = () => {
  return (
<section id="features" className="feature-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11">
						<div className="section-title text-center mb-80">
							<h2><span>Our Services</span> <br className="d-block" /> with Essential Features</h2>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-feature">
							<div className="feature-icon color-1">
                                <TbTruckDelivery />
							</div>
							<div className="feature-content">
								<h4>Fast Shipping</h4>
								<p>Have your orders delivered to your doorstep in no time and at low price.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-feature">
							<div className="feature-icon color-2">
								<RiCustomerService2Line />
							</div>
							<div className="feature-content">
								<h4>Customer Support</h4>
								<p>We offer a great customer experience all the way to take care of all your needs +(99) 023 541 22.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="single-feature">
							<div className="feature-icon color-3">
								<RiSecurePaymentLine />
							</div>
							<div className="feature-content">
								<h4>Easy payment</h4>
								<p>Make fast and secure payments with a virtual wallet or simply use paypal payment gateway.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Feature