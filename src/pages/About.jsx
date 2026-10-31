import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";
import Photo from "../components/Photo.jsx";
import Point from "../components/Point.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { site, stores, values } from "../data/site.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function About() {
  usePageTitle("About us");
  return (
    <>
      <PageIntro title="About Tacony Smoke">
        A family-owned smoke shop in Northeast Philadelphia. We opened on {stores[0].name} in {site.openedYears.first} and added {stores[1].name} in {site.openedYears.second}.
      </PageIntro>
      <section className="story section bg-fog-100">
        <div className="wrap">
          <Photo label="Photo: owner behind the counter" />
          <div className="text">
            <h2 className="t-h2" style={{ color: "var(--tin-900)" }}>A shop for the neighborhood</h2>
            <p className="lead muted">Tacony Smoke started as one counter on Torresdale Ave. We wanted a smoke shop that felt like the corner store: you know the people, the prices are fair, and nobody rushes you.</p>
            <p className="lead muted">Today we run two stores with the same idea. We stock what our customers ask for, we're honest about what's worth the money, and we check ID every time.</p>
          </div>
        </div>
      </section>
      <section className="section bg-fog-50" aria-labelledby="values-title">
        <div className="wrap">
          <h2 className="t-h2" id="values-title" style={{ color: "var(--tin-900)", marginBottom: 48 }}>What we stand for</h2>
          <div className="points cols-3">{values.map(p => <Point key={p.title} {...p} />)}</div>
        </div>
      </section>
      <section className="section bg-fog-100" aria-labelledby="inside-title">
        <div className="wrap">
          <h2 className="t-h2" id="inside-title" style={{ color: "var(--tin-900)", marginBottom: 48 }}>Inside the stores</h2>
          <div className="photo-row">
            <Photo src={stores[0].photo} label={stores[0].photoLabel} />
            <Photo label="Photo: glass case" />
            <Photo label="Photo: humidor" />
          </div>
        </div>
      </section>
      <CtaBand dark id="jobs" title="Work with us"
        text="We're hiring part-time and full-time counter staff at both stores. You must be 21 or older to apply."
        action={<Link className="btn btn-primary" to="/contact">Ask about jobs</Link>} />
    </>
  );
}
