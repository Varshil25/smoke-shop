import { stores } from "../data/site.js";
import { useStoreStatus } from "../hooks/useStoreStatus.js";

export default function InfoBar() {
  const status = useStoreStatus(stores[0].hours);
  return (
    <div className="infobar dark">
      <div className="wrap small">
        <p className={"status" + (status.open ? "" : " is-closed")}>
          <span className="status-dot" aria-hidden="true" />
          <span>{status.bar}</span>
        </p>
        <p className="id-note">You must be 21+ with a valid ID to buy</p>
      </div>
    </div>
  );
}
