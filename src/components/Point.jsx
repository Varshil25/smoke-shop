export default function Point({ title, body }) {
  return (
    <div className="point">
      <h3 className="t-h4">{title}</h3>
      <p>{body}</p>
    </div>
  );
}
