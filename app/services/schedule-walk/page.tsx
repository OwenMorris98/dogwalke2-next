"use client";

import { useEffect, useState } from "react";
import { Dog, PostScheduleWalkReq } from "@/app/lib/definitions";
import fetchDogsByCustomerId from "@/app/hooks/fetchDogsByCustomerId";
import postScheduleWalk from "@/app/hooks/postScheduleWalk";

export default function ScheduleWalk() {
let customerId : string = '7583a4b6-4dc9-43d4-ac9f-1ed7823f3c5f';

const response = fetchDogsByCustomerId(customerId);

const [request, setRequest] = useState<PostScheduleWalkReq>();

function scheduleWalk(formData: FormData) { 
    let sch: PostScheduleWalkReq = { 
        DogID: formData.get('dog-id'),
        WalkerID: 2, // Assuming walkerID is static for this example
        ScheduledTime: formData.get('date'),
        Duration: parseInt(formData.get('duration')),
        Address: formData.get('location'), // Assuming locationID is static for this example
        Status: 'Pending',
        Notes: formData.get('notes')
    };
    console.log(sch);
    
    // Check if dogID is not null before setting the request
    if(sch.dogID !== null) {
        setRequest(sch);
        
    }

    if(request) {
        postScheduleWalk(request);
    };


    //console.log(scheduleWalkFormData);
    
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
                        response?.dogs && response.dogs.length > 1 ? <select className=" block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='dog-id' id='dog-id'>
                            <option value=''>Select a dog</option>
                            {response?.dogs.map((dog) => (
                                <option key={dog.id} value={dog.id} >{dog.name}</option>
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