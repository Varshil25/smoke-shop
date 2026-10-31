export default function FaqSection({ title, items }) {
  return (
    <section className="faq section bg-fog-50">
      <div className="wrap">
        <h2 className="t-h2" style={{ color: "var(--tin-900)" }}>{title}</h2>
        <div>
          {items.map(item => (
            <div className="faq-item" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
