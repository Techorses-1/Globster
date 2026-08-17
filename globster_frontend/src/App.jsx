import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import useSmoothScroll from "./Components/SmoothScroll/useSmoothScroll";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Process from "./Pages/Process/Process";
import Pricing from "./Pages/Pricing/Pricing";
import Industries from "./Pages/Industries/Industries";
import Services from "./Pages/Services/Services";
import VerctorArt from "./Pages/ServicesPages/VectorArt/VerctorArt";
import Embroidery from "./Pages/ServicesPages/Embroidery/Embroidery";
import ImageEditing from "./Pages/ServicesPages/ImageEditing/ImageEditing";
import ProductMockup from "./Pages/ServicesPages/Mocukups/ProductMockup";
import DataProcessing from "./Pages/ServicesPages/DataProcessing/DataProcessing";
import WebsiteDevelopment from "./Pages/ServicesPages/WebsiteDevlopment/WebsiteDevelopment";
import EcommerceDevelopment from "./Pages/ServicesPages/Ecommercedevelopment/Ecommercedevelopment";
import VirtualAssistant from "./Pages/ServicesPages/VirtualAssistant/VirtualAssistant";
import ScrollToTop from "./Components/GoToTop/ScrollToTop";
import About from "./Pages/About/About";
import NotFound from "./Pages/404/NotFound";
import Home2 from "./Pages/Home2/Home2";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";

// Renders the Navbar everywhere except on /globalcontact
function AppNavbar() {
  const location = useLocation();
  if (location.pathname === "/globalcontact") return null;
  return <Navbar />;
}

// Renders the global Footer everywhere except on /globalcontact and /home2
function AppFooter() {
  const location = useLocation();
  if (location.pathname === "/globalcontact") return null;
  if (location.pathname === "/home2") return null;
  return <Footer />;
}

function App() {
  useSmoothScroll();
  return (
    <Router>
      <ScrollToTop />
      <AppNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process" element={<Process />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/globalcontact" element={<ComingSoon />} />
          
          <Route path="/service/vector-art" element={<VerctorArt />} />
          <Route path="/service/embroidery" element={<Embroidery />} />
          <Route path="/service/image-editing" element={<ImageEditing />} />
          <Route path="/service/product-mockup" element={<ProductMockup />} />
          <Route path="/service/data-processing" element={<DataProcessing />} />
          <Route path="/service/website-development" element={<WebsiteDevelopment />} />
          <Route path="/service/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/service/virtual-assistant" element={<VirtualAssistant />} />
        </Routes>
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;