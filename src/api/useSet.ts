import { useState, useEffect } from "react";
import type { SetDetail } from "../types/Set";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useSet(locale: string, setId: string) {
  const [set, setSet] = useState<SetDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!locale || !setId) return;

    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/${locale}/sets/${setId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error loading set: ${res.status}`);
        return res.json();
      })
      .then((data: SetDetail) => {
        setSet(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [locale, setId]);

  return { set, loading, error };
}
