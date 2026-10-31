import { useEffect, useRef } from "react";

const MESSAGES = {
  "not-connected": { cls: "form-note", text: "This form isn't connected yet. Add your form address in src/data/site.js (see README)." },
  sent: { cls: "form-success", text: "Thanks. We got it." },
  error: { cls: "form-note", text: "That didn't go through. Please try again or call the store." },
};

/* Shows the result of a form submit and moves focus to it for screen readers. */
export default function FormStatus({ state, sentText }) {
  const ref = useRef(null);
  const msg = MESSAGES[state];
  useEffect(() => { if (msg && ref.current) ref.current.focus(); }, [state, msg]);
  if (!msg) return null;
  return <p ref={ref} tabIndex={-1} role="status" className={msg.cls}>{state === "sent" && sentText ? sentText : msg.text}</p>;
}
