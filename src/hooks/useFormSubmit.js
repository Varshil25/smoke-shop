import { useState } from "react";

/* Sends a form to a form service (Formspree and similar accept JSON).
   state: "idle" | "sending" | "sent" | "error" | "not-connected" */
export function useFormSubmit(endpoint) {
  const [state, setState] = useState("idle");

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!endpoint) { setState("not-connected"); return; }
    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  return { state, submit };
}
