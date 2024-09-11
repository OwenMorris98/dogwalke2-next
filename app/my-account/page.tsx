"use client";
import Cookies from "js-cookie"; 
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { getJwtToken, getCustomerId, getEmailFromJwt} from "../hooks/auth";
import  useCustomer  from "../hooks/useFetchUser";
import { Customer, CustomerData } from "../lib/definitions";
import { get } from "http";


export default function MyAccount() {
    

    const [token, setToken] = useState<string>("");
    const [customerId, setCustomerId] = useState<string>("");
    const [customer, setCustomer] = useState<CustomerData>();
    const [email, setEmail] = useState<string>("");

    const { getCustomerById } = useCustomer();
    
    function getEmail() {
        const tokenValues = Cookies.get('jwt');
      
      if (tokenValues) {
        setToken(tokenValues);
        let custId : string = getCustomerId() || "";
        let email : string = getEmailFromJwt() || "";
        setEmail(email);
        setCustomerId(custId);
        console.log("Using Let:" + custId);
        console.log("CustomerId :" + customerId);
      }
    }

   

    const getCustomer = async () => { 
        try {
            const fetchedCustomer : CustomerData = await getCustomerById(customerId, token);
            console.log(fetchedCustomer);
            setCustomer(fetchedCustomer);
        }
        catch (error) {
            console.error(error);

        }
    }

    useEffect(() => {
      getEmail();
      if(token) {
        getCustomer();
      }
      
      console.log("UseEffectCustomer: " + customer);
      
     
    }, [customerId]);

   
    

    return (
        <div>
        {token !== "" && 
        <h1>Welcome {email}</h1>
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