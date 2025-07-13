// src/query/featuredCoaches.js
import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedCoaches } from '../services/coach';

/** useFeaturedCoaches：回傳前端要的 coaches 陣列 */
export function useFeaturedCoaches() {
  return useQuery(['featuredCoaches'], () =>
    fetchFeaturedCoaches().then(res => res.data.items)
  );
}
