import Breadcumb16 from "@/components/breadcumb/Breadcumb16";
import FreelancerCard2 from "@/components/card/FreelancerCard2";
import ListingOption2 from "@/components/element/ListingOption2";
import Pagination1 from "@/components/section/Pagination1";
import { freelancer1 } from "@/data/product";

const Tradeperson = () => {
  const content = freelancer1.map((item, i) => (
    <div key={i} className="col-sm-6 col-xl-3">
      <FreelancerCard2 data={item} />
    </div>
  ));

  return (
    <>
      <div>
        <Breadcumb16 />
        <ListingOption2 itemLength={content?.length} />

        <div className="row">
          {content?.length !== 0 ? content : "Data not found!"}
        </div>
        <div className="row mt30">
          <Pagination1 />
        </div>
      </div>
    </>
  );
};

export default Tradeperson;
