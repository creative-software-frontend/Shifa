import { useEffect, useState } from "react";

const IMAGE_BASE_URL =
  "https://backend.shifaproperties.com/public/";

export interface News {
  id: number;
  title: string;
  description: string;
  photo: string;
  news_paper_name: string;
  created_at: string;

  news_type: {
    id: number;
    title: string;
  } | null;
}

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/news-list`)
      .then(res => res.json())
      .then(res => {
        const formatted = res.data.map((item: News) => ({
          ...item,
          photo: IMAGE_BASE_URL + item.photo,
        }));

        setNews(formatted);
      })
      .finally(() => setLoading(false));
  }, []);

  return { news, loading };
};