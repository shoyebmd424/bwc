import { Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/home";
import ServicePage4 from "./pages/service/service-4";
import ServicePage3 from "./pages/service/service-3";
import ServicePageSingle11 from "./pages/service/service-single/[id]";
import ServicePageSingle2 from "./pages/service/service-single-v2";

import DasbPageMyProfile from "./pages/dashboard/my-profile";
import LoginPage from "./pages/auth/login";
import FreelancerPage2 from "./pages/freelancer/freelancer-2";
import FreelancerPageSingle1 from "./pages/freelancer/freelancer-single";
import BecameSellerPage from "./pages/become-seller";
import BlogPage2 from "./pages/blog/blog-2";
import BlogSinglePage1 from "./pages/blog/blog-single";
import BlogSinglePage11 from "./pages/blog/blog-single/[id]";
import ShopPageList from "./pages/shop/shop-list";
import ShopPageCart from "./pages/shop/shop-cart";
import ShopPageCheckout from "./pages/shop/shop-checkout";
import ShopPageOrder from "./pages/shop/shop-order";
import ShopPageSingle1 from "./pages/shop/shop-single";
import ShopPageSingle11 from "./pages/shop/shop-single/[id]";
import ContactPage from "./pages/contact";
import NotFound from "./pages/not_found";
import FaqPage from "./pages/faq";
import HelpPage from "./pages/help";
import RegisterPage from "./pages/auth/register";
import TermsPage from "./pages/terms";
import UIElementsPage from "./pages/ui-elements";
import PostAJob from "./pages/PostAJob";
import BecomeDashboard from "./pages/become-seller/BecomeDashbord";
import BocomeSellerReg from "./pages/become-seller/BecomeSellerReg";
import SuccessMessage from "./pages/become-seller/BecomeSellerReg/SuccessMessage";
import ConsumerDashboard from "./consumer/dashboard";
import Schedule from "./consumer/schedule";
import Job from "./consumer/PostAJob/Job";
import SingleJob from "./consumer/PostAJob/singleJob";
import Tradeperson from "./consumer/PostAJob/Tradepersons";
import DashboardLayout from "./consumer/DashboardLayout";
import Tradepersonlayout from "./tradeperson/Tradepersonlayout";
import TradeDash from "./tradeperson/dashboard";
import TradeSchedule from "./tradeperson/schedule";
import JobRequests from "./tradeperson/JobRequests/JobRequests";
import Quetation from "./tradeperson/Quetation";
import Preview from "./tradeperson/Quetation/Preview";
import TradeInvoice from "./tradeperson/invoice";
import Payout from "./tradeperson/payout";
import Profile from "./tradeperson/profile";
import ManageServices from "./tradeperson/manageService";

export default function RoutesComponent() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage1 />} />
          <Route path="/blog" element={<BlogPage2 />} />
          <Route path="/blog/single" element={<BlogSinglePage1 />} />
          <Route path="/tradespeople" element={<FreelancerPage2 />} />
          <Route
            path="/tradespeople/tradeperson"
            element={<FreelancerPageSingle1 />}
          />
          <Route
            path="/tradespeople/single/:id"
            element={<FreelancerPageSingle1 />}
          />
          <Route path="/service" element={<ServicePage3 />} />
          <Route path="service/single" element={<ServicePageSingle11 />} />
          <Route path="service/single/:id" element={<ServicePageSingle11 />} />

          <Route path="home-inspiration" element={<ServicePage4 />} />
          <Route
            path="home-inspiration/single"
            element={<ServicePageSingle2 />}
          />
          <Route path="help-support" element={<HelpPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="post-a-job" element={<PostAJob />} />
          <Route path="become-seller" element={<BecameSellerPage />} />
          <Route path="become-seller/dashboard" element={<BecomeDashboard />} />
          <Route
            path="become-seller/registeration"
            element={<BocomeSellerReg />}
          />
          <Route
            path="become-seller/registeration/success"
            element={<SuccessMessage />}
          />
          <Route path="blog-single" element={<BlogSinglePage1 />} />
          <Route path="blog-single/:id" element={<BlogSinglePage11 />} />
          <Route path="shop-list" element={<ShopPageList />} />
          <Route path="shop-cart" element={<ShopPageCart />} />
          <Route path="shop-checkout" element={<ShopPageCheckout />} />
          <Route path="shop-order" element={<ShopPageOrder />} />
          <Route path="shop-single" element={<ShopPageSingle1 />} />
          <Route path="shop-single/:id" element={<ShopPageSingle11 />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="ui-component" element={<UIElementsPage />} />
        </Route>
        {/* end mine */}

        {/* consumer */}
        {/* consumers routes */}

        <Route path="consumer" element={<DashboardLayout />}>
          <Route path="" element={<ConsumerDashboard />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="post-a-job" element={<Job />} />
          <Route path="job" element={<Job />} />
          <Route path="job/:id" element={<SingleJob />} />
          <Route path="tradepersons" element={<Tradeperson />} />
          <Route path="tradepersons/:id" element={<FreelancerPageSingle1 />} />

          <Route path="my-profile" element={<DasbPageMyProfile />} />
        </Route>

        {/* tarderperson */}
        <Route path="tradeperson" element={<Tradepersonlayout />}>
          <Route path="" element={<TradeDash />} />
          <Route path="schedule" element={<TradeSchedule />} />
          <Route path="requests" element={<JobRequests />} />
          <Route path="job" element={<JobRequests />} />
          <Route path="quetation" element={<JobRequests />} />
          <Route path="requests/quetation" element={<Quetation />} />
          <Route path="requests/quetation/preview" element={<Preview />} />
          <Route path="invoice" element={<TradeInvoice />} />
          <Route path="payout" element={<Payout />} />
          <Route path="my-profile" element={<Profile />} />
          <Route path="services" element={<ManageServices />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
