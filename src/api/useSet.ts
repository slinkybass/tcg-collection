import { useState, useEffect } from "react";
import type { Set } from "@/types/Set";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useSet(setId: string) {
  const [set, setSet] = useState<Set | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!setId) return;

    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/sets/${setId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error loading set: ${res.status}`);
        return res.json();
      })
      .then((data: Set) => {
        setSet(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [setId]);

  return { set, loading, error };
}
