import { useMemo } from "react";

/* Tacony-Palmyra Bridge arch drawn behind dark page intros. */
function archPaths(w, h, sw) {
  const y0 = h - sw, cy = -0.08 * h, x0 = -0.03 * w, x3 = 1.03 * w;
  const p1 = [w * 0.2, cy], p2 = [w * 0.8, cy];
  const bez = t => {
    const u = 1 - t;
    return [
      u ** 3 * x0 + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * x3,
      u ** 3 * y0 + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * y0,
    ];
  };
  let hangers = "";
  for (let t = 0.1; t < 0.91; t += 0.05) {
    const [x, y] = bez(t);
    if (x > 0 && x < w) hangers += `M${x.toFixed(1)} ${y.toFixed(1)}V${y0}`;
  }
  const ic = cy + h * 0.22;
  return {
    outer: `M${x0} ${y0}C${p1[0]} ${cy} ${p2[0]} ${cy} ${x3} ${y0}`,
    inner: `M${x0} ${y0}C${p1[0]} ${ic} ${p2[0]} ${ic} ${x3} ${y0}`,
    hangers,
    deck: `M0 ${y0}H${w}`,
  };
}

export default function Arch({ height = 380 }) {
  const w = 1440, sw = 4;
  const d = useMemo(() => archPaths(w, height, sw), [height]);
  return (
    <svg className="arch" viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" fill="none" aria-hidden="true" focusable="false">
      <path d={d.outer} stroke="currentColor" strokeWidth={sw} vectorEffect="non-scaling-stroke" />
      <path d={d.inner} stroke="currentColor" strokeWidth={sw * 0.6} vectorEffect="non-scaling-stroke" />
      <path d={d.hangers} stroke="currentColor" strokeWidth={sw * 0.5} vectorEffect="non-scaling-stroke" />
      <path d={d.deck} stroke="currentColor" strokeWidth={sw} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
