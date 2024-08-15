"use client";
import { useEffect, useState } from 'react';
import { DisplayWalkProps, FetchCustomersResponse } from '../lib/definitions';


export default function fetchWalks(customerId : string) {
const [response, setResponse] = useState<DisplayWalkProps[]>([]);
  useEffect(() => {
    async function getPendingWalks() {
      try {
        const response = await fetch(`https://localhost:7188/api/${customerId}/Walks/Pending`); // Adjust the URL as needed
        if (response.ok) {
          const data = await response.json();
          setResponse(data);
        } else {
          console.error('Error fetching walks:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching walks:', error);
      }
    }

    getPendingWalks();
  }, []);

    return response;
}