import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Locations from "./pages/Locations.jsx";
import Deals from "./pages/Deals.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="locations" element={<Locations />} />
        <Route path="deals" element={<Deals />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Legal title="Privacy policy" />} />
        <Route path="terms" element={<Legal title="Terms of use" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
