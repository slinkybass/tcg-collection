import { useState } from "react";
import type { Card } from "@/types/Card";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useOpenPack() {
  const [cards, setCards] = useState<Card[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openPack = (locale: string, setId: string) => {
    setCards(null);
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/${locale}/sets/${setId}/open`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error opening pack: ${res.status}`);
        return res.json();
      })
      .then((data: Card[]) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return { cards, loading, error, openPack };
}
