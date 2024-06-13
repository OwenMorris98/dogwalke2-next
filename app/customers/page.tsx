// Example usage in your component

"use client";
import { useEffect, useState } from 'react';
import { Customer, emptyCustomer, PostCustomerReq, newPostCustomerReq } from '../lib/definitions';
import fetchCustomerList from '../hooks/fetchCustomerList';
import postCustomer from '../hooks/postCustomer';

function CustomerList() {

  
  const response =  fetchCustomerList();


  const onSubmit = (e) => {
    e.preventDefault();

    if(postCustomerReq) {
    postCustomer(postCustomerReq);
    }

  }

  const [customer, setCustomer] = useState<Customer>();
  const [postCustomerReq, setPostCustomerReq] = useState<PostCustomerReq>(); 

  const [addButton, setAddButton] = useState<boolean>(false);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.id) {
      setPostCustomerReq((v) => ({ ...v, [e.target.id]: e.target.value }))
    }
    
  }

  function showAddCustomerForm() {
    setAddButton(!addButton);
    setPostCustomerReq(newPostCustomerReq);
  };

  function showAddDogFrom() {

  }

  return (
<div>
    
  <h1 className='flex justify-center -mb-6 mt-3'>Customer List</h1>
    
  <div className="flex justify-center mt-16">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 max-w-6xl">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    City
                </th>
                <th scope="col" className="px-6 py-3">
                    State
                </th>
                <th scope="col" className="px-6 py-3">
                    Zip
                </th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {response?.customers.map((customer) => (
            <tr key={customer.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {customer.first_name}
                </th>
                <td className="px-6 py-4">
                    {customer.last_name}
                </td>
                <td className="px-6 py-4">
                    {customer.address}
                </td>
                <td className="px-6 py-4">
                    {customer.city}
                </td>
                <td className="px-6 py-4">
                    {customer.state}
                </td>
                <td className="px-6 py-4">
                    {customer.zipcode}
                </td>
                <td>
                  <button onClick={() => setCustomer(customer)}>Dogs</button>
                </td>
                <td>
                  <button onClick={() => setCustomer(customer)}>Add Dog</button>
                </td>
            </tr>
            
            
            ))}
            <tr>
              <button onClick={showAddCustomerForm}> + Add Customer...</button>
            </tr>
        </tbody>
    </table>
</div>


<div className='flex justify-center flex-col'>
  {customer && (
    <>
      <div className='flex justify-center flex-row'>
        <label className='mx-8'>Dogs</label>
        <ul>
          {customer.dogs.map((dog) => (
            <li key={dog.name}>{dog.name}</li>
          ))}
         </ul>
      </div>
    
    </>
  )}
</div>

<div className='flex justify-center flex-col '>
  {addButton && (
    <form onSubmit={onSubmit}>
      <div className='flex justify-center flex-row mb-4 '>
        <label className='mx-8'>First Name:</label>
        <input type='text' value={postCustomerReq?.first_name} id='first_name' className='text-black' onChange={handleValueChange}/>     
      </div>
      <div className='flex justify-center flex-row '>
        <label className='mx-8'>Last Name:</label>
        <input type='text' value={postCustomerReq?.last_name} id='last_name' className='text-black' onChange={handleValueChange}/>     
      </div>
      <div className='flex justify-center flex-row'>
        <button type='submit'>Save</button>
      </div>
    </form>
  )}
</div>


</div>
    
   
  );
}

export default CustomerList;
