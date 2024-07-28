import AllTimeSelling2 from "../element/AllTimeSelling2";

export default function NeedSomething3({ becom }) {
  return (
    <>
      <section className="our-features pt-0 pb90 pb30-md">
        <div className="container wow fadeInUp">
          {!becom && (
            <div className="row">
              <div className="col-lg-12">
                <div className="main-title text-center">
                  <h2>Need something done?</h2>
                  <p className="text">
                    Most viewed and all-time top-selling services
                  </p>
                </div>
              </div>
            </div>
          )}
          <AllTimeSelling2 />
        </div>
      </section>
    </>
  );
}
