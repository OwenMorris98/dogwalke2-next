"use client";

import { useEffect, useState } from "react";
import { Dog } from "@/app/lib/definitions";
import fetchCustomersList from "@/app/hooks/fetchCustomerList";
import fetchDogsByCustomerId from "@/app/hooks/fetchDogsByCustomerId";

export default function ScheduleWalk() {
let customerId : string = '339c0ad3-1ed4-4c31-946e-c42494598843';

const response = fetchDogsByCustomerId(customerId);

function scheduleWalk(formData: FormData) { 
    const scheduleWalkFormData = {

        dogId: formData.get('dog-id'),
        date: formData.get('date'),
        duration: formData.get('duration'),
        location: formData.get('location'),
        notes: formData.get('notes')
    }

    console.log(scheduleWalkFormData);
    console.log('Walk Scheduled');
}


    return (
        <div>
        <div className="bg-gray-900 h-28 rounded-lg">
            <div className="flex justify-center h-28 align-center">
            <h1 className="text-white mt-9 text-4xl">Schedule Walk</h1>
            </div>
        </div>
        <form className="w-full max-w-xlg bg-gray-200 p-10 rounded-lg" action={scheduleWalk}>
            <div className="flex flex-wrap -mx-3 mb-6">
                
                <div className="w-1/3 px-3"> 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-name"> Dog
                        {
                        response?.dogs && response.dogs.length > 1 ? <select className=" block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='dog-name' id='dog-name'>
                            <option value=''>Select a dog</option>
                            {response?.dogs.map((dog) => (
                                <option key={dog.id} value={dog.id}>{dog.name}</option>
                            ))};

                        </select> 
                        : 
                        <div>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={response?.dogs[0].name} name='dog-name' readOnly />
                        <input type='hidden' value={response?.dogs[0].id} name='dog-id' id='dog-id'/>
                        </div>
                        }
                       
                    {/* <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="dog-name" name="dog-name" type="text" /> */}
                    </label>
                </div>
                <div className="w-1/3 px-3"> 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-id"> Date
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="date" name="date" type="date" />
                    </label>
                </div>
                <div className="w-1/3 px-3"> 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-id"> Duration
                    <select className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="duration" name="duration" >
                        <option value='15'>15 minutes</option>
                        <option value='30'>30 minutes</option>
                        <option value='60'>60 minutes</option>
                    </select>
                    </label>
                </div>

                <div className="w-1/4 px-3"> 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-id"> Location
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="location" name="location" type="text" />
                    </label>
                </div>

                <div className="w-3/4 px-3"> 
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" label-for="dog-id"> Notes  
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="notes" name="notes" type="text" />
                    </label>
                </div>
                
            </div>        
            <div className="flex flex-wrap -mx-3 mb-2">
  <div className="w-full px-3">
    <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Save
        </button>
    </div>
    </div>
  </div> 
        </form>

     

           
          
        </div>
    )
};