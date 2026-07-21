import { useEffect, useState } from "react";

export interface VisionData {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export const useOurVision = () => {
  const [visionData, setVisionData] = useState<VisionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/our-vision-list`)
      .then((res) => res.json())
      .then((res) => {
        if (cancelled) return;
        if (res.success && Array.isArray(res.data) && res.data.length > 0) {
          setVisionData(res.data[0]);
        } else {
          setVisionData(null);
        }
      })
      .catch((err) => {
        console.error("Our vision fetch failed:", err);
        setVisionData(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { visionData, loading };
};
