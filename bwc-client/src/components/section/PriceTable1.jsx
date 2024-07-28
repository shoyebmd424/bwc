import { price1 } from "@/data/project";
// import PriceTableCard1 from "../card/PriceTableCard1";
import priceStore from "@/store/priceStore";
import { useLocation } from "react-router-dom";
import img from "../../asserts/become1.png";

export default function PriceTable1() {
  const togglePlan = priceStore((state) => state.togglePlan);

  const { pathname } = useLocation();

  // monthly & yearly price handler
  const checkboxHandler = (e) => {
    if (e.target.checked) {
      togglePlan("1y");
    } else {
      togglePlan("1m");
    }
  };

  return (
    <>
      <section
        className={`our-pricing pt-0 ${
          pathname === "/home-2"
            ? "pb0"
            : pathname === "/about-1"
            ? "pt0 pb0"
            : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto wow fadeInUp">
              <div className="main-title text-center mb30">
                <h2 className="title">
                  Extra features to boost your reputation
                </h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            {price1.map((item, i) => (
              <div key={i} className="col-sm-6 col-xl-3">
                {/* <PriceTableCard1 data={item} /> */}
                <div className="text-center">{item?.plan}</div>

                <div className="mx-4">
                  <img src={img} alt="" className="w-100 rounded h-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
