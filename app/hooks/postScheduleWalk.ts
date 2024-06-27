import { PostCustomerReq } from "../lib/definitions";

export default async function postCustomer(customer: PostCustomerReq) {
    try {
        const response = await fetch(`https://localhost:7188/api/Walks `, {
             method: "POST",
             headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
              },
             body: JSON.stringify(customer),
           });
           console.log(customer);
           if (response.ok) {
             console.log('Customer posted successfully');
           } else {
             console.error('Error posting customer:', response.statusText);
           }
     }
     catch (error) {
         console.error('Error posting customer:', error);
     }
    
}