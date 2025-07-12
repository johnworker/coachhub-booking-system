import { useQuery } from '@tanstack/react-query';
import { fetchCoaches } from '../services/coach';

export function useCoaches(params) {
  return useQuery(['coaches', params], () => fetchCoaches(params).then(r => r.data), {
    keepPreviousData: true,
  });
}
