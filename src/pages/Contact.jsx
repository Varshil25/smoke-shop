import PageIntro from "../components/PageIntro.jsx";
import FaqSection from "../components/FaqSection.jsx";
import FormStatus from "../components/FormStatus.jsx";
import { contactFaq, site, stores } from "../data/site.js";
import { hoursSummary } from "../lib/hours.js";
import { useFormSubmit } from "../hooks/useFormSubmit.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Contact() {
  usePageTitle("Contact us");
  const { state, submit } = useFormSubmit(site.forms.contactEndpoint);
  return (
    <>
      <PageIntro title="Contact us">
        Questions about a product, a return or your rewards? Calling the store is fastest. Or send a message and we'll reply within one business day.
      </PageIntro>
      <section className="contact section bg-fog-100">
        <div className="wrap">
          <form className="form-card" onSubmit={submit}>
            <h2 className="t-h3" style={{ color: "var(--tin-900)" }}>Send us a message</h2>
            <div className="field"><label htmlFor="c-name">Name</label><input className="input" id="c-name" name="name" autoComplete="name" placeholder="Your name" required /></div>
            <div className="field"><label htmlFor="c-contact">Email or phone</label><input className="input" id="c-contact" name="contact" autoComplete="email" placeholder="So we can reply" required /></div>
            <div className="field">
              <label htmlFor="c-store">Store</label>
              <select className="input" id="c-store" name="store" defaultValue="">
                <option value="">Either store</option>
                {stores.map(s => <option key={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div className="field"><label htmlFor="c-msg">Message</label><textarea className="input" id="c-msg" name="message" placeholder="What can we help with?" required /></div>
            <FormStatus state={state} sentText="Thanks. We got your message and will reply within one business day." />
            <button className="btn btn-primary" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
            <p className="caption muted">We only use your details to reply to you.</p>
          </form>
          <div className="contact-side">
            {stores.map(s => (
              <div className="contact-block" key={s.id}>
                <h3 className="t-h4">{s.name}</h3>
                <a href={`tel:${s.tel}`}>{s.phone}</a>
                <address>{s.street}, {s.city}</address>
                <p className="small muted">{hoursSummary(s.hours)}</p>
              </div>
            ))}
            <div className="contact-block">
              <h3 className="t-h4">Email</h3>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <p className="muted">For jobs, vendors and anything that is not urgent.</p>
            </div>
          </div>
        </div>
      </section>
      <FaqSection title="Common questions" items={contactFaq} />
    </>
  );
}
