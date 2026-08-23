import { useCallback, useRef, useState } from "react";

/** Shared "copy JSON to paste into Claude" clipboard action with a 2s "copied" flash. */
export function useCopyToClaude(buildMessage: () => string) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(buildMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [buildMessage]);
  return { copied, copy };
}

const WRITE_DEBOUNCE_MS = 400;

function loadFromStorage<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

/**
 * Shared local-draft persistence: state that lives in localStorage, with a
 * seed fallback and an isDirty flag. localStorage writes are debounced so a
 * burst of keystrokes doesn't do a full stringify+setItem per character.
 */
export function useLocalStorageBackedState<T>(key: string, seed: T) {
  const [value, setValueState] = useState<T>(() => loadFromStorage<T>(key) ?? seed);
  const [isDirty, setIsDirty] = useState(() => loadFromStorage<T>(key) !== null);
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const persist = useCallback(
    (next: T) => {
      if (writeTimer.current) clearTimeout(writeTimer.current);
      writeTimer.current = setTimeout(() => {
        localStorage.setItem(key, JSON.stringify(next));
      }, WRITE_DEBOUNCE_MS);
    },
    [key],
  );

  const setValue = useCallback(
    (updater: T | ((prev: T) => T)) => {
      setValueState((prev) => {
        const next =
          typeof updater === "function" ? (updater as (p: T) => T)(prev) : updater;
        persist(next);
        return next;
      });
      setIsDirty(true);
    },
    [persist],
  );

  /** Like setValue, but writes to localStorage immediately (no debounce) — use for discrete save actions. */
  const setValueImmediate = useCallback(
    (updater: T | ((prev: T) => T)) => {
      setValueState((prev) => {
        const next =
          typeof updater === "function" ? (updater as (p: T) => T)(prev) : updater;
        if (writeTimer.current) clearTimeout(writeTimer.current);
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
      setIsDirty(true);
    },
    [key],
  );

  const reset = useCallback(() => {
    if (writeTimer.current) clearTimeout(writeTimer.current);
    localStorage.removeItem(key);
    setValueState(seed);
    setIsDirty(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const exportJSON = useCallback(() => JSON.stringify(value, null, 2), [value]);

  return { value, setValue, setValueImmediate, isDirty, reset, exportJSON };
}
