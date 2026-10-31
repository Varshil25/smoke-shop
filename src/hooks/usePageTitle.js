import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Tacony Smoke` : "Tacony Smoke | Smoke shop in Tacony, Northeast Philadelphia";
  }, [title]);
}
