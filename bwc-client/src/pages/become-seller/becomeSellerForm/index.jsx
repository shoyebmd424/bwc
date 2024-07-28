import { Link, useNavigate } from "react-router-dom";

const BecomeSellerForm = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-6  offset-lg-5 ">
            <div className="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
              <h4 className="form-title mb25">
                Expand your business now and boost your revenue
              </h4>
              <form className="form-style1">
                <div className="row">
                  <div className="mb20">
                    <select
                      type="text"
                      className="form-control"
                      placeholder="Select your trade"
                    >
                      <option value="">Trade1</option>
                      <option value="">Trade1</option>
                      <option value="">Trade1</option>
                      <option value="">Trade1</option>
                      <option value="">Trade1</option>
                    </select>
                  </div>
                  <div className="col-md-6 px-0">
                    <div className="mb20">
                      <input
                        type="text"
                        className="form-control border-0 rounded-end-0 border-bottom border-top border-start"
                        placeholder="Postcode"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 px-0">
                    <div className="mb20">
                      <input
                        type="email"
                        className="form-control rounded-start-0"
                        placeholder="Manchester"
                      />
                    </div>
                  </div>
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="my-1">
                    <p>
                      By clicking Sign Up for free, you agree to BWC{" "}
                      <Link to="/terms" className="text-decoration-underline">
                        {" "}
                        Terms and Conditions
                      </Link>
                    </p>
                  </div>
                  <div className="mb-3">
                    For information on how we process your data, see our{" "}
                    <Link to="/privacy" className="text-decoration-underline">
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => navigate("registeration")}
                        className="ud-btn btn-thm"
                      >
                        Free Registration
                        <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeSellerForm;
