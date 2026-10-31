import PageIntro from "../components/PageIntro.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

/* Placeholder for the Privacy policy and Terms of use pages. Replace with your own text. */
export default function Legal({ title }) {
  usePageTitle(title);
  return (
    <>
      <PageIntro title={title}>This page needs your own text before the site goes live.</PageIntro>
      <section className="section bg-fog-100">
        <div className="wrap legal">
          <h2 className="t-h3" style={{ color: "var(--tin-900)" }}>Placeholder</h2>
          <p>Replace this page with your {title.toLowerCase()}. If you collect phone numbers for the text club or messages through the contact form, your {title.toLowerCase()} should say what you collect and how you use it. A lawyer or a policy generator from your form or SMS provider can help.</p>
        </div>
      </section>
    </>
  );
}
