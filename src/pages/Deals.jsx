import PageIntro from "../components/PageIntro.jsx";
import RewardsBand from "../components/RewardsBand.jsx";
import FaqSection from "../components/FaqSection.jsx";
import TextClub from "../components/TextClub.jsx";
import { deals, rewardsFaq } from "../data/site.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Deals() {
  usePageTitle("Deals & rewards");
  return (
    <>
      <PageIntro title="Deals & rewards">
        New deals go up every Monday. Rewards points work at both stores, and deals are in store only.
      </PageIntro>
      <section className="section bg-fog-100" aria-labelledby="deals-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="t-h2" id="deals-title" style={{ color: "var(--tin-900)" }}>This week's deals</h2>
              <p className="lead muted">Prices and deals can change without notice. Ask at the register if a deal applies.</p>
            </div>
          </div>
          <div className="deal-grid">
            {deals.map(d => (
              <article className="deal" key={d.title}>
                <span className="tag caption">{d.tag}</span>
                <h3 className="t-h3">{d.title}</h3>
                <p>{d.details}</p>
                <p className="caption">{d.fine}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <RewardsBand title="How Tacony Rewards works" text="Free to join, nothing to download. Your phone number is your account at both stores." />
      <FaqSection title="Rewards questions" items={rewardsFaq} />
      <TextClub />
    </>
  );
}
