import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-6 col-md-9 mx-auto">
            <div className=" default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
              <h4 className="form-title">
                Please verify your email address and click on the link, resend
                the verification link if you have not yet received it within 5
                minutes.
              </h4>
              <Link className="text-thm my-5 py-3 fw-bold text-decoration-underline">
                Resend
              </Link>
              <p className="text mb30">
                Already have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-thm my-5 py-3 fw-bold text-decoration-underline"
                >
                  Log In!
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
