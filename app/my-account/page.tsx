"use client";
import Cookies from "js-cookie"; 
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { getJwtToken } from "../hooks/auth";
import useFetchUser from "../hooks/useFetchUser";
import { Customer, CustomerData } from "../lib/definitions";

export default function MyAccount() {
    

    const [token, setToken] = useState<string | null>(null);
    const [customerId, setCustomerId] = useState<string>("");
    const [customer, setCustomer] = useState<CustomerData>();
    const { fetchCustomer }  = useFetchUser();
    const [isMounted, setIsMounted] = useState(false);

    function getEmail() {
        const tokenValues = getJwtToken();
      console.log(tokenValues);
  
      if (tokenValues) {
        setToken(tokenValues);
        console.log('User is already logged in');
      }
    }

    const getCustomer = async () => {

            if(token !== "" || token !== null ) {
                try {
                
                
                const response = await fetchCustomer(customerId, token || "");
                console.log(response);
                if(response) { 
                    const customerResult = (response : CustomerData) => ({
                    first_name : response.first_name,
                    last_name : response.last_name
                   });
                    setCustomer(customerResult);
                }
            }
            catch (error) {
                console.error(error);
            }
                
                console.log(customer);

            }
            
    }

    useEffect(() => {
    
      getEmail();
      console.log(token);
      getCustomer();
      console.log(customer);
      setIsMounted(true);
    }, []);
    if(!isMounted) { return null };

   
    

    return (
        <div>
        {token !== "" && 
        <h1>Welcome {token?.email}</h1>
        }
        
        {customer?.first_name !== null && customer?.last_name !== "" && 
        <div>
        <div>
            <label label-for="first-name">First Name:</label>
            <input id="first-name" value={customer?.first_name} readOnly></input>
        </div>
        
        <div>
            <label label-for="last-name">Last Name:</label>
            <input id="last-name" value={customer?.last_name} readOnly></input>
        </div>
        
        </div>
        }

        </div>
    );

};