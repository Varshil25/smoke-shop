import { hoursRows } from "../lib/hours.js";

export default function HoursList({ hours }) {
  return (
    <dl className="hours">
      {hoursRows(hours).map(r => (
        <div key={r.days}><dt>{r.days}</dt><dd>{r.hours}</dd></div>
      ))}
    </dl>
  );
}
