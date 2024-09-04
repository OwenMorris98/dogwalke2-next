import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { CustomerData } from "../lib/definitions";


export default function useFetchUser() {   

    const fetchWithAuth = useFetch();

    async function fetchCustomer(CustomerId: string, token : string)  {    
        try {
            const response = await fetchWithAuth(`https://localhost:7188/api/Customer/${CustomerId}`, {
                method: "GET",
               headers: {
                  'Accept': '*/*',
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
              }); 
              console.log(response);
              if (response) {
                const data = await response as CustomerData;
                return data;
              } else {
                console.error('Error fetching dogs:', response.statusText);
              }
            } catch (error) {
              console.error('Error fetching dogs:', error);
            }

        };

    return { fetchCustomer };

}; 
