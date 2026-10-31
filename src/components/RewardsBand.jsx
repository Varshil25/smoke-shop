import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { rewardSteps } from "../data/site.js";

export default function RewardsBand({ title, text, cta }) {
  return (
    <section className="rewards section bg-brass">
      <div className="wrap">
        <div className="text">
          <h2 className="t-h2">{title}</h2>
          <p className="lead">{text}</p>
          <ol className="steps">
            {rewardSteps.map((s, i) => (
              <li key={s}><span className="step-num" aria-hidden="true">{i + 1}</span><span>{s}</span></li>
            ))}
          </ol>
          {cta && <Link className="btn btn-dark" to={cta.to}>{cta.label}</Link>}
        </div>
        <div className="rewards-card" role="img" aria-label="Example Tacony Rewards card showing 240 points">
          <div className="row"><Logo as="span" /><span className="gold">Rewards</span></div>
          <div><p className="label">Points balance</p><p className="balance">240</p></div>
          <div className="row"><span className="label">Member since 2026</span><span className="gold">$10 ready to use</span></div>
        </div>
      </div>
    </section>
  );
}
