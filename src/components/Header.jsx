import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { MenuIcon, CloseIcon } from "./Icons.jsx";
import { nav } from "../data/site.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const btnRef = useRef(null);

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = nav.map(item => <li key={item.to}><NavLink to={item.to}>{item.label}</NavLink></li>);

  return (
    <header className="site-header dark">
      <div className="wrap">
        <nav className="nav" aria-label="Main">
          <Logo />
          <ul className="nav-links">{links}</ul>
          <Link className="btn btn-primary nav-cta" to="/locations">Get directions</Link>
          <button ref={btnRef} className="menu-btn" type="button" aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(o => !o)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
        <div className="mobile-menu" id="mobile-menu" hidden={!open}>
          <ul>{links}</ul>
          <Link className="btn btn-primary" to="/locations" style={{ width: "100%" }}>Get directions</Link>
        </div>
      </div>
    </header>
  );
}
