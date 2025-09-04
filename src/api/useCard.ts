import { useState, useEffect } from "react";
import type { CardDetail } from "../types/Card";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useCard(locale: string, cardId: string) {
  const [card, setCard] = useState<CardDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!locale || !cardId) return;

    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/${locale}/cards/${cardId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error loading card: ${res.status}`);
        return res.json();
      })
      .then((data: CardDetail) => {
        setCard(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [locale, cardId]);

  return { card, loading, error };
}
