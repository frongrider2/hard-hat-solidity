import { useLocation } from 'react-router';

const useLocationQuery = () => {
  const location = useLocation();
  return location.pathname.split('/');
};

export default useLocationQuery;
