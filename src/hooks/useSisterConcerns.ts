import { useEffect, useState } from "react";

export interface SisterConcern {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const useSisterConcerns = () => {
  const [sisterConcerns, setSisterConcerns] = useState<SisterConcern[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/sister-concerns`)
      .then((res) => res.json())
      .then((res) => {
        if (cancelled) return;
        setSisterConcerns(res.data ?? []);
      })
      .catch((err) => {
        console.error("Sister concerns fetch failed:", err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { sisterConcerns, loading };
};
