import { Outlet } from "react-router-dom";
import InfoBar from "./InfoBar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AgeGate from "./AgeGate.jsx";
import ScrollManager from "./ScrollManager.jsx";

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">Skip to content</a>
      <InfoBar />
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
      <AgeGate />
    </>
  );
}
