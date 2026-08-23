import { useCallback } from "react";
import DEFAULT_CONFIG from "@/features/dropshipping/data/research-config.default.json";
import { useLocalStorageBackedState } from "./useLocalStorageBackedState";

export interface ExclusionFilter {
  id: string;
  label: string;
  active: boolean;
}

export interface ResearchSource {
  id: string;
  label: string;
}

export interface ResearchConfig {
  version: number;
  lastUpdated: string;
  marginTarget: { min: number; max: number; unit: string };
  aovTarget: { min: number; max: number; unit: string };
  shipWeightLimitGadget: { value: number; unit: string; note: string };
  exclusionFilters: ExclusionFilter[];
  sources: ResearchSource[];
}

const STORAGE_KEY = "dropship-research-config";

export function useResearchConfig() {
  const { value: config, setValue, isDirty, reset, exportJSON } =
    useLocalStorageBackedState<ResearchConfig>(
      STORAGE_KEY,
      DEFAULT_CONFIG as ResearchConfig,
    );

  const update = useCallback(
    (patch: Partial<ResearchConfig>) => {
      setValue((prev) => ({ ...prev, ...patch }));
    },
    [setValue],
  );

  return { config, update, resetToDefault: reset, exportJSON, isDirty };
}
