import { useState, useEffect } from "react";
import type { Serie } from "@/types/Serie";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useSerie(serieId: string) {
  const [serie, setSerie] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!serieId) return;

    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/series/${serieId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error loading serie: ${res.status}`);
        return res.json();
      })
      .then((data: Serie) => {
        setSerie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [serieId]);

  return { serie, loading, error };
}
