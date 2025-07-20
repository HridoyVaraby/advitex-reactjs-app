import LayoutWrapper from "@/components/common/LayoutWrapper";
import "../public/scss/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "rc-slider/assets/index.css";
import "photoswipe/dist/photoswipe.css";
import ScrollTop from "@/components/common/ScrollTop";
import Mobilemenu from "@/components/modals/Mobilemenu";
import Context from "@/context/Context";
import HomePage from "./pages";
import { Route, Routes } from "react-router-dom";
import FinanceCOnsultionPage from "./pages/homes/finance-consulting";
import FinanceAdvisorPage from "./pages/homes/finance-advisor";
import InsuranceConsultingPage from "./pages/homes/insurance-consulting";
import MarketingConsultionPage from "./pages/homes/marketing-consulting";
import AboutPage from "./pages/otherPages/about";
import PortfolioPage from "./pages/otherPages/portfolio";
import SingleProjectPage from "./pages/otherPages/single-project";
import PricingPage from "./pages/otherPages/pricing";
import FaqsPage from "./pages/otherPages/faqs";
import TeamPage from "./pages/otherPages/team";
import CareerPage from "./pages/otherPages/career";
import NotFoundPage from "./pages/not-found";
import ComingSoonPage from "./pages/otherPages/coming-soon";
import BlogPage from "./pages/otherPages/blog";
import BlogDetailsPage1 from "./pages/otherPages/single-post";
import ServicesPage from "./pages/services/services";
import ServiceDetailsPage from "./pages/services/service-details";
import ShopPage from "./pages/shop/shop";
import ProductDetailsPage from "./pages/shop/product-details";
import CartPage from "./pages/shop/cart";
import CheckoutPage from "./pages/shop/checkout";
import ContactUsPage from "./pages/otherPages/contact-us";
function App() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <LayoutWrapper>
          <Context>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />

                <Route
                  path="finance-consulting"
                  element={<FinanceCOnsultionPage />}
                />
                <Route
                  path="finance-advisor"
                  element={<FinanceAdvisorPage />}
                />
                <Route
                  path="insurance-consulting"
                  element={<InsuranceConsultingPage />}
                />
                <Route
                  path="marketing-consulting"
                  element={<MarketingConsultionPage />}
                />
                <Route path="about" element={<AboutPage />} />
                <Route path="portfolio" element={<PortfolioPage />} />
                <Route
                  path="single-project/:id"
                  element={<SingleProjectPage />}
                />
                <Route path="pricing" element={<PricingPage />} />
                <Route path="faqs" element={<FaqsPage />} />
                <Route path="team" element={<TeamPage />} />
                <Route path="career" element={<CareerPage />} />
                <Route path="404" element={<NotFoundPage />} />
                <Route path="coming-soon" element={<ComingSoonPage />} />

                <Route path="blog" element={<BlogPage />} />
                <Route path="single-post/:id" element={<BlogDetailsPage1 />} />
                <Route path="services" element={<ServicesPage />} />
                <Route
                  path="service-details/:id"
                  element={<ServiceDetailsPage />}
                />
                <Route path="shop" element={<ShopPage />} />
                <Route
                  path="product-details/:id"
                  element={<ProductDetailsPage />}
                />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="contact-us" element={<ContactUsPage />} />

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Context>

          <ScrollTop />
          <Mobilemenu />
        </LayoutWrapper>
      </div>
    </>
  );
}

export default App;
