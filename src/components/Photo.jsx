import { PhotoIcon } from "./Icons.jsx";
import { asset } from "../lib/asset.js";

/* Shows a real photo when `src` is set, otherwise a labeled placeholder. */
export default function Photo({ src, label, alt, className = "" }) {
  return (
    <div className={"photo " + className} role={src ? undefined : "img"} aria-label={src ? undefined : label}>
      {src ? (
        <img src={asset(src)} alt={alt || label.replace(/^Photo: /, "")} loading="lazy" />
      ) : (
        <><PhotoIcon /><span>{label}</span></>
      )}
    </div>
  );
}
