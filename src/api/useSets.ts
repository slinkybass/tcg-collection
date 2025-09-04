import { useState, useEffect } from "react";
import type { Set } from "../types/Set";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useSets(locale: string = "en") {
  const [sets, setSets] = useState<Set[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/${locale}/sets`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error loading sets: ${res.status}`);
        return res.json();
      })
      .then((data: Set[]) => {
        setSets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [locale]);

  return { sets, loading, error };
}
