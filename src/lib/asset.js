/* Turns "/images/photo.jpg" into a path that also works when the site lives in a sub-folder (GitHub Pages). */
export function asset(path) {
  if (!path || !path.startsWith("/")) return path;
  return import.meta.env.BASE_URL + path.slice(1);
}
