import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function NotFound() {
  usePageTitle("Page not found");
  return (
    <>
      <PageIntro title="We can't find that page">The link may be old or mistyped. Try one of these instead.</PageIntro>
      <section className="section bg-fog-100">
        <div className="wrap btn-row">
          <Link className="btn btn-primary" to="/">Go to the home page</Link>
          <Link className="btn btn-outline-light" to="/locations">Find a store</Link>
        </div>
      </section>
    </>
  );
}
