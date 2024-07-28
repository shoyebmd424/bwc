import Breadcumb16 from "@/components/breadcumb/Breadcumb16";

import Listing14 from "@/components/section/Listing14";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Freelancer 2",
};

export default function FreelancerPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      {/* <TabSection1 /> */}
      {/* <Breadcumb3 path={["Home", "Services", "Design & Creative"]} /> */}
      <Breadcumb16 />
      <Listing14 />
    </>
  );
}
