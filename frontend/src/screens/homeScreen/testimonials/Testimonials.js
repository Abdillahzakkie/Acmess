import React from 'react'
import './testimonial.css';
import author1 from '../../../assets/images/testimonials/author-01.png';
import author2 from '../../../assets/images/testimonials/author-02.png';
import author3 from '../../../assets/images/testimonials/author-03.png';
import {AiFillStar} from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import cedre from '../../../assets/images/brands/cedre.svg';
import delvita from '../../../assets/images/brands/delvita.svg';
import inta from '../../../assets/images/brands/inta.svg';
import norta from '../../../assets/images/brands/norta-1.svg';
import sepa from '../../../assets/images/brands/sepa.svg';
import yogho from '../../../assets/images/brands/yogho.svg';

const Testimonials = () => {
  return (
    <section id="testimonials" className="ud-testimonials">
      <div className="container">
        <div className="row justify-content-center text-center">
					<div className="col-xxl-6 col-xl-7 col-lg-8 col-md-11">
						<div className="section-title text-center mb-80">
							<h2><span>Testimonials</span> <br className="d-block" />What our Customers Says</h2>
                            <p>
                            Our testimonial and review are for highlighting our best customers. Check a few below:
                            </p>
                        </div>
					</div>
				</div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="ud-testimonial-ratings">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="ud-testimonial-content">
                <p>
                  “Acme Widgets are superb, well built, well documented, and easy to customize. I'm so satisfied and fascinated with their Testimonial widget and customer service.""
                </p>
              </div>
              <div className="ud-testimonial-info">
                <div className="ud-testimonial-image">
                  <img
                    src={author1}
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4>Sabo Masties</h4>
                  <p>Founder @widgetLounge</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".15s"
            >
              <div className="ud-testimonial-ratings">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              </div>
              <div className="ud-testimonial-content">
                <p>
                  “ACME plugin is real cool, and their customer service is real fast and polite. Practical and simple widget, I recommend Acme!"
                </p>
              </div>
              <div className="ud-testimonial-info">
                <div className="ud-testimonial-image">
                  <img
                    src={author2}
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4>Margin Gesmu</h4>
                  <p>Marketing Hed @Hubspot</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="ud-single-testimonial wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="ud-testimonial-ratings">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              </div>
              <div className="ud-testimonial-content">
                <p>
                  “Excellent widgets, easy to customize and in case of any issue, you will get perfect support. I am seriously considering using almost all apps."
                </p>
              </div>
              <div className="ud-testimonial-info">
                <div className="ud-testimonial-image">
                  <img
                    src={author3}
                    alt="author"
                  />
                </div>
                <div className="ud-testimonial-meta">
                  <h4>William Smith</h4>
                  <p>CTO @Myrads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-brands wow fadeInUp" data-wow-delay=".2s">
              <div className="ud-title">
                <h6>Trusted and Used by</h6>
              </div>
              <div className="ud-brands-logo">
                <div className="ud-single-logo">
                  <img src={cedre}alt="cedre" />
                </div>
                <div className="ud-single-logo">
                  <img src={norta} alt="norta" />
                </div>
                <div className="ud-single-logo">
                  <img
                    src={sepa}
                    alt="sepa"
                  />
                </div>
                <div className="ud-single-logo">
                  <img
                    src={delvita}
                    alt="delvita"
                  />
                </div>
                <div className="ud-single-logo">
                  <img
                    src={inta}
                    alt="inta"
                  />
                   </div>
                <div className="ud-single-logo">
                  <img
                    src={yogho}
                    alt="yogho"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials