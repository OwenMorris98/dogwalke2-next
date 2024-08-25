// hooks/useFetch.ts
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const useFetch = () => {
  const router = useRouter();

  const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    try {
      const response = await fetch(url, options);

      if (response.status === 401) {
        console.log('UNAUTHORIZED');
        // Unauthorized error
        Cookies.remove('jwt'); // Replace with your cookie name
        router.push('/customers'); // Redirect to login page
        return null;
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

  return fetchWithAuth;
};

export default useFetch;