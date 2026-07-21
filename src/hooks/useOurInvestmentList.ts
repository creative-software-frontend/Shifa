import { useState, useEffect } from 'react';
import api from '../utils/api';

export interface InvestmentImage {
  id: number;
  our_investment_id: number;
  image_path: string;
  created_at?: string;
  updated_at?: string;
}

export interface InvestmentCategory {
  id: number;
  title: string;
  description?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface OurInvestmentItem {
  id: number;
  investment_category_id: number;
  title: string;
  rating: string;
  position: string;
  created_at?: string;
  updated_at?: string;
  images: InvestmentImage[];
  category: InvestmentCategory;
}

export interface OurInvestmentListResponse {
  success: boolean;
  data: OurInvestmentItem[];
}

export const useOurInvestmentList = () => {
  const [investments, setInvestments] = useState<OurInvestmentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const response = await api.get<OurInvestmentListResponse>('/v1/our-investment-list');
        if (response.data && response.data.success) {
          // Sort ascending by position
          const sorted = (response.data.data || []).sort((a, b) => {
            return Number(a.position) - Number(b.position);
          });
          setInvestments(sorted);
        } else {
          setError('Failed to fetch investment list');
        }
      } catch (err: any) {
        setError(err.message || 'Error fetching investments');
      } finally {
        setLoading(false);
      }
    };

    fetchInvestments();
  }, []);

  return { investments, loading, error };
};
