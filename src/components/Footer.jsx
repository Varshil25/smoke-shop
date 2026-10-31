import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { site } from "../data/site.js";

const COLUMNS = [
  { title: "Shop", links: [
    ["Disposable vapes", "/shop#disposable-vapes"], ["E-liquids", "/shop#e-liquids"], ["Glass", "/shop#glass"],
    ["Hookah & shisha", "/shop#hookah"], ["Premium cigars", "/shop#cigars"], ["Accessories", "/shop#accessories"]] },
  { title: "Visit", links: [
    ["Locations & hours", "/locations"], ["Deals & rewards", "/deals"], ["Text club", "/deals#text-club"], ["Get directions", "/locations"]] },
  { title: "Company", links: [
    ["About us", "/about"], ["Jobs", "/about#jobs"], ["Contact", "/contact"], ["Privacy policy", "/privacy"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer dark">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>{site.tagline} Glass, vapes, hookah, cigars and everything you need with them.</p>
            <div className="social">
              {site.social.map(s => <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{s.label}</a>)}
            </div>
          </div>
          <div className="footer-cols">
            {COLUMNS.map(col => (
              <div key={col.title}>
                <h2>{col.title}</h2>
                <ul>{col.links.map(([label, to]) => <li key={label}><Link to={to}>{label}</Link></li>)}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom caption">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Tobacco and vape products are for adults 21 and older. Valid ID required for every purchase.</p>
        </div>
      </div>
    </footer>
  );
}
