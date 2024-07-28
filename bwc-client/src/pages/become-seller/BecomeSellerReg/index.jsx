import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BocomeSellerReg = () => {
  const [showPaassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-6 col-md-9 mx-auto">
            <div className=" default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
              <h4 className="form-title">Lets create an account for you</h4>
              <p className="text mb30">
                Sign up and become part of the BWC ecosystem!
              </p>
              <form className="form-style1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw500 mb10">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb20">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb20">
                      <label className="heading-color ff-heading fw500 mb10">
                        Contact
                      </label>
                      <div className="code d-flex border rounded">
                        <select
                          name=""
                          id=""
                          className="form-control w-auto border-0"
                        >
                          <option value="">+44</option>
                          <option value="">+44</option>
                          <option value="">+44</option>
                          <option value="">+44</option>
                          <option value="">+44</option>
                          <option value="">+44</option>
                        </select>
                        <input
                          type="email"
                          className="form-control border-0 border-start rounded-0"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb20">
                      <label htmlFor="password">
                        Password (minimum 7 characters)
                      </label>
                      <div className="code d-flex border rounded align-items-center px-2 gap-4">
                        <label
                          style={{ cursor: "pointer" }}
                          htmlFor="passwordShow"
                          className="heading-color fw-bold mt-1  ff-heading fw500 mb10"
                        >
                          Show
                        </label>
                        <input
                          type="checkbox"
                          className="my-auto"
                          id="passwordShow"
                          onChange={() => setShowPassword(!showPaassword)}
                          style={{
                            width: "20px",
                            aspectRatio: "1/1",
                            cursor: "pointer",
                          }}
                        />

                        <input
                          type={showPaassword ? "text" : "password"}
                          className="form-control border-0 border-start rounded-0"
                          placeholder="*****"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb20">
                      <input
                        type="checkbox"
                        className="my-auto"
                        id="agree"
                        style={{
                          width: "15px",
                          aspectRatio: "1/1",
                          cursor: "pointer",
                        }}
                      />{" "}
                      <label
                        htmlFor="agree"
                        className="heading-color ff-heading fw500 mb10"
                      >
                        Consent to receiving marketing materials about our
                        services and offers
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => navigate("success")}
                        className="ud-btn btn-thm w-50 mx-auto"
                      >
                        Next
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

export default BocomeSellerReg;
