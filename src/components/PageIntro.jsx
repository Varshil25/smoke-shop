import Arch from "./Arch.jsx";

export default function PageIntro({ title, children }) {
  return (
    <section className="page-intro bg-tin-900 dark has-arch">
      <Arch height={220} />
      <div className="wrap">
        <h1 className="t-h1">{title}</h1>
        <p className="lead">{children}</p>
      </div>
    </section>
  );
}
