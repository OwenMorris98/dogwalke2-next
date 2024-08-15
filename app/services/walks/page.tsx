"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import DisplayWalk from "@/app/components/DisplayWalk";
import { DisplayWalkProps } from "@/app/lib/definitions";
import fetchWalks from '@/app/hooks/fetchWalks';
import { getCustomerId } from '@/app/hooks/auth';
import { redirect } from 'next/navigation';
export default function Walks() {
    
    let customerId : string | null = getCustomerId();
    let response = null;
    console.log(customerId);
    if(customerId == null) {
        //redirect('/customers');
        console.log("Redirecting to customers page");
    }
    response = fetchWalks(customerId || '');

  return (
    <div>
        <h1 className="text-2xl font-bold">Pending Walks</h1>
      {response && response.length > 0 ? (
      <ol>
        {response.map((walkProps, index) => (
          <li key={index}>
            <DisplayWalk {...walkProps} />
          </li>
        ))}
      </ol>
      ) : (<div>Loading...</div>)}  
      {!response && <span>No pending walks</span>}
    </div>
  );
}