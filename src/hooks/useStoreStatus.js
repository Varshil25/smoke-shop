import { useEffect, useState } from "react";
import { storeStatus } from "../lib/hours.js";

/* Live open/closed status for a store, refreshed every minute. */
export function useStoreStatus(hours) {
  const [status, setStatus] = useState(() => storeStatus(hours));
  useEffect(() => {
    setStatus(storeStatus(hours));
    const timer = setInterval(() => setStatus(storeStatus(hours)), 60_000);
    return () => clearInterval(timer);
  }, [hours]);
  return status;
}
