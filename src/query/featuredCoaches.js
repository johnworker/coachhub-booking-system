import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedCoaches } from '../services/coach';

export function useFeaturedCoaches() {
  return useQuery({
    // 必填：查詢的 key
    queryKey: ['featuredCoaches'],
    // 必填：回傳 Promise 的 fetch function
    queryFn: () => fetchFeaturedCoaches().then(res => res.data.items),
    // 以下為可選參數示範：
    staleTime: 1000 * 60 * 5,   // 5 分鐘內不重新發請求
    retry: 1,                   // 失敗時最多重試一次
  });
}