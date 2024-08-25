"use client";
import { useEffect, useState } from 'react';
import { DisplayWalkProps, FetchCustomersResponse } from '../lib/definitions';


export default function useFetchWalks() {

  
    async function getPendingWalks(customerId : string) {
      try {
        const response = await fetch(`https://localhost:7188/api/${customerId}/Walks/Pending`); // Adjust the URL as needed
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error('Error fetching walks:', response.statusText);
          return [];
        }
      } catch (error) {
        console.error('Error fetching walks:', error);
      }
    }

    return { getPendingWalks};
}