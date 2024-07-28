import { Link } from "react-router-dom";
import img from "../../asserts/home/findBussiness.jpeg";

export default function OurCta5() {
  return (
    <>
      <section className="our-cta bgc-thm4 maxw1400 mx-auto pt80 pb90 pt60-md pb60-md mt110 mt0-lg bdrs16">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7 col-xl-5 wow fadeInLeft">
              <div className="cta-style3 pl80 pl0-lg">
                <h2 className="cta-title">
                  Find the right jobs to get your business growing.
                </h2>
                <p>
                  Advertise your services and receive leads and secure more work
                </p>
                <div className="d-sm-flex align-items-center mt30">
                  <Link
                    to="/project-1"
                    className="ud-btn btn-dark bdrs60 me-sm-3"
                  >
                    Find Work
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                  <Link
                    to="/freelancer-1"
                    className="ud-btn btn-transparent double-border bdrs60"
                  >
                    Find Talent
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-4 position-relative wow zoomIn">
              <div className="cta-img me-4">
                <img
                  className="w-100 h-auto"
                  style={{ aspectRatio: "1" }}
                  src={img}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
