import { useCallback, useEffect, useRef } from "react";

export function useAdsun({ blockId, debug = false, onReward, onError }: {
  blockId: string; debug?: boolean; onReward?: () => void; onError?: (r: unknown) => void;
}) {
  const ctrl = useRef<AdController | undefined>(undefined);
  useEffect(() => { ctrl.current = window.Adsun?.init({ blockId, debug }); }, [blockId, debug]);
  return useCallback(async () => {
    if (!ctrl.current) return onError?.("SDK not loaded");
    try { await ctrl.current.show(); onReward?.(); } catch (e) { onError?.(e); }
  }, [onReward, onError]);
}
