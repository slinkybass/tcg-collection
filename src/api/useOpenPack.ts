import { useState } from "react";
import type { CardBasic } from "@/types/Card";

const API_BASE = import.meta.env.VITE_TCG_BASE_API_URL;

export function useOpenPack() {
  const [cards, setCards] = useState<CardBasic[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openPack = (setId: string) => {
    setCards(null);
    setLoading(true);
    setError(null);

    fetch(`${API_BASE}/sets/${setId}/open`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error opening pack: ${res.status}`);
        return res.json();
      })
      .then((data: CardBasic[]) => {
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
