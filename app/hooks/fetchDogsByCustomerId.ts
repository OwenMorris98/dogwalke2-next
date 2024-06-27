import { use, useEffect, useState } from 'react';
import { Dogs } from '../lib/definitions';
export default function fetchDogsByCustomerId(CustomerId : string) {
    const [response, setResponse] = useState<Dogs>();
      useEffect(() => {
        async function fetchDogs() {
          try {
            const response = await fetch(`https://localhost:7188/api/${CustomerId}/Dog`); // Adjust the URL as needed
            if (response.ok) {
              const data = await response.json() as Dogs;
              setResponse(data);
            } else {
              console.error('Error fetching dogs:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching dogs:', error);
          }
        }

        fetchDogs();
    }, [CustomerId]);
        return response;
    }