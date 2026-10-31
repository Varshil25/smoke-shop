import Photo from "./Photo.jsx";
import HoursList from "./HoursList.jsx";
import { useStoreStatus } from "../hooks/useStoreStatus.js";
import { mapsUrl } from "../lib/hours.js";

export default function StoreCard({ store, photoLabel }) {
  const status = useStoreStatus(store.hours);
  return (
    <article className="store">
      <Photo src={store.photo} label={photoLabel || store.photoLabel} />
      <div className="store-body">
        <div>
          <h3 className="t-h3">{store.name}</h3>
          <address>{store.street}, {store.city}</address>
          <p className={"status small" + (status.open ? "" : " is-closed")} style={{ marginTop: 8 }}>
            <span className="status-dot" aria-hidden="true" />
            <span>{status.title}. {status.sub.replace(" tonight", "")}</span>
          </p>
        </div>
        <HoursList hours={store.hours} />
        <a className="phone" href={`tel:${store.tel}`}>{store.phone}</a>
        <div className="btn-row">
          <a className="btn btn-primary" href={mapsUrl(store)} target="_blank" rel="noopener noreferrer">Get directions</a>
          <a className="btn btn-outline-light" href={`tel:${store.tel}`}>Call store</a>
        </div>
      </div>
    </article>
  );
}
