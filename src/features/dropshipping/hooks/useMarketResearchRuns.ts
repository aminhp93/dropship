import { useCallback } from "react";
import SEED_RUNS from "@/features/dropshipping/data/market-research-runs.json";
import { slugify } from "@/features/dropshipping/data/linhthach-reading-data";
import { useLocalStorageBackedState } from "./useLocalStorageBackedState";

export interface MetaAdsPage {
  name: string;
  followers: number;
  category: string;
  activeTotal: string;
}

export interface ExclusionFilterResult {
  id: string;
  label: string;
  passed: boolean;
}

export interface Candidate {
  name: string;
  status: "shortlisted" | "rejected";
  cogs: string | null;
  retailPrice: string | null;
  margin: string | null;
  dataConfidence: "sourced" | "estimated";
  strengths: string;
  risks: string;
  exclusionFilters: {
    results: ExclusionFilterResult[];
    notes: string;
  };
  metaAdsLibrary: {
    checked: boolean;
    pages: MetaAdsPage[];
    note: string;
  };
  rawNotes?: string;
}

export interface ResearchRun {
  id: string;
  niche: string;
  version: number;
  date: string;
  changeNote: string;
  candidates: Candidate[];
  sources: { title: string; url: string }[];
  actionItems: string[];
}

const STORAGE_KEY = "dropship-market-research-runs";

export function useMarketResearchRuns() {
  const {
    value: runs,
    setValueImmediate,
    isDirty,
    reset: resetToSeed,
    exportJSON,
  } = useLocalStorageBackedState<ResearchRun[]>(
    STORAGE_KEY,
    SEED_RUNS as ResearchRun[],
  );

  const nextVersionFor = useCallback(
    (niche: string) => {
      const existing = runs.filter((r) => r.niche === niche);
      return existing.length === 0
        ? 1
        : Math.max(...existing.map((r) => r.version)) + 1;
    },
    [runs],
  );

  const addRun = useCallback(
    (run: Omit<ResearchRun, "id" | "version"> & { version?: number }) => {
      const version = run.version ?? nextVersionFor(run.niche);
      const id = `${slugify(run.niche)}-v${version}`;
      const newRun: ResearchRun = { ...run, id, version };
      setValueImmediate((prev) => [...prev, newRun]);
      return newRun;
    },
    [nextVersionFor, setValueImmediate],
  );

  return { runs, addRun, resetToSeed, exportJSON, isDirty, nextVersionFor };
}
