// import Hero1 from "@/components/hero/Hero1";
// import About1 from "@/components/section/About1";
// import BrowserCategory1 from "@/components/section/BrowserCategory1";
// import CounterInfo1 from "@/components/section/CounterInfo1";
// import CtaBanner1 from "@/components/section/CtaBanner1";
// import NeedSomething1 from "@/components/section/NeedSomething1";
// import OurBlog1 from "@/components/section/OurBlog1";
// import OurCta1 from "@/components/section/OurCta1";
// import OurPartner1 from "@/components/section/OurPartner1";
// import Testimonial1 from "@/components/section/Testimonial1";
// import TrendingService1 from "@/components/section/TrendingService1";

import MetaComponent from "@/components/common/MetaComponent";
import Hero8 from "@/components/hero/Hero8";
import NeedSomething3 from "@/components/section/NeedSomething3";
import BrowserCategory2 from "@/components/section/BrowserCategory2";
import TrendingService5 from "@/components/section/TrendingService5";
import HighestRated3 from "@/components/section/HighestRated3";
import OurCta5 from "@/components/section/OurCta5";
import OurFunFact4 from "@/components/section/OurFunFact4";
import OurCta2 from "@/components/section/OurCta2";
const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Home 1",
};

export default function HomePage1() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Hero8 />
      {/* <BrowserCategory1 /> */}
      <NeedSomething3 />
      <BrowserCategory2 />
      <TrendingService5 />
      <HighestRated3 />
      <OurCta5 />
      <OurFunFact4 />
      <OurCta2 />
      {/* <Hero1 />
      <BrowserCategory1 />
      <TrendingService1 />
      <NeedSomething1 />
      <CtaBanner1 />
      <CounterInfo1 />
      <Testimonial1 />
      <About1 />
      <OurBlog1 />
      <OurPartner1 />
      <OurCta1 /> */}
    </>
  );
}
