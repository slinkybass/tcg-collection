import { useState, useEffect } from "react";
import type { Serie } from "@/types/Serie";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useSeries() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/series`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error loading series: ${res.status}`);
        return res.json();
      })
      .then((data: Serie[]) => {
        setSeries(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { series, loading, error };
}
