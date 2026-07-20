import { useEffect, useState } from "react";

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon_class: string;
  is_active: boolean;
  sort_order: string;
}

export const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/footer-social-links`)
      .then((res) => res.json())
      .then((res) => {
        if (cancelled) return;
        const links: SocialLink[] = (res.data ?? [])
          .filter((link: SocialLink) => link.is_active)
          .sort(
            (a: SocialLink, b: SocialLink) =>
              Number(a.sort_order) - Number(b.sort_order)
          );
        setSocialLinks(links);
      })
      .catch((err) => {
        console.error("Social links fetch failed:", err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { socialLinks, loading };
};
