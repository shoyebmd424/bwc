import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import Listing5 from "@/components/section/Listing5";
import TabSection1 from "@/components/section/TabSection1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Service 5",
};

export default function ServicePage5() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Listing5 />
    </>
  );
}