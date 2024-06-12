"use client";
import { useEffect, useState } from 'react';
import { FetchCustomersResponse } from '../lib/definitions';


export default function fetchCustomersList() {
const [response, setResponse] = useState<FetchCustomersResponse>();
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch('https://localhost:7188/api/Customer'); // Adjust the URL as needed
        if (response.ok) {
          const data = await response.json() as FetchCustomersResponse;
          setResponse(data);
        } else {
          console.error('Error fetching customers:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    }

    fetchCustomers();
  }, []);

    return response;
}