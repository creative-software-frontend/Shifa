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