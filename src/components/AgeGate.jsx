import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";

const KEY = "tacony-age-ok";
const read = () => { try { return localStorage.getItem(KEY) === "yes"; } catch { return false; } };
const save = () => { try { localStorage.setItem(KEY, "yes"); } catch { /* storage blocked: asks again next visit */ } };

/* 21+ confirmation shown on a visitor's first visit. Not a substitute for checking ID in store. */
export default function AgeGate() {
  const [verified, setVerified] = useState(read);
  const [denied, setDenied] = useState(false);
  const boxRef = useRef(null);
  const yesRef = useRef(null);

  useEffect(() => {
    if (verified) { document.body.classList.remove("is-locked"); return; }
    document.body.classList.add("is-locked");
    yesRef.current?.focus();
    return () => document.body.classList.remove("is-locked");
  }, [verified]);

  useEffect(() => { if (denied) boxRef.current?.focus(); }, [denied]);

  if (verified) return null;

  function trapFocus(e) {
    if (e.key !== "Tab") return;
    const items = boxRef.current.querySelectorAll("button, a[href]");
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title" aria-describedby="age-msg" onKeyDown={trapFocus}>
      <div className="age-box" ref={boxRef} tabIndex={-1}>
        <Logo as="span" onLight />
        <h2 className="t-h2" id="age-title" style={{ color: "var(--tin-900)" }}>
          {denied ? "Sorry, you can't enter" : "Are you 21 or older?"}
        </h2>
        <p id="age-msg">
          {denied
            ? "You need to be 21 or older to visit this site or buy from Tacony Smoke."
            : "Tacony Smoke sells tobacco and vape products. You must be 21 or older to enter this site and to buy in our stores."}
        </p>
        {!denied && (
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <button ref={yesRef} className="btn btn-primary" type="button" onClick={() => { save(); setVerified(true); }}>Yes, I'm 21 or older</button>
            <button className="btn btn-outline-light" type="button" onClick={() => setDenied(true)}>No, I'm under 21</button>
          </div>
        )}
        <p className="caption">By entering, you agree to our <Link to="/terms">Terms of use</Link> and <Link to="/privacy">Privacy policy</Link>.</p>
      </div>
    </div>
  );
}
