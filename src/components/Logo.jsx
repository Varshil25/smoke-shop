import { Link } from "react-router-dom";
import { LogoMark } from "./Icons.jsx";

/* Wordmark with the bridge-arch mark. `as="span"` renders it without a link. */
export default function Logo({ onLight = false, as = "link" }) {
  const className = "logo" + (onLight ? " on-light" : "");
  const content = (<><LogoMark /><span>TACONY SMOKE</span></>);
  if (as === "span") return <span className={className}>{content}</span>;
  return <Link className={className} to="/" aria-label="Tacony Smoke home">{content}</Link>;
}
