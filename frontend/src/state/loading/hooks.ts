import { useAppSelector } from 'state';

export const useLoading = () => {
  const loading = useAppSelector((state) => state.refreshing.loading);
  return loading;
};
