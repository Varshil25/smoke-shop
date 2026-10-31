/* Full-width call to action. `dark` switches to the tin-green version. */
export default function CtaBand({ title, text, action, dark = false, id }) {
  return (
    <section id={id} className={"cta " + (dark ? "bg-tin-800 dark" : "bg-brass")}>
      <div className="wrap">
        <div>
          <h2 className="t-h2">{title}</h2>
          <p className="lead">{text}</p>
        </div>
        {action}
      </div>
    </section>
  );
}
