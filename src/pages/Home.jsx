import { Link } from "react-router-dom";
import Arch from "../components/Arch.jsx";
import Photo from "../components/Photo.jsx";
import Point from "../components/Point.jsx";
import HoursList from "../components/HoursList.jsx";
import StoreCard from "../components/StoreCard.jsx";
import RewardsBand from "../components/RewardsBand.jsx";
import TextClub from "../components/TextClub.jsx";
import { categories, stores, whyPoints } from "../data/site.js";
import { mapsUrl } from "../lib/hours.js";
import { useStoreStatus } from "../hooks/useStoreStatus.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

function HoursBoard({ store }) {
  const status = useStoreStatus(store.hours);
  return (
    <aside className="board" aria-label={`${store.name} store hours`}>
      <p className="board-label">{store.name} store</p>
      <div className={status.open ? "" : "is-closed"}>
        <div className="board-status"><span className="status-dot" aria-hidden="true" /><span className="t-h3">{status.title}</span></div>
        <p className="sub">{status.sub}</p>
      </div>
      <HoursList hours={store.hours} />
      <div>
        <address style={{ fontStyle: "normal" }}>{store.street}, {store.city}</address>
        <a className="phone" href={`tel:${store.tel}`}>{store.phone}</a>
      </div>
      <div className="board-links">
        <a href={mapsUrl(store)} target="_blank" rel="noopener noreferrer">Get directions</a>
        <Link to="/locations">See our other store</Link>
      </div>
    </aside>
  );
}

export default function Home() {
  usePageTitle(null);
  return (
    <>
      <section className="hero bg-tin-900 dark has-arch">
        <Arch height={380} />
        <div className="wrap">
          <div className="hero-text">
            <h1 className="t-hero">Glass, vapes, hookah and cigars in Tacony.</h1>
            <p className="lead">A neighborhood smoke shop with fair prices, real products and staff who can tell you what is worth buying. Bring a valid ID: you must be 21 or older.</p>
            <div className="btn-row stack-mobile">
              <Link className="btn btn-primary" to="/locations">Find a store</Link>
              <Link className="btn btn-outline-dark" to="/shop">See what we carry</Link>
            </div>
          </div>
          <HoursBoard store={stores[0]} />
        </div>
      </section>

      <section className="section bg-fog-100" aria-labelledby="carry-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="t-h2" id="carry-title" style={{ color: "var(--tin-900)" }}>What we carry</h2>
              <p className="lead muted">Stock changes every week. Call your store if you're looking for something specific.</p>
            </div>
            <Link className="btn btn-outline-light" to="/shop">See all products</Link>
          </div>
          <div className="tile-grid">
            {categories.map(c => (
              <Link className="tile" key={c.id} to={`/shop#${c.id}`}>
                <Photo src={c.image} label={c.imageLabel} />
                <div><h3 className="t-h4">{c.name}</h3><p className="small muted">{c.short}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-fog-50" aria-labelledby="why-title">
        <div className="wrap split">
          <div className="intro">
            <h2 className="t-h2" id="why-title" style={{ color: "var(--tin-900)" }}>Why people come back</h2>
            <p className="lead muted">We're a neighborhood shop, not a chain. The same people work the counter every week, and they remember what you like.</p>
          </div>
          <div className="points">{whyPoints.map(p => <Point key={p.title} {...p} />)}</div>
        </div>
      </section>

      <RewardsBand title="Points on every purchase" text="Tacony Rewards is free. There's no app to download and no card to carry."
        cta={{ label: "See this week's deals", to: "/deals" }} />

      <section className="section bg-fog-100" aria-labelledby="stores-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="t-h2" id="stores-title" style={{ color: "var(--tin-900)" }}>Two stores in Tacony</h2>
              <p className="lead muted">Both stores carry the full range and check ID at the door. Street parking out front.</p>
            </div>
          </div>
          <div className="store-grid">{stores.map(s => <StoreCard key={s.id} store={s} photoLabel="Photo: store interior" />)}</div>
        </div>
      </section>

      <TextClub />
    </>
  );
}
