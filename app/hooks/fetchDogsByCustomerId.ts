import { use, useEffect, useState } from 'react';
import { Dogs } from '../lib/definitions';
import  useFetch  from './useFetch';
export default function fetchDogsByCustomerId(CustomerId : string, token: string) {
    const [response, setResponse] = useState<Dogs>();
    const fetchWithAuth = useFetch();
      useEffect(() => {
        async function fetchDogs() {
          try {
            const response = await fetchWithAuth(`https://localhost:7188/api/${CustomerId}/Dog`, {
              method: "GET",
             headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            }); // Adjust the URL as needed
            console.log("fetchWithAuthResponse: " + response);
            if (response) {
              const data = await response as Dogs;
              setResponse(data);
            } else {
              console.error('Error fetching dogs:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching dogs:', error);
          }
        }

        fetchDogs();
    }, [CustomerId, token]);
        return response;
    }