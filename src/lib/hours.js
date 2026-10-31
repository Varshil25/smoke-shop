/* Hours helpers. All times are Philadelphia time (America/New_York). */

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0]; // Mon → Sun

export function formatHour(h) {
  if (h === 0 || h === 24) return "12 AM";
  if (h === 12) return "12 PM";
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  const base = whole < 12 ? whole : whole - 12;
  return `${base}${mins ? ":" + String(mins).padStart(2, "0") : ""} ${whole < 12 ? "AM" : "PM"}`;
}

export function formatRange([open, close]) {
  return `${formatHour(open)}–${formatHour(close)}`;
}

/* Groups days with the same hours: [{ days: "Mon–Thu", hours: "9 AM–11 PM" }, ...] */
export function hoursRows(hours) {
  const rows = [];
  for (const d of WEEK_ORDER) {
    const range = formatRange(hours[d]);
    const last = rows[rows.length - 1];
    if (last && last.hours === range) last.to = d;
    else rows.push({ from: d, to: d, hours: range });
  }
  return rows.map(r => ({
    days: r.from === r.to ? DAY_NAMES[r.from] : `${DAY_NAMES[r.from]}–${DAY_NAMES[r.to]}`,
    hours: r.hours,
  }));
}

export function hoursSummary(hours) {
  return hoursRows(hours).map(r => `${r.days} ${r.hours}`).join(", ");
}

export function phillyNow(date = new Date()) {
  const parts = {};
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23",
  }).formatToParts(date).forEach(p => { parts[p.type] = p.value; });
  return { day: DAY_NAMES.indexOf(parts.weekday), time: Number(parts.hour) + Number(parts.minute) / 60 };
}

/* Returns { open, title, sub, bar } for a store's hours right now. */
export function storeStatus(hours, date) {
  const now = phillyNow(date);
  const today = hours[now.day];
  if (now.time >= today[0] && now.time < today[1]) {
    return { open: true, title: "Open now", sub: `Closes at ${formatHour(today[1])} tonight`, bar: `Open today ${formatRange(today)}` };
  }
  if (now.time < today[0]) {
    return { open: false, title: "Closed now", sub: `Opens at ${formatHour(today[0])} today`, bar: `Closed now. Opens at ${formatHour(today[0])} today` };
  }
  const next = hours[(now.day + 1) % 7];
  return { open: false, title: "Closed now", sub: `Opens at ${formatHour(next[0])} tomorrow`, bar: `Closed now. Opens at ${formatHour(next[0])} tomorrow` };
}

export function mapsUrl(store) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${store.street}, ${store.city}`);
}
