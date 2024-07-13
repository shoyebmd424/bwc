import Breadcumb18 from "@/components/breadcumb/Breadcumb18";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import Listing19 from "@/components/section/Listing19";
import TabSection1 from "@/components/section/TabSection1";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Freeio - Freelance Marketplace ReactJs Template | Project 1",
};

export default function ProjectPage4() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <div className=" bgc-thm3">
        <Breadcumb18 />
        <Listing19 />
      </div>
    </>
  );
}