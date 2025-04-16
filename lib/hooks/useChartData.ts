import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface ChartData {
  seriesData: any[];
  categories: string[];
}

interface HeatmapData {
  data: Array<{
    x: number;
    y: number;
    value: number;
    name: string;
  }>;
  xCategories: string[];
  yCategories: string[];
}

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

export function useChartData<T extends ChartData | HeatmapData>(endpoint: string) {
  return useQuery<T>({
    queryKey: ['chartData', endpoint],
    queryFn: async () => {
      const response = await axios.get<T>(endpoint, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
        },
      });
      return response.data;
    },
    staleTime: CACHE_TIME,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
