import { useState } from "react";
import Photo from "../components/Photo.jsx";
import PageIntro from "../components/PageIntro.jsx";
import CtaBand from "../components/CtaBand.jsx";
import { brands, categories, filters, stores } from "../data/site.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { asset } from "../lib/asset.js";

export default function Shop() {
  usePageTitle("What we carry");
  const [filter, setFilter] = useState("all");
  const shown = categories.filter(c => filter === "all" || c.group === filter);
  return (
    <>
      <PageIntro title="What we carry">
        Everything here is in stock at both stores unless we say otherwise. Stock changes every week, so call ahead if you're coming for one thing.
      </PageIntro>

      <section className="section bg-fog-100">
        <div className="wrap">
          <div className="chips" role="group" aria-label="Filter by category">
            {filters.map(f => (
              <button key={f.id} className="chip" type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}</button>
            ))}
          </div>
          <div className="cat-grid">
            {shown.map(c => (
              <article className="cat" id={c.id} key={c.id}>
                <Photo src={c.image} label={c.imageLabel} />
                <h2 className="t-h3">{c.name}</h2>
                <p className="muted">{c.long}</p>
                <div className="includes"><p className="caption">In the case</p><p className="small">{c.items}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-fog-50" aria-labelledby="brands-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <h2 className="t-h2" id="brands-title" style={{ color: "var(--tin-900)" }}>Brands we carry</h2>
              <p className="lead muted">A few of the names on our shelves. Ask at the counter for anything you don't see.</p>
            </div>
          </div>
          <ul className="brand-grid">
            {brands.length
              ? brands.map(b => <li className="brand-slot" key={b.name}><img src={asset(b.logo)} alt={b.name} style={{ maxWidth: "70%", maxHeight: "60%", objectFit: "contain" }} /></li>)
              : Array.from({ length: 12 }, (_, i) => <li className="brand-slot caption" key={i}>Brand logo</li>)}
          </ul>
        </div>
      </section>

      <CtaBand title="Looking for something we don't have?"
        text="Ask at the counter or call the store. If a distributor carries it, we can usually order it."
        action={<a className="btn btn-dark" href={`tel:${stores[0].tel}`}>Call the store</a>} />
    </>
  );
}
