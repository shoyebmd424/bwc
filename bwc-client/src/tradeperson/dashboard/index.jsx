import DoughnutChart from "@/components/dashboard/chart/DoughnutChart";
import LineChart from "@/components/dashboard/chart/LineChart";
import DashboardNavigation from "@/components/dashboard/header/DashboardNavigation";

const TradeDash = () => {
  return (
    <div>
      {/* <DashboardInfo /> */}
      <div className="dashboard__content hover-bgc-color">
        <div className="row pb40">
          <div className="col-lg-12">
            <DashboardNavigation />
          </div>
          <div className="col-lg-12">
            <div className="dashboard_title_area">
              <h2>Dashboard</h2>
              <p className="text">Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Complete Services </div>
                <div className="title">25</div>
                <div className="text fz14">
                  <span className="text-thm">10</span> New Offered
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-contract" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Badge</div>
                <div className="title">Varified</div>
                <div className="text fz14">
                  <span className="text-thm">Complete verification</span>
                </div>
                <div className="text fz14">
                  <span className="text-thm text-primary text-decoration-underline">
                    Complete verification
                  </span>
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-success" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">in Queue Services</div>
                <div className="title">182</div>
                <div className="text fz14">
                  <span className="text-thm">35+</span> New Queue
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-sandclock" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xxl-3">
            <div className="d-flex align-items-center justify-content-between statistics_funfact">
              <div className="details">
                <div className="fz15">Star Rating</div>
                <div className="title">4.7</div>
                <div className="text fz14">
                  <span className="text-thm">290+</span> New Review
                </div>
              </div>
              <div className="icon text-center">
                <i className="flaticon-review-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {graph.map((val, i) => (
            <div key={i} className="col-xl-4">
              <DoughnutChart
                head={val?.name}
                label1={val?.field1}
                label2={val?.field2}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-6 col-xxl-4">
            <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
              <div className="bdrb1 pb15 mb30">
                <h5 className="title">Recent Activity</h5>
              </div>
              <div className="dashboard-timeline-label">
                <div className="timeline-item pb15">
                  <div className="child-timeline-label">08:42</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge d-flex align-items-center">
                    <i className="fas fa-genderless" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="ra_pcontent pl10">
                    <span className="title">Purchase by Ali Price</span> <br />{" "}
                    <span className="subtitle">
                      Product noise evolve smartwatch
                    </span>
                  </div>
                  {/*end::Text*/}
                </div>
              </div>
              <div className="dashboard-timeline-label">
                <div className="timeline-item pb15">
                  {/*begin::Label*/}
                  <div className="child-timeline-label">14:37</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge d-flex align-items-center color3">
                    <i className="fas fa-genderless" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="ra_pcontent pl10">
                    <span className="title">
                      Make deposit{" "}
                      <span className="text-thm6 fw500">USD 700</span> to TFN
                    </span>
                  </div>
                  {/*end::Text*/}
                </div>
              </div>
              <div className="dashboard-timeline-label">
                <div className="timeline-item pb0">
                  {/*begin::Label*/}
                  <div className="child-timeline-label">16:50</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge d-flex align-items-center color4">
                    <i className="fas fa-genderless" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="ra_pcontent pl10">
                    <span className="title">
                      Natasha Carey have liked the products
                    </span>{" "}
                    <br />{" "}
                    <span className="subtitle">
                      Allow users to like products in your WooCommerce store.
                    </span>
                  </div>
                  {/*end::Text*/}
                </div>
              </div>
              <div className="dashboard-timeline-label">
                <div className="timeline-item pb10">
                  {/*begin::Label*/}
                  <div className="child-timeline-label">21:03</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge d-flex align-items-center color5">
                    <i className="fas fa-genderless" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="ra_pcontent pl10">
                    <span className="title">Favoried Product</span> <br />{" "}
                    <span className="subtitle">
                      Esther James have favorited product.
                    </span>
                  </div>
                  {/*end::Text*/}
                </div>
              </div>
              <div className="dashboard-timeline-label before-none mb30">
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="child-timeline-label">23:07</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge d-flex align-items-center color6">
                    <i className="fas fa-genderless" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="ra_pcontent pl10">
                    <span className="title">
                      Today offers by Digitech Galaxy
                    </span>{" "}
                    <br />{" "}
                    <span className="subtitle">
                      Offer is valid on orders of Rs.500 Or above for selected
                      products only.
                    </span>
                  </div>
                  {/*end::Text*/}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeDash;

const graph = [
  { name: "requests", field1: "applied", field2: "rejected" },
  { name: "Shortlisted", field1: "Shortlisted", field2: "Rejected" },
  { name: "Awarded", field1: "Awarded", field2: "Rejected" },
];
