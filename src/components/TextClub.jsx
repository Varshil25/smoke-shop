import { useId } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import { useFormSubmit } from "../hooks/useFormSubmit.js";
import FormStatus from "./FormStatus.jsx";

export default function TextClub() {
  const id = useId();
  const { state, submit } = useFormSubmit(site.forms.textClubEndpoint);
  return (
    <section className="textclub bg-tin-800 dark" id="text-club">
      <div className="wrap">
        <div>
          <h2 className="t-h2">Get deals by text</h2>
          <p>One or two texts a week with deals and new arrivals. Reply STOP anytime.</p>
        </div>
        <form onSubmit={submit}>
          <div className="row">
            <div className="field">
              <label htmlFor={id}>Mobile number</label>
              <input className="input" id={id} name="phone" type="tel" autoComplete="tel" placeholder="(215) 555-0100" required />
            </div>
            <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
              {state === "sending" ? "Joining…" : "Join text club"}
            </button>
          </div>
          <FormStatus state={state} sentText="You're in. Watch for a confirmation text." />
          <p className="caption fine">
            21+ only. Up to 8 msgs/month. Msg &amp; data rates may apply. Reply STOP to cancel, HELP for help. See our <Link to="/privacy">Privacy policy</Link>.
          </p>
        </form>
      </div>
    </section>
  );
}
