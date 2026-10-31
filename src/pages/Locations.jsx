import PageIntro from "../components/PageIntro.jsx";
import StoreCard from "../components/StoreCard.jsx";
import Point from "../components/Point.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { stores, visitPoints } from "../data/site.js";
import { mapsUrl } from "../lib/hours.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

/* Illustrated map. To show a live map, swap this for a Google Maps <iframe> embed. */
function StoreMap() {
  return (
    <div className="map" role="img" aria-label={`Map showing the ${stores.map(s => s.name).join(" and ")} stores`}>
      <svg viewBox="0 0 1200 420" preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
        <path d="M-20 300L1220 120" stroke="#F5F6F2" strokeWidth="18" vectorEffect="non-scaling-stroke" />
        <path d="M-20 380L1220 220" stroke="#F5F6F2" strokeWidth="12" vectorEffect="non-scaling-stroke" />
        <path d="M300 -20L420 440" stroke="#F5F6F2" strokeWidth="10" vectorEffect="non-scaling-stroke" />
        <path d="M820 -20L900 440" stroke="#F5F6F2" strokeWidth="10" vectorEffect="non-scaling-stroke" />
        <path d="M1000 0C1080 120 1120 260 1220 300" stroke="#BAC4BA" strokeWidth="40" vectorEffect="non-scaling-stroke" />
      </svg>
      {stores.slice(0, 2).map((s, i) => (
        <a key={s.id} className={`pin pin-${i + 1}`} href={mapsUrl(s)} target="_blank" rel="noopener noreferrer">{s.name}</a>
      ))}
    </div>
  );
}

export default function Locations() {
  usePageTitle("Locations & hours");
  return (
    <>
      <PageIntro title="Locations & hours">
        Two stores in Tacony, both open 7 days a week. Bring a valid ID: we check it for every purchase.
      </PageIntro>
      <section className="section bg-fog-100">
        <div className="wrap">
          <StoreMap />
          <div className="store-grid">{stores.map(s => <StoreCard key={s.id} store={s} />)}</div>
        </div>
      </section>
      <section className="section bg-fog-50" aria-labelledby="visit-title">
        <div className="wrap">
          <h2 className="t-h2" id="visit-title" style={{ color: "var(--tin-900)", marginBottom: 48 }}>Before you visit</h2>
          <div className="points cols-4">{visitPoints.map(p => <Point key={p.title} {...p} />)}</div>
        </div>
      </section>
      <CtaBand dark title="Not sure which store has it?" text="Call either store and we’ll check both shelves for you."
        action={<a className="btn btn-primary" href={`tel:${stores[0].tel}`}>Call {stores[0].name}</a>} />
    </>
  );
}
