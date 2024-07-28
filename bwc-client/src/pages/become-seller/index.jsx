import Breadcumb1 from "@/components/breadcumb/Breadcumb1";

import MetaComponent from "@/components/common/MetaComponent";
import NeedSomething3 from "@/components/section/NeedSomething3";
import PriceTable1 from "@/components/section/PriceTable1";
import OurCta2 from "@/components/section/OurCta2";
import BecomeSellerForm from "./becomeSellerForm";
import CtaBecome from "./cta";
const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Become seller",
};

export default function BecameSellerPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb1
        title={"Work Your Way"}
        brief={` Give your visitor a smooth online
                                        experience with a solid UX design.`}
        isBtnActive={false}
      />
      {/* <ContactInfo1 becom="seller" /> */}
      <BecomeSellerForm />
      <NeedSomething3 becom={true} />
      <PriceTable1 />
      {/*need new Custom */}
      <CtaBecome />
      <OurCta2 />
      {/* 
      <AboutArea1 />
      <OurFeature1 />
      <CounterInfo1 />
      <OurTeam1 />
      <OurFaq1 /> */}
    </>
  );
}
